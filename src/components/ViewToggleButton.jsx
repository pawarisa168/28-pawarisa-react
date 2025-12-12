export default function ViewToggleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 mb-8 bg-gray-200 hover:bg-gray-700 rounded-lg shadow-lg text-lg font-semibold transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}
