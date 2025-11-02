"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { UserData } from '@/lib/auth-utils';
import {
  getUserData,
  isAuthenticated,
  clearAuthData,
} from '@/lib/auth-utils';
import { login as apiLogin } from '@/lib/api-client';

interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = () => {
      try {
        if (isAuthenticated()) {
          const userData = getUserData();
          setUser(userData);
        } else {
          clearAuthData();
          setUser(null);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        clearAuthData();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const userData = await apiLogin(username, password);
      setUser(userData);
    } catch (error) {
      clearAuthData();
      setUser(null);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user && isAuthenticated(),
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

