"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { AuthState, User, AuthTokens, LoginCredentials } from "@/lib/auth";
import { authAPI } from "@/lib/api";
import {
  getStoredTokens,
  getStoredUser,
  setStoredTokens,
  setStoredUser,
  clearStoredAuth,
} from "@/lib/auth";
import { getAuthErrorMessage, isRequiresReauth } from "@/lib/error-handler";

// Auth action types
type AuthAction =
  | { type: "AUTH_START" }
  | { type: "AUTH_SUCCESS"; payload: { user: User; tokens: AuthTokens } }
  | { type: "AUTH_FAILURE"; payload: string }
  | { type: "AUTH_LOGOUT" }
  | { type: "AUTH_REFRESH"; payload: AuthTokens }
  | { type: "CLEAR_ERROR" };

// Initial state
const initialState: AuthState = {
  user: null,
  tokens: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        tokens: action.payload.tokens,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        user: null,
        tokens: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case "AUTH_REFRESH":
      return {
        ...state,
        tokens: action.payload,
        error: null,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

// Auth context
interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  // Initialize auth state from storage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedTokens = getStoredTokens();
        const storedUser = getStoredUser();

        if (storedTokens && storedUser) {
          // Check if access token is still valid
          const tokenExpiry = storedTokens.expires_in * 1000; // Convert to milliseconds
          const now = Date.now();

          if (now < tokenExpiry) {
            dispatch({
              type: "AUTH_SUCCESS",
              payload: { user: storedUser, tokens: storedTokens },
            });
          } else {
            // Try to refresh the token
            try {
              const refreshResponse = await authAPI.refresh(
                storedTokens.refresh_token
              );
              const newTokens: AuthTokens = {
                access_token: refreshResponse.access_token,
                refresh_token: refreshResponse.refresh_token,
                token_type: refreshResponse.token_type,
                expires_in: refreshResponse.expires_in,
                sid: refreshResponse.sid,
              };

              setStoredTokens(newTokens);
              dispatch({
                type: "AUTH_SUCCESS",
                payload: { user: storedUser, tokens: newTokens },
              });
            } catch (refreshError) {
              // Refresh failed, clear auth
              clearStoredAuth();
              dispatch({ type: "AUTH_LOGOUT" });
            }
          }
        } else {
          dispatch({ type: "AUTH_LOGOUT" });
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        dispatch({
          type: "AUTH_FAILURE",
          payload: "Failed to initialize authentication",
        });
      }
    };

    initializeAuth();
  }, []);

  // Auto-refresh token before expiry
  useEffect(() => {
    if (!state.tokens || !state.isAuthenticated) return;

    const refreshInterval = (state.tokens.expires_in - 300) * 1000; // Refresh 5 minutes before expiry
    const timer = setTimeout(async () => {
      try {
        const refreshResponse = await authAPI.refresh(
          state.tokens!.refresh_token
        );
        const newTokens: AuthTokens = {
          access_token: refreshResponse.access_token,
          refresh_token: refreshResponse.refresh_token,
          token_type: refreshResponse.token_type,
          expires_in: refreshResponse.expires_in,
          sid: refreshResponse.sid,
        };

        setStoredTokens(newTokens);
        dispatch({ type: "AUTH_REFRESH", payload: newTokens });
      } catch (error) {
        console.error("Token refresh failed:", error);
        dispatch({ type: "AUTH_LOGOUT" });
        clearStoredAuth();
      }
    }, refreshInterval);

    return () => clearTimeout(timer);
  }, [state.tokens, state.isAuthenticated]);

  // Login function
  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: "AUTH_START" });

    try {
      const response = await authAPI.login(credentials);

      const tokens: AuthTokens = {
        access_token: response.access_token,
        refresh_token: response.refresh_token,
        token_type: response.token_type,
        expires_in: response.expires_in,
        sid: response.sid,
      };

      setStoredTokens(tokens);
      setStoredUser(response.me);

      dispatch({
        type: "AUTH_SUCCESS",
        payload: { user: response.me, tokens },
      });

      // Redirect to home page after successful login
      // Use a small delay to ensure React state updates are completed
      setTimeout(() => {
        router.replace("/");
      }, 50);
    } catch (error: any) {
      const errorMessage = getAuthErrorMessage(error);
      dispatch({ type: "AUTH_FAILURE", payload: errorMessage });
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      clearStoredAuth();
      dispatch({ type: "AUTH_LOGOUT" });
      router.push("/login");
    }
  };

  // Manual token refresh
  const refreshToken = async () => {
    if (!state.tokens) return;

    try {
      const refreshResponse = await authAPI.refresh(state.tokens.refresh_token);
      const newTokens: AuthTokens = {
        access_token: refreshResponse.access_token,
        refresh_token: refreshResponse.refresh_token,
        token_type: refreshResponse.token_type,
        expires_in: refreshResponse.expires_in,
        sid: refreshResponse.sid,
      };

      setStoredTokens(newTokens);
      dispatch({ type: "AUTH_REFRESH", payload: newTokens });
    } catch (error) {
      console.error("Manual token refresh failed:", error);
      dispatch({ type: "AUTH_LOGOUT" });
      clearStoredAuth();
    }
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
    refreshToken,
    clearError,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
