// Utility functions for handling authentication errors
import { AuthErrorResponse } from "./auth";

/**
 * Extracts a readable error message from various backend error response formats
 * @param error - Error object from axios or similar
 * @returns Human readable error message
 */
interface ErrorResponse {
  response?: {
    data?: AuthErrorResponse;
    status?: number;
    statusText?: string;
  };
  message?: string;
}

export const getAuthErrorMessage = (error: unknown): string => {
  // Handle different error types
  const err = error as ErrorResponse;
  let errorMessage = "An authentication error occurred";

  // Network errors without response
  if (err.message && !err.response) {
    if (err.message.includes("Network Error")) {
      errorMessage = "Network error. Please check your internet connection.";
    } else if (err.message.includes("timeout")) {
      errorMessage = "Request timed out. Please try again.";
    } else {
      errorMessage = err.message;
    }
    return errorMessage;
  }

  // Check for response data structure
  if (err.response?.data) {
    const errorData: AuthErrorResponse = err.response.data;

    // Handle nested error object format: {"error":{"message":"Invalid credentials","code":"unauthorized","extra":null}}
    if (errorData.error && errorData.error.message) {
      errorMessage = errorData.error.message;
    }
    // Handle direct message format: {"message": "Something went wrong"}
    else if (errorData.message) {
      errorMessage = errorData.message;
    }
    // Handle array of errors format
    else if (Array.isArray(errorData.errors) && errorData.errors.length > 0) {
      const firstError = errorData.errors[0];
      errorMessage =
        typeof firstError === "string" ? firstError : firstError.message;
    }
    // Fallback to response status text
    else if (err.response?.statusText) {
      errorMessage = err.response.statusText;
    }
  }

  // HTTP status code specific messages
  const status = err.response?.status;
  switch (status) {
    case 400:
      errorMessage = "Invalid request. Please check your input.";
      break;
    case 401:
      errorMessage =
        "Invalid credentials. Please check your username and password.";
      break;
    case 403:
      errorMessage =
        "Access denied. You don't have permission to perform this action.";
      break;
    case 404:
      errorMessage = "Service not found. Please try again later.";
      break;
    case 500:
      errorMessage = "Server error. Please try again later.";
      break;
    case 503:
      errorMessage = "Service temporarily unavailable. Please try again later.";
      break;
  }

  return errorMessage;
};

/**
 * Checks if an error indicates the user needs to re-login
 * @param error - Error object
 * @returns boolean indicating if user should be redirected to login
 */
export const isRequiresReauth = (error: unknown): boolean => {
  const err = error as ErrorResponse;

  // Check for 401 status code
  if (err.response?.status === 401) {
    return true;
  }

  // Check for specific error codes
  if (err.response?.data?.error?.code === "unauthorized") {
    return true;
  }

  // Check for token-related error messages
  const message = err.response?.data?.error?.message || "";
  return (
    message.toLowerCase().includes("token") ||
    message.toLowerCase().includes("unauthorized") ||
    message.toLowerCase().includes("expired")
  );
};
