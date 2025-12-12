import { Link } from "react-router-dom";

export default function ViewToggleButton({ to, label }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 bg-blue-300 rounded shadow-md  hover:bg-blue-700 transition"
    >
      {label}
    </Link>
  );
}
