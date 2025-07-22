interface ISummaryCard {
  title: string;
  value: number;
}
export default function SummaryCard({ title, value }: ISummaryCard) {
  return (
    <div className="size-full border border-gray-200 hover:shadow-md rounded-xl px-8 py-4 flex flex-col justify-between transition-shadow duration-300">
      <p className="text-lg text-primary font-semibold">{title}</p>
      <p className="text-accent font-bold text-3xl">{value.toString()}</p>
    </div>
  );
}
