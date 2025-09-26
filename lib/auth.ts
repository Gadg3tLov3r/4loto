// Authentication types and interfaces
export interface User {
  id: number;
  username: string;
  principal: string;
  is_superuser: boolean;
  roles: Array<{
    id: number;
    name: string;
  }>;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  sid: string | null;
}

export interface AuthResponse extends AuthTokens {
  me: User;
  permissions: string[];
}

export interface RefreshResponse extends AuthTokens {
  me: null;
  permissions: [];
}

// Error response interface
export interface AuthErrorResponse {
  error?: {
    message: string;
    code: string;
    extra: unknown;
  };
  message?: string;
  errors?:
    | Array<{
        message: string;
      }>
    | string[];
}

export interface LoginCredentials {
  username: string;
  password: string;
  principal: string;
  rotate_session: boolean;
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Token storage utilities
export const TOKEN_STORAGE_KEY = "auth_tokens";
export const USER_STORAGE_KEY = "auth_user";
export const AUTH_COOKIE_NAME = "auth_tokens";

export const getStoredTokens = (): AuthTokens | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(TOKEN_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const setStoredTokens = (tokens: AuthTokens): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokens));
  // Also set cookie for middleware access
  const cookieValue = JSON.stringify(tokens);
  const maxAge = tokens.expires_in || 3600;
  document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(
    cookieValue
  )}; path=/; max-age=${maxAge}; samesite=strict`;
};

export const getStoredUser = (): User | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const setStoredUser = (user: User): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

export const clearStoredAuth = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
  // Clear auth cookie
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; samesite=strict`;
};

// Token expiration utilities
export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return true;
  }
};

export const getTokenExpirationTime = (token: string): number | null => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000; // Convert to milliseconds
  } catch {
    return null;
  }
};
