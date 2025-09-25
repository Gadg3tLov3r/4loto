"use client";

import Image from "next/image";
import TimerIcon from "@/public/timer.svg";
import CrownIcon from "@/public/crown.svg";
import { useState, useEffect } from "react";

const data = [
  {
    title: "Daily Draws",
    nextDrawTime: "2025-09-23T15:30:00Z", // ISO string format
    prize: "5000",
    badge: "Top prizes",
    image: "/calendar.png",
    gradient: "bg-gradient-to-r from-[#C471F5] to-[#FA71CD]",
  },
  {
    title: "Weekly Draws",
    nextDrawTime: "2025-09-26T15:30:00Z", // ISO string format
    prize: "10000",
    badge: "Biggest wins",
    image: "/clover.png",
    gradient: "bg-gradient-to-r from-[#ED6EA0] to-[#EC8C69]",
  },
  {
    title: "Lucky Spins",
    nextDrawTime: "2025-09-26T15:30:00Z", // ISO string format
    prize: "500000",
    badge: "Fastest plays",
    image: "/wheel.svg",
    gradient: "bg-gradient-to-r from-[#48CACA] to-[#48A1CA]",
  },
];

export const DailyDrawsSection = () => {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  const formatTimeLeft = (targetDateString: string): string => {
    const now = new Date();
    const targetDate = new Date(targetDateString);
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return "00:00:00";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days}d:${hours.toString().padStart(2, "0")}h:${minutes
        .toString()
        .padStart(2, "0")}m:${seconds.toString().padStart(2, "0")}s`;
    } else {
      return `${hours.toString().padStart(2, "0")}h:${minutes
        .toString()
        .padStart(2, "0")}m:${seconds.toString().padStart(2, "0")}s`;
    }
  };

  const formatPrize = (prize: string): string => {
    const num = parseInt(prize);
    return num.toLocaleString("en-US").replace(/,/g, " ");
  };

  useEffect(() => {
    const updateCountdown = () => {
      const newTimeLeft: { [key: number]: string } = {};
      data.forEach((item, index) => {
        newTimeLeft[index] = formatTimeLeft(item.nextDrawTime);
      });
      setTimeLeft(newTimeLeft);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${item.gradient} p-10 rounded-[40px] space-y-4 relative overflow-clip h-[359px] md:h-[395px]`}
        >
          <h1 className="uppercase font-semibold text-2xl md:text-[33px] max-w-[5rem]">
            {item.title}
          </h1>
          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[35px]">
              <TimerIcon />
            </div>
            <div>
              <p className="text-xs">Time to the next draw</p>
              <div className="text-[20px] md:text-2xl font-semibold">
                {timeLeft[index] || "00:00:00"}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[35px]">
              <CrownIcon />
            </div>
            <div>
              <p className="text-xs">Prize pool</p>
              <div className="text-[20px] md:text-2xl font-semibold">
                ${formatPrize(item.prize)}
              </div>
            </div>
          </div>
          <button className="bg-[#048AE0] px-8 py-2 rounded-3xl font-bold h-[50px] mt-5">
            Play now
          </button>
          <div className="bg-linear-to-b from-[#C70042] to-[#FF0055] w-[74px] h-[81px] md:w-[120px] md:h-[110px] flex items-center justify-center absolute right-10 top-0">
            <div className="text-[10px] md:text-base uppercase font-bold max-w-[50px] md:max-w-[90px] text-center">
              {item.badge}
            </div>
          </div>
          <Image
            className={`absolute right-0 -bottom-5 w-[210] h-[210]  md:w-[220px] md:h-[220px] ${
              index === 2 ? "rotate-0" : "-rotate-[13.65deg]"
            }`}
            src={item.image}
            alt="calendar"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};
