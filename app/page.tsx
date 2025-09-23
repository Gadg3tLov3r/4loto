"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SpecialLotteryCard } from "@/components/special-lottery-card";
import Table from "@/components/table";
import { HeaderSection } from "@/sections/Header";
import { Sidebar } from "@/sections/Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <HeaderSection />
        <Sidebar />
        <div className="ps-[278px] pt-16">
          <div className="p-10 space-y-8">
            <div className="bg-linear-to-b from-[#6F48F5] to-[#412A8F] rounded-[50px] flex flex-col p-12">
              <div className="flex items-center self-center">
                <Image src="/4hero.png" alt="4loto" width={80} height={99} />
                <span className="text-[32px] font-extrabold">LOTO</span>
              </div>
              <div className="space-y-8">
                <h1 className="uppercase text-[64px] font-bold leading-[130%] max-w-xl">
                  Boost for your first deposit
                </h1>
                <p className="text-xl leading-[135%] max-w-sm">
                  Top up your balance up to 10 000 BDT (or equivalent in other
                  currency) and receive the same amount as a gift
                </p>
                <div className="flex gap-3">
                  <button className="bg-linear-to-r from-[#443AFF] to-[#C362FF] py-2 px-8 rounded-3xl font-semibold h-[50px]">
                    Play now
                  </button>
                  <button className="py-2 px-8 rounded-3xl font-semibold bg-white text-black h-[50px]">
                    How to play
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-2xl font-bold uppercase">Most popular</div>
                <div className="flex">
                  <ChevronLeft />
                  <ChevronRight />
                </div>
              </div>
            </div>
            <div className="bg-yellow-100 p-10 rounded-3xl space-y-8">
              <div>
                <h2 className="text-black text-3xl font-bold uppercase max-w-[10rem]">
                  5-minute draws
                </h2>
                <p className="text-[#B38626] text-2xl font-bold uppercase">
                  Get your tickets before the time runs out
                </p>
              </div>
              <button className="bg-linear-to-b from-[#B38626] to-[#FCEE96] text-black px-8 py-2 rounded-3xl font-bold h-[50px]">
                Play now
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-linear-to-r from-[#C471F5] to-[#FA71CD] p-10 rounded-3xl space-y-2"
                >
                  <h1 className="uppercase font-bold text-2xl max-w-[5rem]">
                    Daily Draws
                  </h1>
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[35px]">
                      <svg
                        width="31"
                        height="36"
                        viewBox="0 0 31 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 9.25037L15.1555 0.5L30.3113 9.25037V26.75L15.1555 35.5L0 26.75V9.25037Z"
                          fill="url(#paint0_linear_1_32951)"
                        />
                        <path
                          d="M0.34375 9.44921L15.1548 0.897461L29.9659 9.44921V26.5512L15.1548 35.1022L0.34375 26.5512V9.44921Z"
                          fill="url(#paint1_linear_1_32951)"
                        />
                        <path
                          opacity="0.9"
                          d="M6.19531 9.04363C6.19531 9.04363 6.40972 8.81748 6.79375 8.43088C6.8903 8.33506 6.99714 8.22859 7.11352 8.11294C7.24166 8.00867 7.38043 7.89559 7.52839 7.77517C7.67745 7.65402 7.83605 7.52478 8.00347 7.38857C8.16904 7.24759 8.36987 7.14406 8.56556 7.01152C8.76528 6.8845 8.97271 6.75232 9.18785 6.61538C9.41658 6.50193 9.65265 6.38409 9.89533 6.26293C10.0172 6.20272 10.1406 6.14177 10.2658 6.08009C10.3928 6.02282 10.5268 5.9784 10.6597 5.92626C10.9277 5.82677 11.2016 5.72581 11.4799 5.62301C12.0559 5.48386 12.6426 5.28488 13.266 5.22026C13.8813 5.10241 14.518 5.0958 15.1516 5.05908C15.7857 5.09543 16.4219 5.10241 17.0373 5.22026C17.6607 5.28377 18.247 5.48349 18.8234 5.62227C19.102 5.72507 19.3759 5.8264 19.6439 5.92516C19.7768 5.97766 19.9109 6.02209 20.0379 6.07936C20.1627 6.14104 20.2864 6.20198 20.408 6.26256C20.651 6.38335 20.8871 6.50047 21.1154 6.61428C21.3306 6.75159 21.5384 6.88376 21.7377 7.01079C21.933 7.14333 22.1346 7.24796 22.2994 7.38747C22.4661 7.52332 22.624 7.65181 22.7727 7.77297C22.9206 7.89302 23.0587 8.0061 23.1868 8.11037C23.3039 8.22638 23.4115 8.33359 23.5088 8.43015C23.8947 8.81858 24.1076 9.04363 24.1076 9.04363C24.1076 9.04363 23.8594 8.85235 23.4383 8.51092C23.3333 8.42574 23.2173 8.33102 23.091 8.22822C22.9548 8.13827 22.8076 8.04098 22.6501 7.93708C22.3369 7.72818 21.9885 7.4888 21.5751 7.28174C21.3728 7.17233 21.1624 7.05888 20.9443 6.94066C20.7171 6.84264 20.4818 6.74131 20.2398 6.63741C20.1194 6.58528 19.9975 6.53241 19.8738 6.47881C19.7486 6.42998 19.616 6.39436 19.4857 6.35031C19.2243 6.2644 18.9574 6.17629 18.6857 6.08671C18.1262 5.96775 17.5575 5.80511 16.9598 5.74563C16.3691 5.63733 15.7585 5.6399 15.1513 5.60832C14.5444 5.63916 13.9338 5.63733 13.3428 5.74526C12.7447 5.80364 12.176 5.96702 11.6165 6.08634C11.3448 6.17555 11.0779 6.2633 10.8161 6.34921C10.6858 6.3929 10.5536 6.42924 10.428 6.47807C10.3047 6.53167 10.1824 6.58454 10.062 6.63667C9.82006 6.74057 9.5851 6.84227 9.35747 6.93993C9.13939 7.05778 8.92902 7.17196 8.72673 7.28137C8.3126 7.4888 7.96639 7.72634 7.65432 7.93451C7.49718 8.03841 7.34996 8.13533 7.21412 8.22528C7.08672 8.32882 6.96997 8.4239 6.86424 8.50981C6.4424 8.85309 6.19531 9.04363 6.19531 9.04363Z"
                          fill="white"
                        />
                        <path
                          opacity="0.9"
                          d="M24.1083 26.9565C24.1083 26.9565 23.8939 27.1827 23.5099 27.5693C23.4133 27.6651 23.3065 27.7716 23.1901 27.8872C23.062 27.9915 22.9232 28.1046 22.7753 28.225C22.6262 28.3462 22.4676 28.4754 22.3002 28.6116C22.1346 28.7526 21.9338 28.8561 21.7381 28.9887C21.5387 29.1157 21.3309 29.2482 21.1154 29.3852C20.8871 29.4986 20.651 29.6161 20.4083 29.7372C20.2864 29.7975 20.1631 29.8584 20.0379 29.9201C19.9108 29.9774 19.7765 30.0218 19.6439 30.0739C19.3759 30.1734 19.102 30.2744 18.8238 30.3772C18.2473 30.5163 17.661 30.7153 17.0376 30.7799C16.4223 30.8978 15.7861 30.9044 15.152 30.9411C14.518 30.9047 13.8813 30.8978 13.266 30.7799C12.6426 30.7164 12.0563 30.5167 11.4799 30.3775C11.2016 30.2751 10.9277 30.1738 10.6593 30.075C10.5268 30.0225 10.3924 29.9781 10.2654 29.9208C10.1402 29.8591 10.0168 29.7982 9.89496 29.7376C9.65191 29.6168 9.41584 29.4997 9.18748 29.3859C8.97234 29.249 8.76454 29.1164 8.56519 28.9894C8.36987 28.8569 8.16831 28.7522 8.00347 28.6127C7.83678 28.4769 7.67891 28.3484 7.53022 28.2272C7.38263 28.1072 7.24422 27.9941 7.11609 27.8902C6.99898 27.7738 6.8914 27.6666 6.79411 27.57C6.40825 27.1816 6.19531 26.9565 6.19531 26.9565C6.19531 26.9565 6.4435 27.1482 6.8646 27.4893C6.96961 27.5744 7.08562 27.6692 7.21192 27.772C7.34812 27.8619 7.49535 27.9592 7.65285 28.0631C7.96602 28.272 8.31443 28.5114 8.72783 28.7184C8.93012 28.8278 9.14049 28.9417 9.35857 29.0595C9.5862 29.1575 9.82117 29.2589 10.0627 29.3628C10.1832 29.4149 10.3054 29.4678 10.4288 29.5214C10.5543 29.5702 10.6865 29.6058 10.8168 29.6499C11.0782 29.7358 11.3455 29.8239 11.6168 29.9135C12.1764 30.0324 12.7451 30.1951 13.3428 30.2545C13.9338 30.3625 14.544 30.3603 15.1513 30.3919C15.7582 30.361 16.3687 30.3629 16.9598 30.2549C17.5579 30.1965 18.1266 30.0332 18.6861 29.9138C18.9578 29.8246 19.2247 29.7369 19.4861 29.651C19.6168 29.6073 19.7489 29.5709 19.8745 29.5221C19.9979 29.4685 20.1201 29.4156 20.2405 29.3635C20.4825 29.2596 20.7175 29.1579 20.9451 29.0602C21.1632 28.9424 21.3735 28.8282 21.5758 28.7188C21.99 28.5114 22.3362 28.2738 22.6482 28.0657C22.8054 27.9621 22.9526 27.8648 23.0884 27.7749C23.2158 27.6714 23.3326 27.5763 23.4383 27.4904C23.8616 27.1467 24.1083 26.9565 24.1083 26.9565Z"
                          fill="white"
                        />
                        <path
                          d="M15.1506 30.6665C22.146 30.6665 27.8169 24.9956 27.8169 18.0002C27.8169 11.0049 22.146 5.33398 15.1506 5.33398C8.15525 5.33398 2.48438 11.0049 2.48438 18.0002C2.48438 24.9956 8.15525 30.6665 15.1506 30.6665Z"
                          fill="#893B0C"
                        />
                        <path
                          d="M15.1565 30.3907C21.9998 30.3907 27.5474 24.8431 27.5474 17.9998C27.5474 11.1565 21.9998 5.60889 15.1565 5.60889C8.31322 5.60889 2.76562 11.1565 2.76562 17.9998C2.76562 24.8431 8.31322 30.3907 15.1565 30.3907Z"
                          fill="url(#paint2_linear_1_32951)"
                        />
                        <path
                          d="M15.1562 35.4999V35.1023L29.9673 26.5513L30.3121 26.7499L15.1562 35.4999Z"
                          fill="#692E0A"
                        />
                        <path
                          d="M0 26.7499L0.344377 26.5513L15.1551 35.1023L15.1555 35.4999L0 26.7499Z"
                          fill="url(#paint3_linear_1_32951)"
                        />
                        <path
                          opacity="0.4"
                          d="M30.3113 17.0169V26.7504L28.9687 27.5255L6.77994 5.33675L14.293 0.999023L30.3113 17.0169ZM16.1012 34.9541L21.5146 31.8283L0 10.3137V18.8529L16.1012 34.9541Z"
                          fill="url(#paint4_linear_1_32951)"
                        />
                        <path
                          d="M17.7695 14.5767H17.7676C17.7316 15.7913 16.045 17.0573 15.2744 17.9663C16.0429 18.8833 17.7355 20.1296 17.7715 21.3462H17.7734V24.2583H12.0273V21.3462H12.0293C12.0652 20.1313 13.752 18.8647 14.5225 17.9556C13.7538 17.0386 12.0614 15.793 12.0254 14.5767H12.0234V11.6646H17.7695V14.5767Z"
                          fill="url(#paint5_linear_1_32951)"
                        />
                        <path
                          d="M17.7695 14.5767H17.7676C17.7325 15.7596 16.1304 16.9899 15.335 17.8931C16.1287 18.8239 17.7361 20.0641 17.7715 21.2769H17.7734V24.2583H12.0273V21.2769H12.0293C12.0646 20.066 13.6656 18.8058 14.4609 17.8813C13.6668 16.972 12.0605 15.7609 12.0254 14.5767H12.0234V11.6646H17.7695V14.5767Z"
                          fill="url(#paint6_linear_1_32951)"
                        />
                        <path
                          d="M18.6523 14.5156H18.6504C18.6147 15.7111 16.9889 16.9557 16.2002 17.8633C16.9873 18.7876 18.6189 20.0261 18.6543 21.2363H18.6562V24.1885H12.9102V21.2363H12.9121C12.9474 20.0279 14.5725 18.769 15.3613 17.8516C14.574 16.9374 12.944 15.7124 12.9082 14.5156H12.9062V11.5947H18.6523V14.5156Z"
                          fill="url(#paint7_linear_1_32951)"
                        />
                        <path
                          d="M18.1367 14.3789H18.1348C18.098 15.6221 16.332 16.919 15.5889 17.832C16.3292 18.7545 18.1013 20.0303 18.1387 21.2754L18.1406 21.2764V24.1885L12.3945 24.1875V21.2754H12.3965C12.4337 20.0322 14.1995 18.7352 14.9424 17.8223C14.2018 16.8997 12.4294 15.624 12.3926 14.3789H12.3906V11.4668H18.1367V14.3789Z"
                          fill="url(#paint8_linear_1_32951)"
                        />
                        <path
                          d="M11.4801 24.2397L10.8594 24.9687L19.5234 24.9771L18.9009 24.2475L11.4801 24.2397Z"
                          fill="url(#paint9_linear_1_32951)"
                        />
                        <path
                          d="M18.9027 11.6934L19.5234 10.9644L10.8594 10.956L11.4819 11.6856L18.9027 11.6934Z"
                          fill="url(#paint10_linear_1_32951)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_32951"
                            x1="-18.3502"
                            y1="-15.4426"
                            x2="30.571"
                            y2="33.3868"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_32951"
                            x1="-5.69538"
                            y1="-3.02486"
                            x2="37.0911"
                            y2="40.1203"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_32951"
                            x1="-3.43353"
                            y1="-10.7415"
                            x2="23.8626"
                            y2="31.4597"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_32951"
                            x1="12.6509"
                            y1="34.7128"
                            x2="-0.0155396"
                            y2="25.2588"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_1_32951"
                            x1="0"
                            y1="17.9763"
                            x2="30.3111"
                            y2="17.9763"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="#FAF7F5"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_1_32951"
                            x1="9.32078"
                            y1="8.19699"
                            x2="19.6601"
                            y2="9.9759"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_1_32951"
                            x1="9.32078"
                            y1="8.19699"
                            x2="19.6601"
                            y2="9.9759"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_1_32951"
                            x1="10.2036"
                            y1="8.12716"
                            x2="20.5429"
                            y2="9.90608"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_1_32951"
                            x1="10.6643"
                            y1="6.6037"
                            x2="25.1127"
                            y2="9.64697"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear_1_32951"
                            x1="-0.049859"
                            y1="6.38483"
                            x2="13.7487"
                            y2="23.2133"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint10_linear_1_32951"
                            x1="30.4327"
                            y1="29.5483"
                            x2="16.6341"
                            y2="12.7198"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs">Time to the next draw</p>
                      <div className="text-2xl font-bold">12h:15m:45s</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[35px]">
                      <svg
                        width="31"
                        height="36"
                        viewBox="0 0 31 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 9.25037L15.1555 0.5L30.3113 9.25037V26.75L15.1555 35.5L0 26.75V9.25037Z"
                          fill="url(#paint0_linear_1_32951)"
                        />
                        <path
                          d="M0.34375 9.44921L15.1548 0.897461L29.9659 9.44921V26.5512L15.1548 35.1022L0.34375 26.5512V9.44921Z"
                          fill="url(#paint1_linear_1_32951)"
                        />
                        <path
                          opacity="0.9"
                          d="M6.19531 9.04363C6.19531 9.04363 6.40972 8.81748 6.79375 8.43088C6.8903 8.33506 6.99714 8.22859 7.11352 8.11294C7.24166 8.00867 7.38043 7.89559 7.52839 7.77517C7.67745 7.65402 7.83605 7.52478 8.00347 7.38857C8.16904 7.24759 8.36987 7.14406 8.56556 7.01152C8.76528 6.8845 8.97271 6.75232 9.18785 6.61538C9.41658 6.50193 9.65265 6.38409 9.89533 6.26293C10.0172 6.20272 10.1406 6.14177 10.2658 6.08009C10.3928 6.02282 10.5268 5.9784 10.6597 5.92626C10.9277 5.82677 11.2016 5.72581 11.4799 5.62301C12.0559 5.48386 12.6426 5.28488 13.266 5.22026C13.8813 5.10241 14.518 5.0958 15.1516 5.05908C15.7857 5.09543 16.4219 5.10241 17.0373 5.22026C17.6607 5.28377 18.247 5.48349 18.8234 5.62227C19.102 5.72507 19.3759 5.8264 19.6439 5.92516C19.7768 5.97766 19.9109 6.02209 20.0379 6.07936C20.1627 6.14104 20.2864 6.20198 20.408 6.26256C20.651 6.38335 20.8871 6.50047 21.1154 6.61428C21.3306 6.75159 21.5384 6.88376 21.7377 7.01079C21.933 7.14333 22.1346 7.24796 22.2994 7.38747C22.4661 7.52332 22.624 7.65181 22.7727 7.77297C22.9206 7.89302 23.0587 8.0061 23.1868 8.11037C23.3039 8.22638 23.4115 8.33359 23.5088 8.43015C23.8947 8.81858 24.1076 9.04363 24.1076 9.04363C24.1076 9.04363 23.8594 8.85235 23.4383 8.51092C23.3333 8.42574 23.2173 8.33102 23.091 8.22822C22.9548 8.13827 22.8076 8.04098 22.6501 7.93708C22.3369 7.72818 21.9885 7.4888 21.5751 7.28174C21.3728 7.17233 21.1624 7.05888 20.9443 6.94066C20.7171 6.84264 20.4818 6.74131 20.2398 6.63741C20.1194 6.58528 19.9975 6.53241 19.8738 6.47881C19.7486 6.42998 19.616 6.39436 19.4857 6.35031C19.2243 6.2644 18.9574 6.17629 18.6857 6.08671C18.1262 5.96775 17.5575 5.80511 16.9598 5.74563C16.3691 5.63733 15.7585 5.6399 15.1513 5.60832C14.5444 5.63916 13.9338 5.63733 13.3428 5.74526C12.7447 5.80364 12.176 5.96702 11.6165 6.08634C11.3448 6.17555 11.0779 6.2633 10.8161 6.34921C10.6858 6.3929 10.5536 6.42924 10.428 6.47807C10.3047 6.53167 10.1824 6.58454 10.062 6.63667C9.82006 6.74057 9.5851 6.84227 9.35747 6.93993C9.13939 7.05778 8.92902 7.17196 8.72673 7.28137C8.3126 7.4888 7.96639 7.72634 7.65432 7.93451C7.49718 8.03841 7.34996 8.13533 7.21412 8.22528C7.08672 8.32882 6.96997 8.4239 6.86424 8.50981C6.4424 8.85309 6.19531 9.04363 6.19531 9.04363Z"
                          fill="white"
                        />
                        <path
                          opacity="0.9"
                          d="M24.1083 26.9565C24.1083 26.9565 23.8939 27.1827 23.5099 27.5693C23.4133 27.6651 23.3065 27.7716 23.1901 27.8872C23.062 27.9915 22.9232 28.1046 22.7753 28.225C22.6262 28.3462 22.4676 28.4754 22.3002 28.6116C22.1346 28.7526 21.9338 28.8561 21.7381 28.9887C21.5387 29.1157 21.3309 29.2482 21.1154 29.3852C20.8871 29.4986 20.651 29.6161 20.4083 29.7372C20.2864 29.7975 20.1631 29.8584 20.0379 29.9201C19.9108 29.9774 19.7765 30.0218 19.6439 30.0739C19.3759 30.1734 19.102 30.2744 18.8238 30.3772C18.2473 30.5163 17.661 30.7153 17.0376 30.7799C16.4223 30.8978 15.7861 30.9044 15.152 30.9411C14.518 30.9047 13.8813 30.8978 13.266 30.7799C12.6426 30.7164 12.0563 30.5167 11.4799 30.3775C11.2016 30.2751 10.9277 30.1738 10.6593 30.075C10.5268 30.0225 10.3924 29.9781 10.2654 29.9208C10.1402 29.8591 10.0168 29.7982 9.89496 29.7376C9.65191 29.6168 9.41584 29.4997 9.18748 29.3859C8.97234 29.249 8.76454 29.1164 8.56519 28.9894C8.36987 28.8569 8.16831 28.7522 8.00347 28.6127C7.83678 28.4769 7.67891 28.3484 7.53022 28.2272C7.38263 28.1072 7.24422 27.9941 7.11609 27.8902C6.99898 27.7738 6.8914 27.6666 6.79411 27.57C6.40825 27.1816 6.19531 26.9565 6.19531 26.9565C6.19531 26.9565 6.4435 27.1482 6.8646 27.4893C6.96961 27.5744 7.08562 27.6692 7.21192 27.772C7.34812 27.8619 7.49535 27.9592 7.65285 28.0631C7.96602 28.272 8.31443 28.5114 8.72783 28.7184C8.93012 28.8278 9.14049 28.9417 9.35857 29.0595C9.5862 29.1575 9.82117 29.2589 10.0627 29.3628C10.1832 29.4149 10.3054 29.4678 10.4288 29.5214C10.5543 29.5702 10.6865 29.6058 10.8168 29.6499C11.0782 29.7358 11.3455 29.8239 11.6168 29.9135C12.1764 30.0324 12.7451 30.1951 13.3428 30.2545C13.9338 30.3625 14.544 30.3603 15.1513 30.3919C15.7582 30.361 16.3687 30.3629 16.9598 30.2549C17.5579 30.1965 18.1266 30.0332 18.6861 29.9138C18.9578 29.8246 19.2247 29.7369 19.4861 29.651C19.6168 29.6073 19.7489 29.5709 19.8745 29.5221C19.9979 29.4685 20.1201 29.4156 20.2405 29.3635C20.4825 29.2596 20.7175 29.1579 20.9451 29.0602C21.1632 28.9424 21.3735 28.8282 21.5758 28.7188C21.99 28.5114 22.3362 28.2738 22.6482 28.0657C22.8054 27.9621 22.9526 27.8648 23.0884 27.7749C23.2158 27.6714 23.3326 27.5763 23.4383 27.4904C23.8616 27.1467 24.1083 26.9565 24.1083 26.9565Z"
                          fill="white"
                        />
                        <path
                          d="M15.1506 30.6665C22.146 30.6665 27.8169 24.9956 27.8169 18.0002C27.8169 11.0049 22.146 5.33398 15.1506 5.33398C8.15525 5.33398 2.48438 11.0049 2.48438 18.0002C2.48438 24.9956 8.15525 30.6665 15.1506 30.6665Z"
                          fill="#893B0C"
                        />
                        <path
                          d="M15.1565 30.3907C21.9998 30.3907 27.5474 24.8431 27.5474 17.9998C27.5474 11.1565 21.9998 5.60889 15.1565 5.60889C8.31322 5.60889 2.76562 11.1565 2.76562 17.9998C2.76562 24.8431 8.31322 30.3907 15.1565 30.3907Z"
                          fill="url(#paint2_linear_1_32951)"
                        />
                        <path
                          d="M15.1562 35.4999V35.1023L29.9673 26.5513L30.3121 26.7499L15.1562 35.4999Z"
                          fill="#692E0A"
                        />
                        <path
                          d="M0 26.7499L0.344377 26.5513L15.1551 35.1023L15.1555 35.4999L0 26.7499Z"
                          fill="url(#paint3_linear_1_32951)"
                        />
                        <path
                          opacity="0.4"
                          d="M30.3113 17.0169V26.7504L28.9687 27.5255L6.77994 5.33675L14.293 0.999023L30.3113 17.0169ZM16.1012 34.9541L21.5146 31.8283L0 10.3137V18.8529L16.1012 34.9541Z"
                          fill="url(#paint4_linear_1_32951)"
                        />
                        <path
                          d="M17.7695 14.5767H17.7676C17.7316 15.7913 16.045 17.0573 15.2744 17.9663C16.0429 18.8833 17.7355 20.1296 17.7715 21.3462H17.7734V24.2583H12.0273V21.3462H12.0293C12.0652 20.1313 13.752 18.8647 14.5225 17.9556C13.7538 17.0386 12.0614 15.793 12.0254 14.5767H12.0234V11.6646H17.7695V14.5767Z"
                          fill="url(#paint5_linear_1_32951)"
                        />
                        <path
                          d="M17.7695 14.5767H17.7676C17.7325 15.7596 16.1304 16.9899 15.335 17.8931C16.1287 18.8239 17.7361 20.0641 17.7715 21.2769H17.7734V24.2583H12.0273V21.2769H12.0293C12.0646 20.066 13.6656 18.8058 14.4609 17.8813C13.6668 16.972 12.0605 15.7609 12.0254 14.5767H12.0234V11.6646H17.7695V14.5767Z"
                          fill="url(#paint6_linear_1_32951)"
                        />
                        <path
                          d="M18.6523 14.5156H18.6504C18.6147 15.7111 16.9889 16.9557 16.2002 17.8633C16.9873 18.7876 18.6189 20.0261 18.6543 21.2363H18.6562V24.1885H12.9102V21.2363H12.9121C12.9474 20.0279 14.5725 18.769 15.3613 17.8516C14.574 16.9374 12.944 15.7124 12.9082 14.5156H12.9062V11.5947H18.6523V14.5156Z"
                          fill="url(#paint7_linear_1_32951)"
                        />
                        <path
                          d="M18.1367 14.3789H18.1348C18.098 15.6221 16.332 16.919 15.5889 17.832C16.3292 18.7545 18.1013 20.0303 18.1387 21.2754L18.1406 21.2764V24.1885L12.3945 24.1875V21.2754H12.3965C12.4337 20.0322 14.1995 18.7352 14.9424 17.8223C14.2018 16.8997 12.4294 15.624 12.3926 14.3789H12.3906V11.4668H18.1367V14.3789Z"
                          fill="url(#paint8_linear_1_32951)"
                        />
                        <path
                          d="M11.4801 24.2397L10.8594 24.9687L19.5234 24.9771L18.9009 24.2475L11.4801 24.2397Z"
                          fill="url(#paint9_linear_1_32951)"
                        />
                        <path
                          d="M18.9027 11.6934L19.5234 10.9644L10.8594 10.956L11.4819 11.6856L18.9027 11.6934Z"
                          fill="url(#paint10_linear_1_32951)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_32951"
                            x1="-18.3502"
                            y1="-15.4426"
                            x2="30.571"
                            y2="33.3868"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_32951"
                            x1="-5.69538"
                            y1="-3.02486"
                            x2="37.0911"
                            y2="40.1203"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_32951"
                            x1="-3.43353"
                            y1="-10.7415"
                            x2="23.8626"
                            y2="31.4597"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_32951"
                            x1="12.6509"
                            y1="34.7128"
                            x2="-0.0155396"
                            y2="25.2588"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_1_32951"
                            x1="0"
                            y1="17.9763"
                            x2="30.3111"
                            y2="17.9763"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="#FAF7F5"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_1_32951"
                            x1="9.32078"
                            y1="8.19699"
                            x2="19.6601"
                            y2="9.9759"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_1_32951"
                            x1="9.32078"
                            y1="8.19699"
                            x2="19.6601"
                            y2="9.9759"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_1_32951"
                            x1="10.2036"
                            y1="8.12716"
                            x2="20.5429"
                            y2="9.90608"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_1_32951"
                            x1="10.6643"
                            y1="6.6037"
                            x2="25.1127"
                            y2="9.64697"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear_1_32951"
                            x1="-0.049859"
                            y1="6.38483"
                            x2="13.7487"
                            y2="23.2133"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                          <linearGradient
                            id="paint10_linear_1_32951"
                            x1="30.4327"
                            y1="29.5483"
                            x2="16.6341"
                            y2="12.7198"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#AF6517" />
                            <stop offset="0.257" stopColor="#E0A03B" />
                            <stop offset="0.48" stopColor="#E9FF88" />
                            <stop offset="0.6391" stopColor="#E0A03B" />
                            <stop offset="1" stopColor="#88390B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs">Prize pool</p>
                      <div className="text-2xl font-bold">$5000</div>
                    </div>
                  </div>
                  <button className="bg-[#048AE0] px-8 py-2 rounded-3xl font-bold h-[50px]">
                    Play now
                  </button>
                </div>
              ))}
            </div>
            <div className="uppercase text-2xl font-bold">
              Special Lotteries
            </div>
            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <SpecialLotteryCard
                  key={index}
                  title="Happy Easter Draw"
                  description="Hop into Easter magic — win big!"
                  ticketsLeft={10000}
                  prizeAmount="$55 000"
                  drawDate="08/03/2025"
                  backgroundImage="/rabbit.png"
                  onBuyTickets={() => console.log("Buy tickets clicked")}
                  onSeeResults={() => console.log("See results clicked")}
                />
              ))}
            </div>
            <div className="bg-linear-to-r to-[#BE3319] from-[#2D0205] py-10 px-20 rounded-[50px] flex">
              <div className="flex-1"></div>
              <div className="text-right space-y-5">
                <div className="uppercase text-[40px] font-bold max-w-[200px] text-right">
                  Scratch cards
                </div>
                <button className="bg-linear-to-r from-[#FFF83A] via-[#FFC562] to-[#FDA816] h-[50px] py-2 px-8 rounded-3xl font-bold text-black">
                  Play now
                </button>
              </div>
            </div>
            <div className="bg-linear-to-b from-[#6B46EC] to-[#F1CA60] h-[595px] rounded-[50px]">
              <div className="flex flex-col items-center p-10">
                <div className="uppercase font-bold text-[40px]">
                  Lucky spins
                </div>
                <div className="flex gap-4">
                  <button className="bg-[#501F9E] px-8 py-2 font-bold rounded-3xl h-[50px]">
                    Play now
                  </button>
                  <button className="bg-white text-black px-8 py-2 font-bold rounded-3xl h-[50px]">
                    How to play
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-linear-to-r from-[#1F1957] to-[#1F1957] p-10 rounded-[40px] min-w-[761px]">
                <div className="space-y-8">
                  <div className="uppercase text-2xl font-bold text-[#FFC562]">
                    Total win all time
                  </div>
                  <div className="font-bold text-[40px] text-[#FFC562]">
                    $100 000 000
                  </div>
                  <button className="px-8 py-2 font-bold bg-[#048AE0] rounded-3xl h-[50px]">
                    Play now
                  </button>
                </div>
              </div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="bg-[#1F1957] space-y-4 px-6 py-3 text-center rounded-[40px]"
                  key={index}
                >
                  <div>
                    <div className="font-bold text-[33px]">$25 456</div>
                    <div className="text-xs font-bold text-white/60">
                      Total funds in the next draws
                    </div>
                  </div>
                  <button className="px-8 py-2 font-bold bg-[#048AE0] rounded-3xl h-[50px]">
                    Play now
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-bold text-white/60">
                Latest payoffs today:
              </div>
              {Array.from({ length: 11 }).map((_, index) => (
                <div
                  className="bg-linear-to-r from-[#170E4E] to-[#231869] flex items-center gap-2 px-4 py-2 rounded-full"
                  key={index}
                >
                  <div className="w-[16px] h-[17px] bg-green-700 rounded-full"></div>
                  <div className="text-sm">$10 635</div>
                </div>
              ))}
            </div>
            <div className="bg-[#1F1957] px-[42px] pt-9 pb-6 rounded-[40px] space-y-8">
              <div className="font-bold text-2xl uppercase">Recent winners</div>
              <div className="flex gap-4">
                <div className="py-2 px-3 bg-[#322497] rounded-2xl font-bold">
                  All lotteries
                </div>
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="py-2 px-3 bg-[#3423A759] rounded-2xl font-bold text-white/40"
                  >
                    5-minute draws
                  </div>
                ))}
              </div>
              <Table />
              <div className="flex justify-between items-center pr-4">
                <button className="px-8 py-2 h-[50px] bg-linear-to-r from-[#443AFF] to-[#C362FF] rounded-3xl font-bold">
                  Try your luck
                </button>
                <div className="text-white/60 font-bold text-sm">
                  Show more results
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
