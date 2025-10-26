"use client";
import { BannersSection } from "@/sections/banners";
import { DailyDrawsSection } from "@/sections/daily-draws";
import { SpecialLotteriesSection } from "@/sections/special-lotteries";
import { LuckySpinsSection } from "@/sections/lucky-spins";
import { StatisticsSection } from "@/sections/statistics";
import { LatestPayoffsSection } from "@/sections/latest-payoffs";
import { RecentWinnersSection } from "@/sections/recent-winners";
import { HeroSection } from "@/sections/hero";
import { MostPopularSection } from "@/sections/most-popular";
import { useLayout } from "@/contexts/layout-context";

export function MainContent() {
  const { isSidebarCollapsed } = useLayout();

  return (
    <main
      className={`pt-16 pb-20 md:pb-6 transition-all duration-300
        ${isSidebarCollapsed ? "md:ml-20" : "md:ml-64"}
      `}
    >
      <div className="p-6 space-y-4">
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
    </main>
  );
}
