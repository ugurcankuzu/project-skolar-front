export default function ParticipantTableSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full animate-pulse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="h-8 bg-gray-300 rounded-md w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded-full w-32"></div>
      </div>
      <div className="w-full max-w-full overflow-x-auto border border-gray-300 rounded-xl">
        <table className="w-full text-start">
          <thead>
            <tr className="bg-gray-200">
              <th className="whitespace-nowrap p-2 border-r border-gray-300 h-12"></th>
              <th className="whitespace-nowrap p-2 border-r border-gray-300 h-12"></th>
              <th className="whitespace-nowrap p-2 border-r border-gray-300 h-12"></th>
              <th className="whitespace-nowrap p-2 h-12"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="even:bg-gray-100 odd:bg-gray-50 h-12">
                <td className="p-2 border-r border-gray-200">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </td>
                <td className="p-2 border-r border-gray-200">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </td>
                <td className="p-2 border-r border-gray-200">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </td>
                <td className="p-2 border-r border-gray-200">
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </td>
                <td className="p-2 border-r border-gray-200">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </td>
                <td className="p-2">
                  <div className="h-8 bg-gray-200 rounded-lg w-16 mx-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
