"use client";

import { useState } from "react";
import TalkKitLogo from "../../components/LOGO";
import { useRouter } from "next/navigation";
import SignUpProgress from "../components/SignUpProgress";

export default function SignUp_Email() {
  const router = useRouter();

  const [isButtonActive, setIsButtonActive] = useState(false);
  return (
    <div className="flex py-8 px-4 flex-col items-center gap-6 self-stretch">
      <TalkKitLogo width={280} height={79} />
      {/* 텍스트 */}
      <SignUpProgress
        text="이메일 인증"
        num={2}
        isStep2={true}
        isStep3={false}
      />
      <span className="text-gray-9 text-center text-sm">
        인증에 사용한 이메일은 로그인할 때 사용돼요
      </span>

      {/* 이메일을 입력해주세요 */}
      <div className="flex w-full items-center max-w-[600px] py-2 px-4 h-[50px] justify-between border-[1px] border-gray-3 rounded-lg">
        <input
          className="w-full placeholder:text-gray-3"
          placeholder="이메일을 입력해주세요"
        />
        <div className="flex items-center justify-center py-2 px-3 rounded-lg border-[1px] bg-primary-1 ">
          <span className="text-gray-0 text-xs whitespace-nowrap h-5">
            인증요청
          </span>
        </div>
      </div>

      {/* 인증번호를 입력해주세요 */}
      <input className="signup-input" placeholder="인증번호를 입력해주세요" />

      {/* 다음 버튼 */}
      <div className="w-full max-w-[600px]">
        <button
          onClick={() => {
            if (isButtonActive) {
              router.push("/sign-up/detail");
            }
          }}
          className={`flex w-full max-w-[600px] py-3 px-2 justify-center items-center gap-2 self-stretch rounded-lg border-[1px] border-gray-3 ${
            isButtonActive ? "bg-primary-1" : "bg-gray-0"
          } `}
        >
          <span
            className={`${
              isButtonActive ? "text-gray-0" : "text-gray-3"
            } font-bold text-center`}
          >
            다음
          </span>
        </button>
      </div>
    </div>
  );
}
