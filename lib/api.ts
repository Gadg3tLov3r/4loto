import axios, { AxiosInstance, AxiosResponse } from "axios";
import { AuthResponse, RefreshResponse, LoginCredentials } from "./auth";

// API configuration
const API_BASE_URL = "https://vendor-panel-app-wlvyh.ondigitalocean.app/api/v1";

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  timeout: 10000,
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const tokens =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("auth_tokens") || "null")
        : null;

    if (tokens?.access_token) {
      config.headers.Authorization = `Bearer ${tokens.access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const tokens =
          typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("auth_tokens") || "null")
            : null;

        if (tokens?.refresh_token) {
          const refreshResponse = await axios.post<RefreshResponse>(
            `${API_BASE_URL}/auth/refresh`,
            { refresh_token: tokens.refresh_token }
          );

          const newTokens = {
            access_token: refreshResponse.data.access_token,
            refresh_token: refreshResponse.data.refresh_token,
            token_type: refreshResponse.data.token_type,
            expires_in: refreshResponse.data.expires_in,
            sid: refreshResponse.data.sid,
          };

          // Update stored tokens
          if (typeof window !== "undefined") {
            localStorage.setItem("auth_tokens", JSON.stringify(newTokens));
          }

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${newTokens.access_token}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear auth and redirect to login
        if (typeof window !== "undefined") {
          localStorage.removeItem("auth_tokens");
          localStorage.removeItem("auth_user");
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

// Authentication API functions
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response: AxiosResponse<AuthResponse> = await apiClient.post(
      "/auth/token",
      credentials
    );
    return response.data;
  },

  refresh: async (refreshToken: string): Promise<RefreshResponse> => {
    const response: AxiosResponse<RefreshResponse> = await apiClient.post(
      "/auth/refresh",
      { refresh_token: refreshToken }
    );
    return response.data;
  },

  logout: async (): Promise<void> => {
    // Clear tokens from storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_tokens");
      localStorage.removeItem("auth_user");
    }
  },
};
