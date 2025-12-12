import DataUserTable from "../components/DataUserTable";
import ViewToggleButton from "../components/ViewToggleButton";

export default function UserView() {
  return (
    <div className="p-20">
      <h1 className="text-center text-4xl font-bold">Generation Thailand</h1>
      <h1 className="text-center text-4xl font-bold">Home-User View</h1>
      <div
        className="flex justify-center gap-50
       my-12"
      >
        <ViewToggleButton to="/user" label="User Home View" />
        <ViewToggleButton to="/admin" label="Admin Home View" />
      </div>
      <DataUserTable />
    </div>
  );
}
