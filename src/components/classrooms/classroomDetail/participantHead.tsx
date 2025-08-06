export default function ParticipantsHead() {
  return (
    <tr className="bg-background">
      <th className="whitespace-nowrap p-2 border-r border-gray-300">Id</th>
      <th className="whitespace-nowrap p-2 border-r border-gray-300">
        First Name
      </th>
      <th className="whitespace-nowrap p-2 border-r border-gray-300">
        Last Name
      </th>
      <th className="whitespace-nowrap p-2 border-r border-gray-300">E-Mail</th>
      <th className="whitespace-nowrap p-2 border-r border-gray-300">
        Joined At
      </th>
      <th className="whitespace-nowrap p-2">Ops.</th>
    </tr>
  );
}
