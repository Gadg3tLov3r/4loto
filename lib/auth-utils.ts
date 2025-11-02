// Token utility functions for authentication

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_DATA_KEY = 'user_data';

export interface UserData {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  city: string;
  country: string;
  verified_email: boolean;
  verified_phone: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  date_joined: string;
  currency_id: number;
  currency_sign: string;
  currency_name: string;
  avatar: string | null;
}

// Token management
export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setTokens = (access: string, refresh: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACCESS_TOKEN_KEY, access);
  localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
};

export const removeTokens = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_DATA_KEY);
};

// User data management
export const getUserData = (): UserData | null => {
  if (typeof window === 'undefined') return null;
  const userDataStr = localStorage.getItem(USER_DATA_KEY);
  if (!userDataStr) return null;
  try {
    return JSON.parse(userDataStr) as UserData;
  } catch {
    return null;
  }
};

export const setUserData = (userData: UserData): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
};

export const clearAuthData = (): void => {
  removeTokens();
};

// JWT token utilities
export const decodeJWT = (token: string): any | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;
  const decoded = decodeJWT(token);
  if (!decoded || !decoded.exp) return true;
  const exp = decoded.exp * 1000; // Convert to milliseconds
  return Date.now() >= exp;
};

export const isAuthenticated = (): boolean => {
  const token = getAccessToken();
  if (!token) return false;
  return !isTokenExpired(token);
};

