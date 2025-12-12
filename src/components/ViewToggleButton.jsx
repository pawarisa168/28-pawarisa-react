import { Link } from "react-router-dom";

export default function ViewToggleButton({ to, label }) {
  return (
    <Link
      to={to}
      className="px-10 py-4 bg-blue-300 rounded-xl shadow-md  hover:bg-blue-700 transition"
    >
      {label}
    </Link>
  );
}
