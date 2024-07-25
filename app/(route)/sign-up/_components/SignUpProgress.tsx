import { TERMS_TEXT } from "../_constants/constants";
import { SignUpProgressProps } from "../_types/sign-up_types";
import { ProgressCircle, ProgressBarCircle } from "./Icons";

export default function SignUpProgress({
  text,
  num,
  isStep2,
  isStep3,
}: SignUpProgressProps) {
  return (
    <div className="flex flex-col gap-6 items-center ">
      <div className=" items-center text-lg font-semibold">{text}</div>
      <div className="text-primary-1 font-bold">
        {TERMS_TEXT[8]} {num}
      </div>
      <div className="flex self-center">
        <ProgressCircle />
        <ProgressBarCircle isActive={isStep2} />
        <ProgressBarCircle isActive={isStep3} />
      </div>
    </div>
  );
}
