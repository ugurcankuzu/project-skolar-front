export default function ClassroomHeroSkeleton() {
  return (
    <div className="w-full space-y-8 animate-pulse">
      <div className="size-full h-64 relative bg-gray-300 rounded-lg"></div>
      <div className="flex flex-col gap-4">
        <div className="h-8 bg-gray-300 rounded-md w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded-md w-full"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="bg-gray-200 px-4 py-1 rounded-xl h-16"></div>
          <div className="bg-gray-200 px-4 py-1 rounded-xl h-16"></div>
        </div>
      </div>
    </div>
  );
}
