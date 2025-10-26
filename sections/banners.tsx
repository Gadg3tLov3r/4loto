import Image from "next/image";

export const BannersSection = () => {
  return (
    <div className="bg-linear-to-r to-[#BE3319] from-[#2D0205] py-8 px-20 rounded-[50px] flex relative overflow-clip">
      <Image
        src="/scratch.png"
        alt="scratch card"
        width={1736}
        height={298}
        className="absolute top-0 right-0"
      />
      <div className="flex-1"></div>
      <div className="text-right space-y-5">
        <div className="uppercase text-[40px] font-bold max-w-[200px] text-right leading-[130%]">
          Scratch cards
        </div>
        <button className="bg-linear-to-r from-[#FFF83A] via-[#FFC562] to-[#FDA816] h-[50px] py-2 px-8 rounded-3xl font-bold text-black">
          Play now
        </button>
      </div>
    </div>
  );
};
