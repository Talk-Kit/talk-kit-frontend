"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { emailState } from "../_state/atom";
import TalkKitLogo from "../../../components/LOGO";
import SignUpProgress from "../_components/SignUpProgress";
import PrimaryButton from "../_components/PrimaryButton";
import { EMAIL_TEXT } from "../_constants/constants";

export default function SignUp_Email() {
  const router = useRouter();
  const [, setEmailState] = useRecoilState(emailState);

  // 이메일 state
  const [formState, setFormState] = useState({
    email: "",
    isEmailValid: false,
    isBtnActive: true,
  });

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setFormState((prev) => ({
      ...prev,
      isEmailValid: emailRegex.test(formState.email),
    })); // 정규식 검사
  }, [formState.email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  // 인증요청 버튼 클릭
  const handleAuthRequest = () => {
    if (formState.isEmailValid) {
      console.log("인증 요청");
    }
  };

  // 다음 버튼 클릭
  const handleButtonClick = () => {
    if (formState.isBtnActive) {
      setEmailState(formState.email);
      router.push("/sign-up/detail");
    }
  };
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />
      {/* 텍스트 */}
      <SignUpProgress
        text={EMAIL_TEXT[0]}
        num={2}
        isStep2={true}
        isStep3={false}
      />
      <span className="text-center text-sm">{EMAIL_TEXT[1]}</span>

      {/* 이메일을 입력해주세요 */}
      <div className="signup-max-w-600 justify-between items-center py-2 px-4 h-[50px] border-[1px] border-gray-3 rounded-lg">
        <input
          type="email"
          className="w-full placeholder:text-gray-3 outline-none"
          placeholder={EMAIL_TEXT[2]}
          value={formState.email}
          onChange={handleEmailChange}
        />
        <div
          onClick={handleAuthRequest}
          className={`flex-center py-2 px-3 rounded-lg border-[1px] cursor-pointer ${
            formState.isEmailValid ? "bg-primary-1" : "bg-gray-2"
          }`}
        >
          <span className="text-gray-0 text-xs whitespace-nowrap h-5">
            {EMAIL_TEXT[4]}
          </span>
        </div>
      </div>

      {/* 인증번호를 입력해주세요 */}
      <input className="signup-input" placeholder={EMAIL_TEXT[3]} />

      {/* 다음 버튼 */}
      <PrimaryButton
        isActive={formState.isBtnActive}
        onClick={handleButtonClick}
        text="다음"
      />
    </div>
  );
}
