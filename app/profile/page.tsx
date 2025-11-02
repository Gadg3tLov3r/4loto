"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { getProfile, getWallet } from "@/lib/api-client";
import type { ProfileData, WalletData } from "@/lib/api-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Wallet,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Lock,
  Unlock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!authLoading && !isAuthenticated) {
      router.push("/login");
      return;
    }

    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated, authLoading, router]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const [profileData, walletData] = await Promise.all([
        getProfile(),
        getWallet(),
      ]);
      setProfile(profileData);
      setWallet(walletData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-4" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-48 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={fetchProfile}>Retry</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  const userInitials = (
    (profile.first_name?.[0] || "") + (profile.last_name?.[0] || "") || profile.username[0]
  ).toUpperCase();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number, currencySign: string) => {
    return `${currencySign} ${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={undefined} alt={profile.username} />
                  <AvatarFallback className="text-2xl">{userInitials}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">
                    {profile.first_name} {profile.last_name}
                  </h2>
                  <p className="text-muted-foreground">@{profile.username}</p>
                  <div className="flex gap-2 mt-2 justify-center md:justify-start">
                    {profile.verified_email && (
                      <Badge variant="default" className="bg-green-600">
                        Verified Email
                      </Badge>
                    )}
                    {profile.verified_phone && (
                      <Badge variant="default" className="bg-green-600">
                        Verified Phone
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{profile.phone || "Not provided"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">
                        {profile.city}, {profile.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">{formatDate(profile.date_joined)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Card */}
        {wallet && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <CardTitle>Wallet</CardTitle>
              </div>
              <CardDescription>Your wallet information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Balance Overview */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Deposit Balance
                    </p>
                    <p className="text-lg md:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {formatCurrency(wallet.deposit_balance, wallet.currency_sign)}
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Withdraw Balance
                    </p>
                    <p className="text-lg md:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {formatCurrency(wallet.withdraw_balance, wallet.currency_sign)}
                    </p>
                  </div>
                </div>

                {/* Transaction Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">
                        Total Deposits
                      </span>
                    </div>
                    <span className="font-semibold">
                      {formatCurrency(wallet.total_deposit, wallet.currency_sign)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-muted-foreground">
                        Total Withdrawals
                      </span>
                    </div>
                    <span className="font-semibold">
                      {formatCurrency(wallet.total_withdraw, wallet.currency_sign)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-muted-foreground">
                        Purchases
                      </span>
                    </div>
                    <span className="font-semibold">{wallet.purchase_count}</span>
                  </div>
                </div>

                {/* Transaction Counts */}
                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Deposit Count</p>
                      <p className="font-medium">{wallet.deposit_count}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Withdraw Count</p>
                      <p className="font-medium">{wallet.withdraw_count}</p>
                    </div>
                  </div>
                </div>

                {/* Restrictions */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      Deposit Restriction
                    </span>
                    {wallet.deposit_restrict ? (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Restricted
                      </Badge>
                    ) : (
                      <Badge variant="default" className="bg-green-600 flex items-center gap-1">
                        <Unlock className="h-3 w-3" />
                        Allowed
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Withdraw Restriction
                    </span>
                    {wallet.withdraw_restrict ? (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Restricted
                      </Badge>
                    ) : (
                      <Badge variant="default" className="bg-green-600 flex items-center gap-1">
                        <Unlock className="h-3 w-3" />
                        Allowed
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/deposit-list">
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                        disabled={wallet.deposit_restrict}
                      >
                        <span>View Deposits</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/withdraw-list">
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                        disabled={wallet.withdraw_restrict}
                      >
                        <span>View Withdrawals</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

