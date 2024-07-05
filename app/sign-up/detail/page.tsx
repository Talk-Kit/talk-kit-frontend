"use client";

import { useState } from "react";
import TalkKitLogo from "../../components/LOGO";
import SignUpProgress from "../components/SignUpProgress";
import { useRouter } from "next/navigation";

export default function SignUp_Detail() {
  const router = useRouter();
  const [isButtonActive, setIsButtonActive] = useState(false);
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />

      <SignUpProgress text="회원생성" num={3} isStep2={true} isStep3={true} />

      {/* 아이디 */}
      <div className="flex max-w-[600px] w-full flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">아이디</span>
        <input
          className="signup-input"
          placeholder="영문과 숫자를 포함하는 6자 이상의 아이디를 입력해 주세요"
        />
      </div>

      {/* 비밀번호 */}
      <div className="flex max-w-[600px] w-full flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">비밀번호</span>
        <input
          className="signup-input"
          type="password"
          placeholder="영문,숫자,특수기호를 포함하는 8자 이상의 비밀번호를 입력해 주세요"
        />
      </div>

      {/* 비밀번호 확인 */}
      <div className="flex max-w-[600px] w-full flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">비밀번호 확인</span>
        <input
          className="signup-input"
          type="password"
          placeholder="비밀번호를 다시 한 번 확인할게요"
        />
      </div>

      {/* 닉네임 */}
      <div className="flex max-w-[600px] w-full flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">닉네임</span>
        <input
          className="signup-input"
          placeholder="영문, 한글 및 숫자로 이루어진 2글자 이상의 닉네임을 입력해주세요"
        />
      </div>

      {/* 소속 */}
      <div className="flex max-w-[600px] w-full flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">소속</span>
        <input className="signup-input" placeholder="소속을 선택해 주세요" />
      </div>

      {/* 다음 버튼 */}
      <div className="w-full max-w-[600px]">
        <button
          onClick={() => {
            if (isButtonActive) {
              router.push("/sign-up/e-mail");
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
            회원가입
          </span>
        </button>
      </div>
    </div>
  );
}
