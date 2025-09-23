import Image from "next/image";

export const LuckySpinsSection = () => {
  return (
    <div className="bg-linear-to-b from-[#6B46EC] to-[#F1CA60] h-[595px] rounded-[50px] overflow-y-clip">
      <div className="flex flex-col items-center p-10 gap-4">
        <div className="uppercase font-bold text-[40px]">Lucky spins</div>
        <div className="flex gap-4">
          <button className="bg-[#501F9E] px-8 py-2 font-bold rounded-3xl h-[50px]">
            Play now
          </button>
          <button className="bg-white text-black px-8 py-2 font-bold rounded-3xl h-[50px]">
            How to play
          </button>
        </div>
        <Image src="/spin-wheel.svg" alt="wheel" width={950} height={950} />
      </div>
    </div>
  );
};
