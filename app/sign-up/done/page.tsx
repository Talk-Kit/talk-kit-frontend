"use client";

import { useRouter } from "next/navigation";
import TalkKitLogo from "../../components/LOGO";
import PrimaryButton from "../_components/PrimaryButton";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../_state/atom";

export default function SignUp_Done() {
  const router = useRouter();
  const nickname = useRecoilValue(nicknameState);
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />
      <div className="signup-max-w-600 py-6 px-0 flex-center text-center text-xl font-semibold">
        {nickname}님 <br /> 회원가입을 축하드려요!
      </div>

      <PrimaryButton
        isActive={true}
        onClick={() => {
          router.push("/sign-in");
        }}
        text="로그인하기"
      />
    </div>
  );
}
