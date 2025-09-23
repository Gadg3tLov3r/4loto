import Table from "@/components/table";

export const RecentWinnersSection = () => {
  return (
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
        <div className="text-white/60 font-bold text-sm">Show more results</div>
      </div>
    </div>
  );
};
