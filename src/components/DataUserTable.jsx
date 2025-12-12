export default function DataUserTable() {
  return (
    <div className="flex justify-center items-center mt-20">
      <table className="text-center text-xl shadow-md">
        <thead>
          <tr className="bg-blue-200">
            <th className="border px-30 py-4">Name</th>
            <th className="border px-30 py-4">Lastname</th>
            <th className="border px-30 py-4">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-30 py-4"></td>
            <td className="border px-30 py-4"></td>
            <td className="border px-30 py-4"></td>
          </tr>
          <tr>
            <td className="border px-30 py-4"></td>
            <td className="border px-30 py-4"></td>
            <td className="border px-30 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
