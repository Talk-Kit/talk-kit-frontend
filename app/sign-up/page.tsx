"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CheckBox from "../components/Icons";
import TalkKitLogo from "../components/LOGO";
import SignUpProgress from "./components/SignUpProgress";

type CheckboxName = "all" | "terms1" | "terms2";

export default function SignUp_Terms() {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState<Record<CheckboxName, boolean>>({
    all: false,
    terms1: false,
    terms2: false,
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
    // 모든 조건이 참일 때만 버튼을 활성화
    setIsButtonActive(terms1 && terms2 && all);
  }, [isChecked]);
  return (
    <div className="signup-screen">
      <TalkKitLogo width={280} height={79} />

      <SignUpProgress
        text="약관 동의"
        num={1}
        isStep2={false}
        isStep3={false}
      />

      {/* 전체 동의하기 */}
      <button
        onClick={() => handleCheckboxClick("all")}
        className="flex w-full max-w-[600px] h-6 items-center gap-2"
      >
        <CheckBox isChecked={isChecked.all} />
        <span className={`${isChecked.all ? "text-gray-9" : "text-gray-4"}`}>
          전체 동의하기
        </span>
      </button>

      {/* 토크키트 이용 약관 */}
      <div className="flex w-full max-w-[600px] flex-col items-start gap-4">
        <button
          onClick={() => handleCheckboxClick("terms1")}
          className="flex items-center gap-2 self-stretch"
        >
          <CheckBox isChecked={isChecked.terms1} />
          <span
            className={`${isChecked.terms1 ? "text-gray-9" : "text-gray-4"}`}
          >
            <span className="font-bold">[필수]</span> 토크키트 이용약관
          </span>
        </button>
        <div className="flex h-[120px] py-2 px-4 items-start gap-2 self-stretch border-[1px] border-gray-3 overflow-scroll hide-scrollbar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          efficitur nulla, eget varius arcu. Phasellus auctor massa vel turpis
          imperdiet posuere id a metus. Nulla elementum scelerisque elit, non
          bibendum lacus ornare eu. Cras dignissim aliquam nulla ut porta. Fusce
          pulvinar sed sem sed aliquet. Vivamus nisl nunc, vulputate eu sem sit
          amet, viverra dictum mauris. Curabitur eget nunc ultricies, tincidunt
          arcu sed, auctor enim. Vivamus elementum tincidunt dapibus. Vivamus
          tincidunt ex nec massa commodo auctor. Cras ultricies posuere dolor
          efficitur pharetra.
        </div>
      </div>

      {/* 개인정보 수집 및 이용 */}
      <div className="flex w-full max-w-[600px] flex-col items-start gap-4">
        <button
          onClick={() => handleCheckboxClick("terms2")}
          className="flex items-center gap-2 self-stretch"
        >
          <CheckBox isChecked={isChecked.terms2} />
          <span
            className={`${isChecked.terms2 ? "text-gray-9" : "text-gray-4"}`}
          >
            <span className="font-bold">[필수]</span> 개인정보 수집 및 이용
          </span>
        </button>
        <div className="flex h-[120px] py-2 px-4 items-start gap-2 self-stretch border-[1px] border-gray-3 overflow-scroll hide-scrollbar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          efficitur nulla, eget varius arcu. Phasellus auctor massa vel turpis
          imperdiet posuere id a metus. Nulla elementum scelerisque elit, non
          bibendum lacus ornare eu. Cras dignissim aliquam nulla ut porta. Fusce
          pulvinar sed sem sed aliquet. Vivamus nisl nunc, vulputate eu sem sit
          amet, viverra dictum mauris. Curabitur eget nunc ultricies, tincidunt
          arcu sed, auctor enim. Vivamus elementum tincidunt dapibus. Vivamus
          tincidunt ex nec massa commodo auctor. Cras ultricies posuere dolor
          efficitur pharetra.
        </div>
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
            다음
          </span>
        </button>
      </div>
    </div>
  );
}
