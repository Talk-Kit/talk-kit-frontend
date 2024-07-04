import { ProgressCircle, ProgressBarCircle } from "./Icons";

export default function SignUpProgress({ text, num, isStep2, isStep3 }) {
  return (
    <div className="flex flex-col gap-6 items-center text-gray-9">
      <div className="text-gray-9 items-center text-lg font-semibold">
        {text}
      </div>
      <div className="text-primary-1 font-bold">STEP {num}</div>
      <div className="flex self-center">
        <ProgressCircle />
        <ProgressBarCircle isActive={isStep2} />
        <ProgressBarCircle isActive={isStep3} />
      </div>
    </div>
  );
}
