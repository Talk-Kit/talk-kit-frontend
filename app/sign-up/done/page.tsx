"use client";

import { useRouter } from "next/navigation";
import TalkKitLogo from "../../components/LOGO";
import PrimaryButton from "../components/PrimaryButton";

export default function SignUp_Done() {
  const router = useRouter();
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />
      <div className="flex w-full max-w-[600px] py-6 px-0 justify-center items-center text-gray-9 text-center text-xl font-semibold">
        김현중님 <br /> 회원가입을 축하드려요!
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
