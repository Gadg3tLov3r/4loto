import Image from "next/image";

interface SpecialLotteryCardProps {
  title: string;
  description: string;
  ticketsLeft: number;
  ticketsSold: number;
  prizeAmount: string;
  drawDate: string;
  backgroundImage?: string;
  buttonGradient?: string;
  ended: boolean;
}

export function SpecialLotteryCard({
  title,
  description,
  ticketsLeft,
  ticketsSold,
  prizeAmount,
  drawDate,
  backgroundImage,
  buttonGradient,
  ended,
}: SpecialLotteryCardProps) {
  return (
    <div className="p-4 pt-0 border border-[#231968] rounded-3xl md:rounded-[40px]  h-[464px] flex flex-col">
      <div className="flex justify-center">
        <div className="bg-white/8 backdrop-blur-3xl py-[9px] px-[24px] h-[52px] min-w-[200px] rounded-b-2xl md:rounded-b-[30px] flex justify-center items-center">
          {ended ? (
            <button className="border border-[#44398D] py-[5px] px-[11.17px] rounded-[14.89px] text-[14.89px] hover:bg-white/10 transition-colors">
              See Results
            </button>
          ) : (
            <div className="flex">
              <div className="border border-[#44398D] py-[5px] px-[11.17px] rounded-[14.89px] text-[14.89px]">
                5d
              </div>
              <div className="border border-[#44398D] py-[5px] px-[11.17px] rounded-[14.89px] text-[14.89px]">
                12h
              </div>
              <div className="border border-[#44398D] py-[5px] px-[11.17px] rounded-[14.89px] text-[14.89px]">
                55m
              </div>
              <div className="border border-[#44398D] py-[5px] px-[11.17px] rounded-[14.89px] text-[14.89px]">
                34s
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 rounded-b-[30px] relative flex">
        <div
          className="bg-cover bg-top mx-6 flex-1"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="grid grid-cols-3">
            <div className="text-center bg-[#130E38] p-2 rounded-t-3xl">
              <div className="text-[8px] text-white/40">
                Tickets {ended ? "Sold" : "Left"}
              </div>
              <div className="text-xs text-white/80">
                {ended
                  ? ticketsSold
                  : ticketsLeft === 0
                  ? "Sold out"
                  : ticketsLeft}
              </div>
            </div>
            <div className="bg-white/8 backdrop-blur-xl rounded-3xl flex justify-center items-center font-bold h-[54px] min-w-[118px]">
              ${prizeAmount}
            </div>
            <div className="text-center bg-[#130E38] p-2 rounded-t-3xl">
              <div className="text-[8px] text-white/40">
                Draw {ended ? "Ended" : "Starts"}
              </div>
              <div className="text-white/80 text-xs">
                {new Date(drawDate).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="bg-[#130E38] flex flex-col gap-2 p-4 rounded-b-2xl md:rounded-b-3xl">
            <div className="text-center">
              <h2 className="text-white/80">{title}</h2>
              <p className="text-xs text-white/40">{description}</p>
            </div>
            <button
              className={`h-[50px] ${buttonGradient} px-8 py-2 font-bold rounded-3xl self-center`}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
