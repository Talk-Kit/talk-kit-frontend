export default function ProjectBtn({ text, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`flex-center px-6 py-3 rounded-lg border-[1px] font-semibold ${
        isActive ? "bg-primary-1" : "bg-gray-3"
      } text-white`}
    >
      {text}
    </button>
  );
}
