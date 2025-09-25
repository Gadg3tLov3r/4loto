export default function Table() {
  return (
    <table className="w-full border-separate border-spacing-y-2">
      <thead>
        <tr className="text-left">
          <th className="p-4">Date</th>
          <th className="hidden md:table-cell">Username</th>
          <th className="hidden md:table-cell">Lottery won</th>
          <th className="hidden md:table-cell">Frequent player</th>
          <th>Prize amount</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 8 }).map((_, index) => (
          <tr className="h-[75px]" key={index}>
            <td className="p-4 bg-[#27206C] rounded-l-lg md:rounded-l-lg">
              Today, 16:03:27
            </td>
            <td className="hidden md:table-cell bg-[#27206C]">
              Kristin Watson
            </td>
            <td className="hidden md:table-cell bg-[#27206C]">
              5 minutes draw
            </td>
            <td className="hidden md:table-cell bg-[#27206C]">Top 10</td>
            <td className="text-[20px] font-bold bg-[#27206C] rounded-r-lg md:rounded-r-lg">
              $1 324 343
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
