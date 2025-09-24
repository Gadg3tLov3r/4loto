import { SpecialLotteryCard } from "@/components/special-lottery-card";

const data = [
  {
    title: "Happy Easter Draw",
    description: "Hop into Easter magic — win big!",
    ticketsLeft: 0,
    ticketsSold: 9473,
    prizeAmount: "55000",
    drawDate: "2025-04-12",
    backgroundImage: "/rabbit2.png",
    buttonGradient: "bg-gradient-to-b from-[#DFCDD9] to-[#130E38]",
    ended: true,
  },
  {
    title: "Buddha's Birthday",
    description: "Bloom with serenity — special prize awaits!",
    ticketsLeft: 734562,
    ticketsSold: 10000,
    prizeAmount: "55000",
    drawDate: "2025-05-05",
    backgroundImage: "/buddha2.png",
    buttonGradient: "bg-gradient-to-b from-[#F1991E] to-[#130E38]",
    ended: false,
  },
  {
    title: "International Women's Day",
    description: "Empower your luck — win on Women's Day!",
    ticketsLeft: 10000,
    ticketsSold: 10000,
    prizeAmount: "55000",
    drawDate: "2025-03-08",
    backgroundImage: "/flower2.png",
    buttonGradient: "bg-gradient-to-b from-[#F800B7] to-[#130E38]",
    ended: false,
  },
  {
    title: "International Fool’s Day",
    description: "You can win... Or not",
    ticketsLeft: 0,
    ticketsSold: 10000,
    prizeAmount: "3000000",
    drawDate: "2025-04-01",
    backgroundImage: "/witch2.png",
    buttonGradient: "bg-gradient-to-b from-[#2FFF6C] to-[#130E38]",
    ended: false,
  },
];

export const SpecialLotteriesSection = () => {
  return (
    <>
      <div className="uppercase text-2xl font-bold">Special Lotteries</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <SpecialLotteryCard
            key={index}
            title={item.title}
            description={item.description}
            ticketsLeft={item.ticketsLeft}
            ticketsSold={item.ticketsSold}
            prizeAmount={item.prizeAmount}
            drawDate={item.drawDate}
            backgroundImage={item.backgroundImage}
            buttonGradient={item.buttonGradient}
            ended={item.ended}
          />
        ))}
      </div>
    </>
  );
};
