import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="bg-[#0D063A] z-49 w-[278px] min-h-screen fixed top-[70px] left-0">
      <div className="px-3 py-8 space-y-8">
        {/* <div className="flex items-center justify-between px-3 py-3 bg-[#6F48F5] rounded-3xl">
          <div className="size-10 flex items-center justify-center">
            <Image src="/cta.png" alt="cta" width={30} height={28} />
          </div>
          <div>
            <div className="uppercase text-[10px] text-[#D9B8FF] font-bold">
              Choose your game
            </div>
            <div className="uppercase text-xs font-bold">And hit jackpot</div>
          </div>
          <div className="size-6 flex items-center justify-center">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00005 1C1.00005 1 6.99999 5.41893 7 7.00005C7.00001 8.58116 1 13 1 13"
                stroke="#D9B8FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div> */}
        <div>
          <div className="bg-[#231968] rounded-3xl">
            <ul className="space-y-3 p-3">
              <li className="flex items-center gap-3">
                <span className="size-10 flex items-center justify-center">
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.728 11.2728V22.9092H2.27344V11.2728M11 22.9088V6.18152M11 6.18152L5.85714 6.18161C5.09938 6.18161 4.37266 5.91343 3.83684 5.43606C3.30102 4.9587 3 4.31125 3 3.63615C3 2.96106 3.30102 2.31361 3.83684 1.83624C4.37266 1.35888 5.09938 1.0907 5.85714 1.0907C9.85714 1.0907 11 6.18152 11 6.18152ZM11 6.18152L16.1429 6.18161C16.9006 6.18161 17.6273 5.91343 18.1632 5.43606C18.699 4.9587 19 4.31125 19 3.63615C19 2.96106 18.699 2.31361 18.1632 1.83624C17.6273 1.35888 16.9006 1.0907 16.1429 1.0907C12.1429 1.0907 11 6.18152 11 6.18152ZM0.818359 6.18152H21.182V11.2724H0.818359V6.18152Z"
                      stroke="url(#paint0_linear_54_39725)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_54_39725"
                        x1="0.818359"
                        y1="11.9999"
                        x2="21.182"
                        y2="11.9999"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#443AFF" />
                        <stop offset="1" stopColor="#C362FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <a href="#">Bonuses</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="size-10 flex items-center justify-center">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19L21 5.95934M11 19L1 5.95934M11 19L14.2836 5.97872M11 19L7.70067 5.97872M21 5.95934L17.1514 1M21 5.95934L14.2836 5.97872M17.1514 1H4.83924M17.1514 1L14.2836 5.97872M17.1514 1H11M4.83924 1L1 5.95934M4.83924 1L7.70067 5.97872M1 5.95934L7.70067 5.97872M7.70067 5.97872H14.2836M7.70067 5.97872L11 1M14.2836 5.97872L11 1"
                      stroke="url(#paint0_linear_54_39974)"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_54_39974"
                        x1="1"
                        y1="10"
                        x2="21"
                        y2="10"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#443AFF" />
                        <stop offset="1" stopColor="#C362FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <a href="#">VIP Club</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="size-10 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7.71373"
                      cy="15.4286"
                      r="2.67857"
                      stroke="url(#paint0_linear_0_1)"
                      strokeWidth="1.5"
                    />
                    <mask
                      id="mask0_0_1"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="8"
                      width="16"
                      height="16"
                    >
                      <circle
                        cx="7.71429"
                        cy="16.2857"
                        r="7.71429"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_0_1)">
                      <circle
                        cx="7.71512"
                        cy="23.1429"
                        r="4.39286"
                        stroke="url(#paint1_linear_0_1)"
                        strokeWidth="1.5"
                      />
                    </g>
                    <path
                      d="M20.3418 0.00488281C22.3796 0.108411 24 1.7939 24 3.85742L23.9951 4.05566C23.8918 6.09341 22.2069 7.7135 20.1436 7.71387L19.9443 7.70898C19.1708 7.66968 18.4576 7.40183 17.8701 6.97266L13.3457 11.0166C14.0876 11.8091 14.6633 12.7577 15.0195 13.8086L18.001 13.2119C18.0402 11.5892 19.3678 10.2861 21 10.2861C22.6569 10.2861 24 11.6293 24 13.2861C23.9998 14.9428 22.6567 16.2861 21 16.2861C19.8443 16.2861 18.8429 15.6314 18.3418 14.6738L15.3594 15.2705C15.4031 15.6027 15.4287 15.9411 15.4287 16.2852L15.4189 16.6826C15.3838 17.3768 15.2537 18.0458 15.0469 18.6797L18.4844 19.3672C19.0194 18.5446 19.9456 18 21 18C22.6569 18 24 19.3431 24 21C24 22.6569 22.6569 24 21 24C19.3431 24 18 22.6569 18 21C18 20.9331 18.0025 20.8666 18.0068 20.8008L14.4268 20.085C13.1009 22.422 10.5925 24 7.71387 24L7.31738 23.9902C3.24135 23.7837 0 20.4125 0 16.2852C0.000220463 13.1699 1.84746 10.4872 4.50586 9.26953L3.34473 5.97949C3.23158 5.99244 3.11662 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.00538 5.50324 4.89217 4.74414 5.43652L5.9248 8.78223C6.49912 8.64577 7.09781 8.57132 7.71387 8.57129C9.3924 8.57129 10.9446 9.10922 12.2109 10.0195L16.8525 5.87012C16.5256 5.33699 16.3246 4.71854 16.291 4.05566L16.2861 3.85742C16.2861 1.72718 18.0133 0 20.1436 0L20.3418 0.00488281ZM7.71387 10.0713C4.28219 10.0715 1.5003 12.8535 1.5 16.2852C1.5 19.7171 4.282 22.4998 7.71387 22.5C11.1459 22.5 13.9287 19.7172 13.9287 16.2852C13.9284 12.8534 11.1457 10.0713 7.71387 10.0713ZM21 19.5C20.1716 19.5 19.5 20.1716 19.5 21C19.5 21.8284 20.1716 22.5 21 22.5C21.8284 22.5 22.5 21.8284 22.5 21C22.5 20.1716 21.8284 19.5 21 19.5ZM21 11.7861C20.1716 11.7861 19.5 12.4577 19.5 13.2861C19.5002 14.1144 20.1717 14.7861 21 14.7861C21.8283 14.7861 22.4998 14.1144 22.5 13.2861C22.5 12.4577 21.8284 11.7861 21 11.7861ZM20.1436 1.5C18.8417 1.5 17.7861 2.55561 17.7861 3.85742C17.7863 5.15911 18.8418 6.21387 20.1436 6.21387C21.445 6.21349 22.4998 5.15888 22.5 3.85742C22.5 2.55584 21.445 1.50038 20.1436 1.5ZM3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5Z"
                      fill="url(#paint2_linear_0_1)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_1"
                        x1="4.28516"
                        y1="15.4286"
                        x2="11.1423"
                        y2="15.4286"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#443AFF" />
                        <stop offset="1" stopColor="#C362FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_1"
                        x1="2.57227"
                        y1="23.1429"
                        x2="12.858"
                        y2="23.1429"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#443AFF" />
                        <stop offset="1" stopColor="#C362FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_1"
                        x1="0"
                        y1="12"
                        x2="24"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#443AFF" />
                        <stop offset="1" stopColor="#C362FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <a href="#">Affiliate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
