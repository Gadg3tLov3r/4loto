import { ChevronLeft, ChevronRight } from "lucide-react";

export const MostPopularSection = () => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="text-2xl font-bold uppercase">Most popular</div>
          <div className="flex">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 p-10 rounded-[40px] space-y-8 relative">
        <div>
          <h2 className="text-black text-2xl md:text-3xl font-bold uppercase max-w-[10rem]">
            5-minute draws
          </h2>
          <p className="hidden md:block text-[#B38626] text-2xl font-bold uppercase">
            Get your tickets before the time runs out
          </p>
        </div>
        <button className="bg-linear-to-b from-[#B38626] to-[#FCEE96] text-black px-8 py-2 rounded-3xl font-bold h-[50px]">
          Play now
        </button>
        <div className="bg-linear-to-b from-[#C70042] to-[#FF0055] w-[74px] h-[81px] md:w-[120px] md:h-[110px] flex items-center justify-center absolute right-10 top-0">
          <div className="text-[10px] md:text-base uppercase font-bold max-w-[50px] md:max-w-[100px] text-center">
            Most played
          </div>
        </div>
      </div>
    </>
  );
};
