"use client";

import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
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
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { BannersSection } from "@/sections/banners";
import { DailyDrawsSection } from "@/sections/daily-draws";
import { HeaderSection } from "@/sections/Header";
import { HeroSection } from "@/sections/hero";
import { LatestPayoffsSection } from "@/sections/latest-payoffs";
import { LuckySpinsSection } from "@/sections/lucky-spins";
import { MostPopularSection } from "@/sections/most-popular";
import { RecentWinnersSection } from "@/sections/recent-winners";
import { Sidebar } from "@/sections/Sidebar";
import { SpecialLotteriesSection } from "@/sections/special-lotteries";
import { StatisticsSection } from "@/sections/statistics";
import { Footer } from "@/components/footer";
import { useAuth } from "@/contexts/auth-context";

export default function Page() {
  const { user, isAuthenticated, logout } = useAuth();
  const userInitials = user
    ? (
        (user.first_name?.[0] || "") + (user.last_name?.[0] || "") ||
        user.username?.[0] ||
        "U"
      ).toUpperCase()
    : "";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            /> */}
          </div>
          <div className="ml-auto px-4 flex gap-2 items-center">
            <ModeToggle />
            <div className="hidden md:flex justify-center items-center size-[50px] bg-linear-to-br from-[#B38626] via-[#F4E98F] to-[#A7791C] rounded-3xl">
              <Image src="/gift.png" alt="4loto" width="36" height="38" />
            </div>
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 h-[50px] text-xs md:text-base px-[18px] md:px-4 border border-indigo-500 rounded-3xl font-semibold hover:bg-indigo-500/10 transition-colors">
                    <Avatar className="h-6 w-6 md:h-8 md:w-8">
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
                  <button className="h-[50px] text-xs md:text-base bg-linear-to-r from-[#443AFF] to-[#C362FF] px-[18px] md:px-8 rounded-3xl font-semibold">
                    Create account
                  </button>
                </Link>
                <Link href="/login">
                  <button className="h-[50px] text-xs md:text-base px-[18px] md:px-8 border border-indigo-500 rounded-3xl font-semibold hover:bg-indigo-500/10 transition-colors">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <HeroSection />
          <MostPopularSection />
          <DailyDrawsSection />
          <SpecialLotteriesSection />
          <BannersSection />
          <LuckySpinsSection />
          <StatisticsSection />
          <LatestPayoffsSection />
          <RecentWinnersSection />
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
