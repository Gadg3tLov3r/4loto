"use client";

import { useLayout } from "@/contexts/layout-context";
import { useState } from "react";

const Menu = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75H19.35"
        stroke="url(#paint0_linear_188_41196)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M0.75 8.5H11.6"
        stroke="url(#paint1_linear_188_41196)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M0.75 16.25H19.35"
        stroke="url(#paint2_linear_188_41196)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.9551 6.35501C14.9551 5.75842 15.6009 5.38555 16.1176 5.68384L19.6051 7.69735C20.1217 7.99565 20.1217 8.74139 19.6051 9.03969L16.1176 11.0532C15.6009 11.3515 14.9551 10.9786 14.9551 10.382L14.9551 6.35501Z"
        fill="#231968"
      />
      <path
        d="M14.9551 6.35501C14.9551 5.75842 15.6009 5.38555 16.1176 5.68384L19.6051 7.69735C20.1217 7.99565 20.1217 8.74139 19.6051 9.03969L16.1176 11.0532C15.6009 11.3515 14.9551 10.9786 14.9551 10.382L14.9551 6.35501Z"
        fill="url(#paint3_linear_188_41196)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_188_41196"
          x1="0.75"
          y1="1.25"
          x2="19.35"
          y2="1.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_188_41196"
          x1="0.75"
          y1="9"
          x2="11.6"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_188_41196"
          x1="0.75"
          y1="16.75"
          x2="19.35"
          y2="16.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_188_41196"
          x1="8.54981"
          y1="8.37515"
          x2="78.0498"
          y2="8.37515"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Trophy = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.17354 20.1804L7.84336 20.5179L7.17354 20.1804ZM15.3265 20.1804L15.9963 19.843V19.843L15.3265 20.1804ZM3.9 4.65024C4.31421 4.65024 4.65 4.31446 4.65 3.90024C4.65 3.48603 4.31421 3.15024 3.9 3.15024V4.65024ZM2.57246 10.7219C2.86055 11.0195 3.33536 11.0272 3.63298 10.7391C3.9306 10.451 3.93832 9.97623 3.65023 9.67861L2.57246 10.7219ZM0.921699 5.98533L0.188514 6.14326L0.921699 5.98533ZM0.960176 4.2893L0.380934 3.81288L0.380934 3.81288L0.960176 4.2893ZM18.6 3.15024C18.1858 3.15024 17.85 3.48603 17.85 3.90024C17.85 4.31446 18.1858 4.65024 18.6 4.65024V3.15024ZM18.8498 9.67861C18.5617 9.97623 18.5694 10.451 18.867 10.7391C19.1646 11.0272 19.6394 11.0195 19.9275 10.7219L18.8498 9.67861ZM21.5783 5.98533L22.3115 6.14326L21.5783 5.98533ZM21.5398 4.2893L20.9606 4.76572V4.76572L21.5398 4.2893ZM3.9 3.94037H3.15H3.9ZM3.90674 3.6244L3.15743 3.59236L3.90674 3.6244ZM18.5933 3.6244L17.8439 3.65644V3.65644L18.5933 3.6244ZM17.8149 1.40043L18.321 0.846934V0.846933L17.8149 1.40043ZM4.6851 1.40043L5.19121 1.95392V1.95392L4.6851 1.40043ZM11.25 11.2502H10.5V17.5502H11.25H12V11.2502H11.25ZM7.17354 20.1804L7.84336 20.5179C8.52203 19.1706 9.81078 18.3002 11.25 18.3002V17.5502V16.8002C9.17457 16.8002 7.40435 18.0552 6.50373 19.843L7.17354 20.1804ZM11.25 17.5502V18.3002C12.6892 18.3002 13.978 19.1706 14.6566 20.5179L15.3265 20.1804L15.9963 19.843C15.0956 18.0552 13.3254 16.8002 11.25 16.8002V17.5502ZM8.05671 21.7502V22.5002H14.4433V21.7502V21.0002H8.05671V21.7502ZM15.3265 20.1804L14.6566 20.5179C14.7953 20.7931 14.5758 21.0002 14.4433 21.0002V21.7502V22.5002C15.749 22.5002 16.612 21.0652 15.9963 19.843L15.3265 20.1804ZM7.17354 20.1804L6.50373 19.843C5.88805 21.0652 6.75099 22.5002 8.05671 22.5002V21.7502V21.0002C7.92417 21.0002 7.70472 20.7931 7.84336 20.5179L7.17354 20.1804ZM2.83394 3.90024V4.65024H3.9V3.90024V3.15024H2.83394V3.90024ZM3.11134 10.2002L3.65023 9.67861C2.70055 8.69752 1.98587 7.36404 1.65488 5.82741L0.921699 5.98533L0.188514 6.14326C0.574503 7.93526 1.41496 9.52611 2.57246 10.7219L3.11134 10.2002ZM2.83394 3.90024V3.15024C2.34154 3.15024 1.88119 3.14793 1.5082 3.20861C1.09685 3.27552 0.693846 3.43243 0.380934 3.81288L0.960176 4.2893L1.53942 4.76572C1.5465 4.75711 1.56246 4.7195 1.74903 4.68915C1.97396 4.65256 2.2905 4.65024 2.83394 4.65024V3.90024ZM0.921699 5.98533L1.65488 5.82741C1.55504 5.36387 1.50498 5.11706 1.50031 4.937C1.49705 4.81146 1.51691 4.79309 1.53942 4.76572L0.960176 4.2893L0.380934 3.81288C0.0834504 4.17456 -0.00976771 4.56856 0.000812471 4.97594C0.00997657 5.3288 0.100679 5.73548 0.188514 6.14326L0.921699 5.98533ZM19.6661 3.90024V3.15024H18.6V3.90024V4.65024H19.6661V3.90024ZM19.3887 10.2002L19.9275 10.7219C21.085 9.52611 21.9255 7.93526 22.3115 6.14326L21.5783 5.98533L20.8451 5.82741C20.5141 7.36404 19.7995 8.69752 18.8498 9.67861L19.3887 10.2002ZM19.6661 3.90024V4.65024C20.2095 4.65024 20.526 4.65256 20.751 4.68915C20.9375 4.7195 20.9535 4.75711 20.9606 4.76572L21.5398 4.2893L22.1191 3.81288C21.8062 3.43243 21.4031 3.27552 20.9918 3.20861C20.6188 3.14793 20.1585 3.15024 19.6661 3.15024V3.90024ZM21.5783 5.98533L22.3115 6.14326C22.3993 5.73547 22.49 5.3288 22.4992 4.97594C22.5098 4.56855 22.4165 4.17456 22.1191 3.81288L21.5398 4.2893L20.9606 4.76572C20.9831 4.79309 21.003 4.81146 20.9997 4.937C20.995 5.11706 20.945 5.36387 20.8451 5.82741L21.5783 5.98533ZM18.6 3.94037H17.85C17.85 7.55942 14.899 10.5002 11.25 10.5002V11.2502V12.0002C15.7196 12.0002 19.35 8.39558 19.35 3.94037H18.6ZM11.25 11.2502V10.5002C7.60104 10.5002 4.65 7.55942 4.65 3.94037H3.9H3.15C3.15 8.39558 6.78037 12.0002 11.25 12.0002V11.2502ZM3.9 3.94037H4.65C4.65 3.84519 4.65203 3.75054 4.65606 3.65644L3.90674 3.6244L3.15743 3.59236C3.15249 3.7078 3.15 3.82382 3.15 3.94037H3.9ZM18.5933 3.6244L17.8439 3.65644C17.848 3.75054 17.85 3.84519 17.85 3.94037H18.6H19.35C19.35 3.82381 19.3475 3.70779 19.3426 3.59236L18.5933 3.6244ZM7.75976 0.750244V1.50024H14.7402V0.750244V0.000244141H7.75976V0.750244ZM18.5933 3.6244L19.3426 3.59236C19.3214 3.09678 19.3048 2.60209 19.174 2.153C19.029 1.65551 18.7597 1.24811 18.321 0.846934L17.8149 1.40043L17.3088 1.95392C17.5811 2.20293 17.6786 2.38292 17.7338 2.57258C17.8032 2.81062 17.8203 3.10282 17.8439 3.65644L18.5933 3.6244ZM14.7402 0.750244V1.50024C16.4026 1.50024 16.8539 1.538 17.3088 1.95392L17.8149 1.40043L18.321 0.846933C17.3537 -0.0375105 16.2293 0.000244141 14.7402 0.000244141V0.750244ZM3.90674 3.6244L4.65606 3.65644C4.67973 3.10282 4.69681 2.81062 4.76616 2.57257C4.82142 2.38292 4.91889 2.20293 5.19121 1.95392L4.6851 1.40043L4.17899 0.846933C3.74025 1.24811 3.47098 1.65551 3.32604 2.153C3.19519 2.60209 3.17862 3.09678 3.15743 3.59236L3.90674 3.6244ZM7.75976 0.750244V0.000244141C6.27065 0.000244141 5.14625 -0.0375106 4.17899 0.846933L4.6851 1.40043L5.19121 1.95392C5.64607 1.538 6.0974 1.50024 7.75976 1.50024V0.750244Z"
        fill="url(#paint0_linear_188_41205)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_188_41205"
          x1="0.75"
          y1="11.2502"
          x2="21.75"
          y2="11.2502"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Ticket = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="32"
      height="27"
      viewBox="0 0 32 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 7.71759C2.09315 7.71759 0.75 9.06317 0.75 10.723V13.7285C2.40685 13.7285 3.75 15.0741 3.75 16.7339C3.75 18.3938 2.40685 19.7394 0.75 19.7394V22.7448C0.75 24.4047 2.09315 25.7502 3.75 25.7502H27.75C29.4069 25.7502 30.75 24.4047 30.75 22.7448V19.7394C29.0931 19.7394 27.75 18.3938 27.75 16.7339C27.75 15.0741 29.0931 13.7285 30.75 13.7285V10.723C30.75 9.06317 29.4069 7.71759 27.75 7.71759H27.1141M3.75 7.71759L24.7494 0.877195C26.2095 0.420277 27.7629 1.23565 28.219 2.69838L29.0448 5.34689C27.9529 5.6886 27.2223 6.64513 27.1141 7.71759M3.75 7.71759H27.1141M9.75 9.76657V11.6986M9.75 13.6307V15.5628M9.75 17.4949L9.75 19.4269M9.75 21.359V23.2911"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const User = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 20.4375V18.1875C18.75 16.994 18.2759 15.8494 17.432 15.0055C16.5881 14.1616 15.4435 13.6875 14.25 13.6875H5.25C4.05653 13.6875 2.91193 14.1616 2.06802 15.0055C1.22411 15.8494 0.75 16.994 0.75 18.1875V20.4375"
        stroke="url(#paint0_linear_0_1)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 9.75C12.2353 9.75 14.25 7.73528 14.25 5.25C14.25 2.76472 12.2353 0.75 9.75 0.75C7.26472 0.75 5.25 2.76472 5.25 5.25C5.25 7.73528 7.26472 9.75 9.75 9.75Z"
        stroke="url(#paint1_linear_0_1)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="0.75"
          y1="17.0625"
          x2="18.75"
          y2="17.0625"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="5.25"
          y1="5.25"
          x2="14.25"
          y2="5.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Wallet = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 9.18598C0.75 7.53153 1.78652 6.05439 3.34232 5.49165L16.0554 0.893303C17.592 0.337498 19.2143 1.47584 19.2143 3.1099V5.75073M4.67857 22.7507H18.8214C20.9911 22.7507 22.75 21.0961 22.75 19.0551V9.44638C22.75 7.40533 20.9911 5.75073 18.8214 5.75073H4.67857C2.50888 5.75073 0.75 7.40533 0.75 9.44638V19.0551C0.75 21.0961 2.50888 22.7507 4.67857 22.7507Z"
        stroke="url(#paint0_linear_188_41217)"
        strokeWidth="1.5"
      />
      <circle
        cx="18.25"
        cy="14.2507"
        r="1.5"
        fill="url(#paint1_linear_188_41217)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_188_41217"
          x1="0.75"
          y1="11.7507"
          x2="22.75"
          y2="11.7507"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_188_41217"
          x1="16.75"
          y1="14.2507"
          x2="19.75"
          y2="14.2507"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#443AFF" />
          <stop offset="1" stopColor="#C362FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function BottomNav() {
  const { toggleMobileSidebar } = useLayout();
  const [activeTab, setActiveTab] = useState("menu");

  const navItems = [
    { id: "menu", label: "Menu", icon: Menu, action: toggleMobileSidebar },
    { id: "results", label: "Results", icon: Trophy },
    { id: "betslips", label: "Betslips", icon: Ticket },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "profile", label: "Profile", icon: User },
  ];

  const handleItemClick = (item: (typeof navItems)[0]) => {
    if (item.action) {
      item.action();
    } else {
      setActiveTab(item.id);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[70px] bg-[#0D063A] z-40 md:hidden">
      <div className="h-full flex items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`flex flex-col items-center  gap-1 rounded-full transition-colors
                ${isActive ? "text-white" : "text-white"}
                ${
                  item.label === "Betslips"
                    ? "bg-linear-to-r from-[#443AFF] to-[#C362FF] min-w-[70px] min-h-[70px] p-1"
                    : "min-w-[55px] min-h-[55px] justify-center"
                }
              `}
              aria-label={item.label}
            >
              <Icon
                className={`${
                  item.label === "Betslips" ? "w-[34px] h-[34px]" : "w-6 h-6"
                } `}
              />
              <span className="text-[10px] font-semibold text-[#FFFFFF]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
