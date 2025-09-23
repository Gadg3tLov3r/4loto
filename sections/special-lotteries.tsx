import { SpecialLotteryCard } from "@/components/special-lottery-card";

const data = [
  {
    title: "Happy Easter Draw",
    description: "Hop into Easter magic — win big!",
    ticketsLeft: 10000,
    prizeAmount: "55000",
    drawDate: "2025-03-08",
    backgroundImage: "/rabbit.png",
    buttonGradient: "bg-gradient-to-b from-[#DFCDD9] to-[#130E38]",
  },
  {
    title: "Happy Easter Draw",
    description: "Hop into Easter magic — win big!",
    ticketsLeft: 10000,
    prizeAmount: "55000",
    drawDate: "2025-03-08",
    backgroundImage: "/buddha.png",
    buttonGradient: "bg-gradient-to-b from-[#F1991E] to-[#130E38]",
  },
  {
    title: "Happy Easter Draw",
    description: "Hop into Easter magic — win big!",
    ticketsLeft: 10000,
    prizeAmount: "55000",
    drawDate: "2025-03-08",
    backgroundImage: "/flower.png",
    buttonGradient: "bg-gradient-to-b from-[#F800B7] to-[#130E38]",
  },
  {
    title: "Happy Easter Draw",
    description: "Hop into Easter magic — win big!",
    ticketsLeft: 10000,
    prizeAmount: "55000",
    drawDate: "2025-03-08",
    backgroundImage: "witch.png",
    buttonGradient: "bg-gradient-to-b from-[#2FFF6C] to-[#130E38]",
  },
];

export const SpecialLotteriesSection = () => {
  return (
    <>
      <div className="uppercase text-2xl font-bold">Special Lotteries</div>
      <div className="grid grid-cols-4 gap-6">
        {data.map((item, index) => (
          <SpecialLotteryCard
            key={index}
            title={item.title}
            description={item.description}
            ticketsLeft={item.ticketsLeft}
            prizeAmount={item.prizeAmount}
            drawDate={item.drawDate}
            backgroundImage={item.backgroundImage}
            buttonGradient={item.buttonGradient}
          />
        ))}
      </div>
    </>
  );
};
