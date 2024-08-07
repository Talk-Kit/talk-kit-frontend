"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TalkKitLogo from "../../components/LOGO";
import SignUpProgress from "./_components/SignUpProgress";
import PrimaryButton from "./_components/PrimaryButton";
import { Terms1, Terms2, Terms3 } from "./_components/Terms";
import { CheckBox } from "./_components/Icons";
import { CheckboxName } from "./_types/sign-up_types";
import { TERMS_TEXT } from "./_constants/constants";

export default function SignUp_Terms() {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState<Record<CheckboxName, boolean>>({
    all: false,
    terms1: false,
    terms2: false,
    terms3: false,
  });

  useEffect(() => {
    const { terms1, terms2 } = isChecked;
    setIsChecked((prevState) => ({
      ...prevState,
      all: terms1 && terms2,
    }));
  }, [isChecked.terms1, isChecked.terms2]);

  const handleCheckboxClick = (name: CheckboxName) => {
    if (name === "all") {
      const isAllChecked = !isChecked.all;
      setIsChecked({
        all: isAllChecked,
        terms1: isAllChecked,
        terms2: isAllChecked,
        terms3: isAllChecked,
      });
    } else {
      setIsChecked((prevState) => ({
        ...prevState,
        [name]: !prevState[name],
      }));
    }
  };

  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const { terms1, terms2, all } = isChecked;
    // [필수] 조건이 참일 때만 버튼을 활성화
    setIsButtonActive(terms1 && terms2 && all);
  }, [isChecked]);

  // 다음 버튼
  const handleButtonClick = () => {
    if (isButtonActive) {
      router.push("/sign-up/e-mail");
    }
  };
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />

      <SignUpProgress
        text={TERMS_TEXT[0]}
        num={1}
        isStep2={false}
        isStep3={false}
      />

      {/* 전체 동의하기 */}
      <button
        onClick={() => handleCheckboxClick("all")}
        className="signup-max-w-600 h-6 items-center gap-2"
      >
        <CheckBox isChecked={isChecked.all} />
        <span className={`${isChecked.all ? "text-gray-9" : "text-gray-4"}`}>
          {TERMS_TEXT[1]}
        </span>
      </button>

      {/* 토크키트 이용 약관 */}
      <Terms1
        isChecked={isChecked.terms1}
        onClick={() => handleCheckboxClick("terms1")}
      />

      {/* 개인정보 수집 및 이용 */}
      <Terms2
        isChecked={isChecked.terms2}
        onClick={() => handleCheckboxClick("terms2")}
      />

      {/* 마케팅 수신 동의 */}
      <Terms3
        isChecked={isChecked.terms3}
        onClick={() => handleCheckboxClick("terms3")}
      />

      {/* 다음 버튼 */}
      <PrimaryButton
        isActive={isButtonActive}
        onClick={handleButtonClick}
        text={TERMS_TEXT[7]}
      />
    </div>
  );
}
