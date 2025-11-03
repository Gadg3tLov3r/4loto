"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Settings, Plus } from "lucide-react";
import { useLayout } from "@/contexts/layout-context";
import { useAuth } from "@/contexts/auth-context";
import {
  getWallet,
  createDeposit,
  getPaymentMethods,
  type WalletData,
  type PaymentMethod,
} from "@/lib/api-client";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";

export function Navbar() {
  const { toggleSidebarCollapse } = useLayout();
  const { user, isAuthenticated, logout } = useAuth();
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [loadingPaymentMethods, setLoadingPaymentMethods] = useState(false);
  const [depositDialogOpen, setDepositDialogOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [depositLoading, setDepositLoading] = useState(false);
  const [depositError, setDepositError] = useState<string | null>(null);

  const userInitials = user
    ? (
        (user.first_name?.[0] || "") + (user.last_name?.[0] || "") ||
        user.username?.[0] ||
        "U"
      ).toUpperCase()
    : "";

  useEffect(() => {
    if (isAuthenticated) {
      const fetchWallet = async () => {
        try {
          setLoadingWallet(true);
          const walletData = await getWallet();
          setWallet(walletData);
        } catch (error) {
          console.error("Failed to fetch wallet:", error);
        } finally {
          setLoadingWallet(false);
        }
      };

      const fetchPaymentMethods = async () => {
        try {
          setLoadingPaymentMethods(true);
          const methods = await getPaymentMethods();
          // Filter only payment methods that accept payments (for deposits)
          const depositMethods = methods.filter((method) => method.accept_payment);
          setPaymentMethods(depositMethods);
        } catch (error) {
          console.error("Failed to fetch payment methods:", error);
        } finally {
          setLoadingPaymentMethods(false);
        }
      };

      fetchWallet();
      fetchPaymentMethods();
    } else {
      setWallet(null);
      setPaymentMethods([]);
    }
  }, [isAuthenticated]);

  const formatCurrency = (amount: number, currencySign: string) => {
    return `${currencySign} ${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleDeposit = async () => {
    if (!wallet || !paymentMethod || !depositAmount) {
      setDepositError("Please fill in all fields");
      return;
    }

    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      setDepositError("Please enter a valid amount");
      return;
    }

    try {
      setDepositLoading(true);
      setDepositError(null);
      
      const response = await createDeposit({
        amount: amount,
        payment_method: parseInt(paymentMethod),
        currency: wallet.currency_id,
      });

      // If payment link is provided, redirect to it
      if (response.payment_link) {
        window.location.href = response.payment_link;
        return;
      }

      // Refresh wallet balance if no payment link (fallback)
      const walletData = await getWallet();
      setWallet(walletData);

      // Reset form and close dialog
      setDepositAmount("");
      setPaymentMethod("");
      setDepositDialogOpen(false);
    } catch (error) {
      setDepositError(
        error instanceof Error ? error.message : "Failed to create deposit"
      );
    } finally {
      setDepositLoading(false);
    }
  };

  const handleDialogClose = () => {
    setDepositDialogOpen(false);
    setDepositAmount("");
    setPaymentMethod("");
    setDepositError(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0D063A] z-41">
      <div className="h-full flex items-center justify-between px-2 py-2">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebarCollapse}
            className="hidden md:flex items-center size-16 bg-[#231968] justify-center rounded-[24px]"
            aria-label="Toggle sidebar"
          >
            <div className="size-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 0.75H19.35"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0.75 8.5H11.6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0.75 16.25H19.35"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.9941 10.3819C19.9941 10.9785 19.3483 11.3514 18.8316 11.0531L15.3441 9.03959C14.8275 8.74129 14.8275 7.99554 15.3441 7.69725L18.8316 5.68374C19.3483 5.38544 19.9941 5.75831 19.9941 6.35491L19.9941 10.3819Z"
                  fill="#231968"
                />
                <path
                  d="M19.9941 10.3819C19.9941 10.9785 19.3483 11.3514 18.8316 11.0531L15.3441 9.03959C14.8275 8.74129 14.8275 7.99554 15.3441 7.69725L18.8316 5.68374C19.3483 5.38544 19.9941 5.75831 19.9941 6.35491L19.9941 10.3819Z"
                  fill="url(#paint0_linear_176_24107)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_176_24107"
                    x1="26.3994"
                    y1="8.36179"
                    x2="-43.1006"
                    y2="8.36179"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#443AFF" />
                    <stop offset="1" stopColor="#C362FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>

          <div className="flex items-center">
            <Image src="/4logo.png" alt="4loto" width="38" height="47" />
            <div className="hidden md:block uppercase font-bold">Loto</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          {isAuthenticated && wallet && (
            <div className="hidden md:flex items-center gap-2 px-3 h-[50px] bg-muted rounded-3xl">
              <span className="text-sm font-semibold">
                {formatCurrency(wallet.deposit_balance, wallet.currency_sign)}
              </span>
              <Button
                onClick={() => setDepositDialogOpen(true)}
                size="icon"
                className="h-8 w-8 bg-linear-to-r from-[#443AFF] to-[#C362FF] rounded-full shrink-0"
                disabled={wallet.deposit_restrict}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
          <div className="hidden md:flex justify-center items-center size-[50px] bg-linear-to-br from-[#B38626] via-[#F4E98F] to-[#A7791C] rounded-3xl">
            <Image src="/gift.png" alt="4loto" width="36" height="38" />
          </div>
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 h-[50px] px-4 border border-indigo-500 rounded-3xl font-semibold hover:bg-indigo-500/10 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.avatar || undefined}
                      alt={user.username}
                    />
                    <AvatarFallback className="text-xs">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">{user.username}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={logout}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/signup">
                <button className="h-[50px] px-6 bg-linear-to-r from-[#443AFF] to-[#C362FF] rounded-3xl font-semibold text-sm">
                  Create account
                </button>
              </Link>
              <Link href="/login">
                <button className="h-[50px] px-6 border border-indigo-500 rounded-3xl font-semibold hover:bg-indigo-500/10 transition-colors text-sm">
                  Login
                </button>
              </Link>
            </>
          )}
          <button
            className="flex items-center justify-center size-[50px] rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Deposit Dialog */}
      <Dialog open={depositDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Deposit</DialogTitle>
            <DialogDescription>
              Enter the amount and select a payment method to add funds to your account.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="amount">Amount</FieldLabel>
                <Input
                  id="amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
                {depositError && depositError.includes("amount") && (
                  <FieldError>{depositError}</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="payment-method">Payment Method</FieldLabel>
                <Select
                  value={paymentMethod || undefined}
                  onValueChange={setPaymentMethod}
                  disabled={loadingPaymentMethods || paymentMethods.length === 0}
                >
                  <SelectTrigger id="payment-method">
                    <SelectValue
                      placeholder={
                        loadingPaymentMethods
                          ? "Loading..."
                          : paymentMethods.length === 0
                          ? "No payment methods available"
                          : "Select payment method"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethods.map((method) => (
                      <SelectItem key={method.id} value={method.id.toString()}>
                        <div className="flex items-center gap-2">
                          {method.logo && (
                            <img
                              src={method.logo}
                              alt={method.name}
                              className="h-5 w-5 object-contain"
                            />
                          )}
                          <span>{method.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {depositError && depositError.includes("fill") && (
                  <FieldError>{depositError}</FieldError>
                )}
              </Field>
              {depositError && !depositError.includes("amount") && !depositError.includes("fill") && (
                <Field>
                  <FieldError>{depositError}</FieldError>
                </Field>
              )}
            </FieldGroup>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={handleDialogClose}
              disabled={depositLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeposit}
              disabled={depositLoading || !depositAmount || !paymentMethod}
              className="bg-linear-to-r from-[#443AFF] to-[#C362FF]"
            >
              {depositLoading ? "Processing..." : "Deposit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
