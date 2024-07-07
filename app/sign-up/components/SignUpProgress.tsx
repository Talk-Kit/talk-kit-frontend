import { ProgressCircle, ProgressBarCircle } from "./Icons";

interface SignUpProgressProps {
  text: string;
  num: number;
  isStep2: boolean;
  isStep3: boolean;
}

export default function SignUpProgress({
  text,
  num,
  isStep2,
  isStep3,
}: SignUpProgressProps) {
  return (
    <div className="flex flex-col gap-6 items-center ">
      <div className=" items-center text-lg font-semibold">{text}</div>
      <div className="text-primary-1 font-bold">STEP {num}</div>
      <div className="flex self-center">
        <ProgressCircle />
        <ProgressBarCircle isActive={isStep2} />
        <ProgressBarCircle isActive={isStep3} />
      </div>
    </div>
  );
}
