export default function TopicTreeSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full animate-pulse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="h-8 bg-gray-300 rounded-md w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded-full w-32"></div>
      </div>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 px-4 py-2 rounded-xl border border-gray-300 space-y-4"
          >
            <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
            <div className="h-8 bg-gray-300 rounded-md w-24"></div>
            <div className="bg-gray-100 rounded-md px-4 py-2 space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
