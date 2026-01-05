//9 cards

export default function TopicTilesSkeleton() {
  return (
    <div>
      <div className="mt-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="group relative animate-pulse rounded-xl border border-gray-200 bg-surface p-4"
          >
            <div className="h-5 w-3/4 rounded-md bg-gray-300"></div>
            <div className="mt-2 h-3 w-1/2 rounded-md bg-gray-300"></div>
            <div className="mt-4 h-3 w-1/4 rounded-md bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
