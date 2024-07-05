"use client";

import { useRouter } from "next/navigation";
import TalkKitLogo from "../../components/LOGO";

export default function SignUp_Done() {
  const router = useRouter();
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />
      <div className="flex w-full max-w-[600px] py-6 px-0 justify-center items-center text-gray-9 text-center text-xl font-semibold">
        김현중님 <br /> 회원가입을 축하드려요!
      </div>

      <button
        onClick={() => {
          router.push("/sign-in");
        }}
        className="flex w-full max-w-[600px] py-3 px-2 justify-center items-center gap-2 rounded-lg border-[1px] border-gray-3 bg-primary-1"
      >
        <span className="text-gray-0 font-bold text-center">회원가입</span>
      </button>
    </div>
  );
}
