import { MinusIcon } from "../../../../components/Icons";

export default function RemoveContentBtn({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex-center w-[50px] h-[50px] rounded-2xl bg-white"
    >
      <MinusIcon />
    </div>
  );
}
