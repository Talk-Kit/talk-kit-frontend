"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../_components/PrimaryButton";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../_state/atom";
import TalkKitLogo from "../../../_components/LOGO";
import { DONE_TEXT } from "../_constants/constants";

export default function SignUp_Done() {
  const router = useRouter();
  const nickname = useRecoilValue(nicknameState);
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />
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
    </div>
  );
}
