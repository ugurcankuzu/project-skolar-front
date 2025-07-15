interface ISummaryCard {
  title: string;
  value: number;
}
export default function SummaryCard({ title, value }: ISummaryCard) {
  return (
    <div className="size-full bg-primary/20 rounded-xl shadow px-8 py-4 flex flex-col justify-between hover:bg-primary/30 transition-colors duration-300">
      <p className="text-lg text-primary font-semibold">{title}</p>
      <p className="text-accent font-bold text-3xl">{value.toString()}</p>
    </div>
  );
}
