"use client";

import { useState } from "react";
import TalkKitLogo from "../../components/LOGO";
import { useRouter } from "next/navigation";

export default function SignUp_Email() {
  const router = useRouter();

  const [isButtonActive, setIsButtonActive] = useState(false);
  return (
    <div className="flex py-8 px-4 flex-col items-center gap-6 self-stretch">
      <TalkKitLogo width={280} height={79} />
      {/* 텍스트 */}
      <div className="flex w-full max-w-[600px] flex-col items-center gap-3">
        <span className="flex justify-center pt-6 items-center text-center text-gray-9 text-xl font-semibold">
          본인 인증을 위해 <br /> 이메일 인증을 진행해주세요
        </span>
        <span className="text-gray-9 text-center text-sm">
          인증에 사용한 이메일은 로그인할 때 사용돼요
        </span>
      </div>

      {/* 이메일을 입력해주세요 */}
      <div className="flex w-full max-w-[600px] py-2 pr-2 h-10 justify-between border-[1px] border-gray-3">
        <input
          className="w-full pl-4 placeholder:text-gray-3"
          placeholder="이메일을 입력해주세요"
        />
        <button className="flex items-center py-[6px] px-3 rounded-[39px] border-[1px] border-gray-4 text-gray-9 text-xs whitespace-nowrap">
          인증요청
        </button>
      </div>

      {/* 인증번호를 입력해주세요 */}
      <input
        className="flex w-full max-w-[600px] py-2 pr-2 h-10 justify-between border-[1px] border-gray-3 pl-4 placeholder:text-gray-3"
        placeholder="인증번호를 입력해주세요"
      />

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
