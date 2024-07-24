import { MinusIcon } from "../../../../components/Icons";
import { BtnProps } from "../../_types/project_types";

export default function RemoveContentBtn({ onClick }: BtnProps) {
  return (
    <div
      onClick={onClick}
      className="flex-center w-[50px] h-[50px] rounded-2xl bg-white"
    >
      <MinusIcon />
    </div>
  );
}
