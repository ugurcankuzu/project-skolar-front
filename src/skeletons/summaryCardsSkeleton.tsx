export default function SummaryCardsSkeleton() {
  return (
    <div className="w-full h-96 sm:h-48 border flex-col gap-4 animate-pulse">
      <div className="size-full bg-gray-200 rounded-lg"></div>
      <div className="size-full bg-gray-200 rounded-lg"></div>
      <div className="size-full bg-gray-200 rounded-lg"></div>
    </div>
  );
}
