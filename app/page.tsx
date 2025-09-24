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
import { Gift } from "lucide-react";
import Image from "next/image";
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

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            /> */}
          </div>
          <div className="ml-auto px-4 flex gap-2 items-center">
            <div className="hidden md:flex justify-center items-center size-[50px] bg-linear-to-br from-[#B38626] via-[#F4E98F] to-[#A7791C] rounded-3xl">
              <Image src="/gift.png" alt="4loto" width="36" height="38" />
            </div>
            <button className="h-[50px] bg-linear-to-r from-[#443AFF] to-[#C362FF] py-2 px-8 rounded-3xl font-semibold">
              Create account
            </button>
            <button className="h-[50px] px-8 py-2 border border-indigo-500 rounded-3xl font-semibold">
              Login
            </button>
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
      </SidebarInset>
    </SidebarProvider>
  );
}
