"use client";

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

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-sora-sans)]">
      <main>
        <HeaderSection />
        <Sidebar />
        <div className="ps-[278px] pt-16">
          <div className="p-10 space-y-8">
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
        </div>
      </main>
    </div>
  );
}
