"use client";

import { useEffect, useState } from "react";
import TalkKitLogo from "../../components/LOGO";
import { useRouter } from "next/navigation";
import SignUpProgress from "../components/SignUpProgress";
import PrimaryButton from "../components/PrimaryButton";

export default function SignUp_Email() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email)); // 정규식 검사
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAuthRequest = () => {
    if (isEmailValid) {
      console.log("인증 요청");
    }
  };

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (isButtonActive) {
      router.push("/sign-up/detail");
    }
  };
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
          type="email"
          className="w-full placeholder:text-gray-3 outline-none"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmailChange}
        />
        <div
          onClick={handleAuthRequest}
          className={`flex items-center justify-center py-2 px-3 rounded-lg border-[1px] cursor-pointer ${
            isEmailValid ? "bg-primary-1" : "bg-gray-2"
          }`}
        >
          <span className="text-gray-0 text-xs whitespace-nowrap h-5">
            인증요청
          </span>
        </div>
      </div>

      {/* 인증번호를 입력해주세요 */}
      <input className="signup-input" placeholder="인증번호를 입력해주세요" />

      {/* 다음 버튼 */}
      <PrimaryButton
        isActive={isButtonActive}
        onClick={handleButtonClick}
        text="다음"
      />
    </div>
  );
}
