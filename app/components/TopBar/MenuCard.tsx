interface IMenuCard {
  text: string;
  onClick: () => void;
}

export default function MenuCard({ text, onClick }: IMenuCard) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[50px] flex items-center px-3 cursor-pointer hover:bg-gray-1"
    >
      {text}
    </div>
  );
}
