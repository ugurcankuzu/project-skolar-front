export default function ClassroomItemSkeleton() {
  const items = new Array(5).fill(0);
  return (
    <>
      {items.map((_, index) => (
        <li
          key={index}
          className="
      h-full flex-shrink-0 snap-start w-11/12 md:w-1/3 lg:w-1/4 flex flex-col group
    "
        >
          <div className="flex flex-col bg-surface shadow rounded-xl size-full animate-pulse">
            <div className="flex items-center gap-2 bg-gray-300 rounded-t-xl px-4 py-2 text-white h-10"></div>
            <div className="bg-gray-200 px-4 py-2 rounded-b-xl flex-1 flex flex-col justify-center">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
