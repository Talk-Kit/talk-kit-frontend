export interface ButtonProps {
  text: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function Button({ text, onClick, isActive }: ButtonProps) {
  return (
    <button
      className={`flex-center px-6 py-3 rounded-lg font-semibold ${
        !isActive ? "bg-primary-1 border-none" : "bg-gray-3 "
      } text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
