interface SpecialLotteryCardProps {
  title: string;
  description: string;
  ticketsLeft: number;
  prizeAmount: string;
  drawDate: string;
  backgroundImage?: string;
  buttonGradient?: string;
}

export function SpecialLotteryCard({
  title,
  description,
  ticketsLeft,
  prizeAmount,
  drawDate,
  backgroundImage,
  buttonGradient,
}: SpecialLotteryCardProps) {
  return (
    <div className="p-4 pt-0 border border-[#231968] rounded-[40px] h-[464px] flex flex-col">
      <div className="px-15">
        <div className="bg-white/8 backdrop-blur-3xl py-[9px] px-[24px] rounded-b-[30px] flex justify-center items-center">
          <button className="border border-[#44398D] py-[5px] px-[11.17px] rounded-[14.89px] text-[14.89px] hover:bg-white/10 transition-colors">
            See Results
          </button>
        </div>
      </div>
      <div
        className="flex flex-col flex-1 rounded-3xl bg-center bg-cover"
        style={{
          backgroundImage: backgroundImage
            ? `url('${backgroundImage}')`
            : undefined,
        }}
      >
        <div className="flex-1"></div>

        <div className="grid grid-cols-3">
          <div className="text-center bg-[#130E38] p-2 rounded-t-3xl">
            <div className="text-xs text-white/40">Tickets Left</div>
            <div className="text-sm text-white/80">
              {ticketsLeft.toLocaleString()}
            </div>
          </div>
          <div className="bg-white/1 backdrop-blur-lg rounded-3xl flex justify-center items-center font-bold">
            ${prizeAmount}
          </div>
          <div className="text-center bg-[#130E38] p-2 rounded-t-3xl">
            <div className="text-xs text-white/40">Draw Starts</div>
            <div className="text-white/80 text-sm">{drawDate}</div>
          </div>
        </div>
        <div className="bg-[#130E38] flex flex-col gap-2 p-4 rounded-b-3xl">
          <div className="text-center">
            <h2 className="text-lg text-white/80">{title}</h2>
            <p className="text-sm text-white/40">{description}</p>
          </div>
          <button
            className={`h-[50px] ${buttonGradient} px-8 py-2 font-bold rounded-3xl self-center`}
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
