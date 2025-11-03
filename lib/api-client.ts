import axios from 'axios';
import type { UserData } from './auth-utils';
import { setTokens, setUserData, getAccessToken } from './auth-utils';

const API_BASE_URL = 'https://l0l0bo.com/api';
const GATEWAY_API_BASE_URL = 'https://gateway.l0l0bo.com/api/v1';

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

export interface ProfileData {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
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
}

export interface WalletData {
  id: number;
  total_deposit: number;
  deposit_balance: number;
  withdraw_balance: number;
  total_withdraw: number;
  deposit_count: number;
  withdraw_count: number;
  purchase_count: number;
  withdraw_restrict: boolean;
  deposit_restrict: boolean;
  currency_id: number;
  currency_name: string;
  currency_sign: string;
}

// Create axios instance for auth API
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create axios instance for gateway API
export const gatewayApiClient = axios.create({
  baseURL: GATEWAY_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include JWT token
gatewayApiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

// Get user profile
export const getProfile = async (): Promise<ProfileData> => {
  try {
    const response = await gatewayApiClient.get<ProfileData>('/users/profile');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch profile. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

// Get user wallet
export const getWallet = async (): Promise<WalletData> => {
  try {
    const response = await gatewayApiClient.get<WalletData>('/users/wallet');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch wallet. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

export interface WithdrawLogItem {
  order_id: string;
  amount: number;
  payment_method: string;
  account_number: string;
  currency: string;
  status: string;
  created_at: string;
}

export interface WithdrawLogsResponse {
  total: number;
  page: number;
  page_size: number;
  items: WithdrawLogItem[];
}

export interface WithdrawLogsFilters {
  page?: number;
  page_size?: number;
  status?: string;
  order_id?: string;
  start_date?: string;
  end_date?: string;
}

// Get withdrawal logs
export const getWithdrawLogs = async (
  filters?: WithdrawLogsFilters
): Promise<WithdrawLogsResponse> => {
  try {
    const params = new URLSearchParams();
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.page_size) params.append('page_size', filters.page_size.toString());
    if (filters?.status) params.append('status', filters.status);
    if (filters?.order_id) params.append('order_id', filters.order_id);
    if (filters?.start_date) params.append('start_date', filters.start_date);
    if (filters?.end_date) params.append('end_date', filters.end_date);

    const response = await gatewayApiClient.get<WithdrawLogsResponse>(
      `/withdraws/logs?${params.toString()}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch withdrawal logs. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

export interface DepositLogItem {
  order_id: string;
  amount: number;
  received_amount: number | null;
  payment_method: string;
  currency: string;
  status: string;
  created_at: string;
}

export interface DepositLogsResponse {
  total: number;
  page: number;
  page_size: number;
  items: DepositLogItem[];
}

export interface DepositLogsFilters {
  page?: number;
  page_size?: number;
  status?: string;
  order_id?: string;
  start_date?: string;
  end_date?: string;
}

// Get deposit logs
export const getDepositLogs = async (
  filters?: DepositLogsFilters
): Promise<DepositLogsResponse> => {
  try {
    const params = new URLSearchParams();
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.page_size) params.append('page_size', filters.page_size.toString());
    if (filters?.status) params.append('status', filters.status);
    if (filters?.order_id) params.append('order_id', filters.order_id);
    if (filters?.start_date) params.append('start_date', filters.start_date);
    if (filters?.end_date) params.append('end_date', filters.end_date);

    const response = await gatewayApiClient.get<DepositLogsResponse>(
      `/deposits/logs?${params.toString()}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch deposit logs. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

export interface CreateDepositRequest {
  amount: number;
  payment_method: number;
  currency: number;
}

export interface CreateDepositResponse {
  payment_link: string;
  order_id?: string;
  message?: string;
  [key: string]: any;
}

export interface PaymentMethod {
  id: number;
  name: string;
  accept_payment: boolean;
  accept_payout: boolean;
  logo: string;
}

// Get payment methods
export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
  try {
    const response = await gatewayApiClient.get<PaymentMethod[]>(
      '/users/payment-methods'
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch payment methods. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

// Create deposit
export const createDeposit = async (
  data: CreateDepositRequest
): Promise<CreateDepositResponse> => {
  try {
    const token = getAccessToken();
    if (!token) {
      throw new Error('Not authenticated');
    }

    const response = await axios.post<CreateDepositResponse>(
      `${API_BASE_URL}/tranasactions/deposit/create`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        error.message ||
        'Failed to create deposit. Please try again.';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};

