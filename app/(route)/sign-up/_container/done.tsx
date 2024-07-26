"use client";

import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import PrimaryButton from "../_components/PrimaryButton";
import { DONE_TEXT } from "../_constants/constants";
import { nicknameState } from "../_state/atom";

export default function DoneContainer() {
  const router = useRouter();
  const nickname = useRecoilValue(nicknameState);
  return (
    <>
      <div className="signup-max-w-600 py-6 px-0 flex-center text-center text-xl font-semibold">
        {nickname}
        {DONE_TEXT[0]} <br /> {DONE_TEXT[1]}
      </div>

      <PrimaryButton
        isActive={true}
        onClick={() => {
          router.push("/sign-in");
        }}
        text={DONE_TEXT[2]}
      />
    </>
  );
}
