"use client";

import { Menu, Settings } from "lucide-react";
import { useLayout } from "@/contexts/layout-context";
import Image from "next/image";
export function Navbar() {
  const { toggleSidebarCollapse } = useLayout();

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
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}
