import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

export const HeaderSection = () => {
  return (
    <header className="bg-[#0D063A] py-2 pl-3 pr-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-15">
        <div className="hidden size-[64px] bg-[#231968] md:flex items-center justify-center rounded-3xl">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.69922 0.875H20.2992"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1.69922 8.625H12.5492"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1.69922 16.375H20.2992"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20.9434 10.5069C20.9434 11.1035 20.2975 11.4764 19.7809 11.1781L16.2934 9.16459C15.7767 8.86629 15.7767 8.12054 16.2934 7.82225L19.7809 5.80874C20.2975 5.51044 20.9434 5.88331 20.9434 6.47991L20.9434 10.5069Z"
              fill="#231968"
            />
            <path
              d="M20.9434 10.5069C20.9434 11.1035 20.2975 11.4764 19.7809 11.1781L16.2934 9.16459C15.7767 8.86629 15.7767 8.12054 16.2934 7.82225L19.7809 5.80874C20.2975 5.51044 20.9434 5.88331 20.9434 6.47991L20.9434 10.5069Z"
              fill="url(#paint0_linear_54_49565)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_54_49565"
                x1="27.3486"
                y1="8.48679"
                x2="-42.1514"
                y2="8.48679"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#443AFF" />
                <stop offset="1" stopColor="#C362FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center">
          <Image src="/4logo.png" alt="4loto" width="38" height="47" />
          <div className="hidden md:block uppercase font-bold">Loto</div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <ModeToggle />
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
  );
};
