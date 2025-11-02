import axios from 'axios';
import type { UserData } from './auth-utils';
import { setTokens, setUserData } from './auth-utils';

const API_BASE_URL = 'https://l0l0bo.com/api';

export interface LoginResponse {
  access: string;
  refresh: string;
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

export interface LoginError {
  message: string;
  detail?: string;
}

// Create axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login function
export const login = async (
  username: string,
  password: string
): Promise<UserData> => {
  try {
    const response = await apiClient.post<LoginResponse>('/token/', {
      username,
      password,
    });

    const { access, refresh, ...userData } = response.data;

    // Store tokens and user data
    setTokens(access, refresh);
    setUserData(userData);

    return userData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Login failed. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

