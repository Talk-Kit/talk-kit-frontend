interface IOverlay {
  onClick: () => void;
}

export default function Overlay({ onClick }: IOverlay) {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-screen h-screen bg-gray-9 opacity-20 z-10"
    ></div>
  );
}
