import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="bg-linear-to-b from-[#6F48F5] to-[#412A8F] rounded-3xl md:rounded-[50px] flex flex-col px-3 py-6 md:p-12 relative">
      <div className="hidden md:flex items-center self-center">
        <Image src="/4hero.png" alt="4loto" width={80} height={99} />
        <span className="text-[32px] font-extrabold">LOTO</span>
      </div>
      <div className="flex items-start justify-center mt-12">
        <div className="flex flex-col md:items-start items-center md:text-left text-center gap-6">
          <h1 className="uppercase text-2xl md:text-[64px] font-bold leading-[130%] max-w-[250px] md:max-w-3xl">
            Boost for your first deposit
          </h1>
          <Image
            className="md:hidden"
            src="/rocket.png"
            alt="rocket"
            width={204}
            height={204}
          />
          <p className="md:text-xl leading-[135%] max-w-[320px] md:max-w-sm">
            Top up your balance up to 10 000 BDT (or equivalent in other
            currency) and receive the same amount as a gift
          </p>
          <div className="flex gap-3">
            <button className="bg-linear-to-r from-[#443AFF] to-[#C362FF] py-2 px-8 rounded-3xl font-semibold h-[45px] md:h-[50px]">
              Play now
            </button>
            <button className="py-2 px-8 rounded-3xl font-semibold bg-white text-black h-[45px] md:h-[50px]">
              How to play
            </button>
          </div>
        </div>
        <Image
          className="hidden md:block -ml-[400px]"
          src="/rocket.png"
          alt="rocket"
          width={550}
          height={550}
        />
        <Image
          className="hidden md:block absolute top-0 left-0 w-[492px] h-[487px]"
          src="/coins1.svg"
          alt="coins"
          width={492}
          height={487}
        />
        <Image
          className="hidden md:block absolute top-0 right-0 w-[374px] h-[465px]"
          src="/coins2.svg"
          alt="coins"
          width={374}
          height={465}
        />
      </div>
    </div>
  );
};
