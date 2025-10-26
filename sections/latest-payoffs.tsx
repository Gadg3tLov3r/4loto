export const LatestPayoffsSection = () => {
  return (
    <div className="flex gap-4 items-center overflow-hidden">
      <div className="font-bold text-white/60 flex-shrink-0">
        Latest payoffs today:
      </div>
      {Array.from({ length: 11 }).map((_, index) => (
        <div
          className="bg-linear-to-r from-[#170E4E] to-[#231869] flex items-center gap-2 px-4 py-2 rounded-full flex-shrink-0"
          key={index}
        >
          <div className="w-[16px] h-[17px] bg-green-700 rounded-full"></div>
          <div className="text-sm">$10 635</div>
        </div>
      ))}
    </div>
  );
};
