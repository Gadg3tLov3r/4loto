export const StatisticsSection = () => {
  return (
    <div className="flex gap-6">
      <div className="bg-linear-to-r from-[#1F1957] to-[#1F1957] px-3 py-6 md:p-10 rounded-3xl md:rounded-[40px] min-w-[280px] md:min-w-[761px]">
        <div className="space-y-8">
          <div className="uppercase text-2xl font-bold text-[#FFC562] max-w-[190px] md:max-w-none">
            Total win all time
          </div>
          <div className="font-bold text-[32px] md:text-[40px] text-[#FFC562]">
            $100 000 000
          </div>
          <button className="px-6 md:px-8 py-3 font-bold bg-[#048AE0] rounded-3xl md:h-[50px]">
            Play now
          </button>
        </div>
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className="bg-[#1F1957] space-y-4 px-6 py-3 text-center rounded-3xl md:rounded-[40px] flex-shrink-0"
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
  );
};
