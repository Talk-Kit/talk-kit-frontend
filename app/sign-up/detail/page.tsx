"use client";

import { useEffect, useState } from "react";
import TalkKitLogo from "../../components/LOGO";
import SignUpProgress from "../components/SignUpProgress";
import { useRouter } from "next/navigation";
import { DownLightArrow } from "../../components/Icons";
import PrimaryButton from "../components/PrimaryButton";
import AffiliationSelect from "./components/AffiliationSelect";
import { SubmitHandler, useForm } from "react-hook-form";
import { AlertIcon, DetailCheckBox } from "../components/Icons";

interface FormData {
  id: string;
  pwd: string;
  pwdConfirm: string;
  nickname: string;
  affiliation: string;
}

export default function SignUp_Detail() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const [idChecked, setIdChecked] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);

  // 아이디 유효성 검사
  const validateId = (id: string) => {
    const isValidId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(id);
    return (
      isValidId || "영문과 숫자를 포함하는 6자 이상의 아이디를 입력해 주세요"
    );
  };

  // 아이디 중복 검사
  const checkIdDuplicate = (id: string) => {
    console.log("아이디 중복검사");
  };

  // 비밀번호 유효성 검사
  const validatePWD = (pwd: string) => {
    const isValidPwd =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
    return (
      isValidPwd ||
      "영문, 숫자, 특수기호를 포함하는 8자 이상의 비밀번호를 입력해 주세요"
    );
  };

  // 닉네임 유효성 검사
  const validateNickname = (nickname: string) => {
    const isValidNickname = /^[A-Za-z0-9가-힣]{2,}$/.test(nickname);
    return (
      isValidNickname ||
      "영문, 한글 및 숫자로 이루어진 2글자 이상 닉네임을 입력해 주세요"
    );
  };

  // 닉네임 중복 검사
  const checkNicknameDuplicate = (nickname: string) => {
    console.log("닉네임 중복검사");
  };

  // 소속
  const [showAffiliation, setShowAffiliation] = useState(false);
  const [affiliation, setAffiliation] = useState("");

  // 소속 클릭
  const handleAffiliationSelect = (value: string) => {
    setAffiliation(value);
    setShowAffiliation(false);
    clearErrors("affiliation");
  };

  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    if (affiliation) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [affiliation]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!affiliation) {
      setError("affiliation", {
        type: "manual",
        message: "소속을 선택해 주세요",
      });
      return;
    }

    // 아이디 중복 검사
    checkIdDuplicate(data.id);

    // 닉네임 중복 검사
    checkNicknameDuplicate(data.nickname);

    console.log("서브밋", data);
    router.push("/sign-up/done");
  };
  return (
    <form className="signup-screen" onSubmit={handleSubmit(onSubmit)}>
      <TalkKitLogo width={280} height={79} />

      <SignUpProgress text="회원생성" num={3} isStep2={true} isStep3={true} />

      {/* 아이디 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">아이디</span>
        <input
          {...register("id", {
            validate: validateId,
            onBlur: (e) => checkIdDuplicate(e.target.value),
          })}
          className={`signup-input ${errors.id && "border-red-1"}`}
          placeholder="영문과 숫자를 포함하는 6자 이상의 아이디를 입력해 주세요"
        />
        {errors.id && typeof errors.id.message === "string" && (
          <span className="flex items-center gap-[6px] self-stretch text-red-1 text-sm">
            <AlertIcon />
            {errors.id.message}
          </span>
        )}
        {errors.id && idChecked && (
          <span className="flex items-center gap-[6px] self-stretch text-gray-4 text-sm">
            <DetailCheckBox />
            사용 가능한 아이디입니다
          </span>
        )}
      </div>

      {/* 비밀번호 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">비밀번호</span>
        <input
          {...register("pwd", {
            validate: validatePWD,
          })}
          className={`signup-input ${errors.pwd && "border-red-1"}`}
          type="password"
          placeholder="영문,숫자,특수기호를 포함하는 8자 이상의 비밀번호를 입력해 주세요"
        />
        {errors.pwd && typeof errors.pwd.message === "string" && (
          <span className="flex items-center gap-[6px] self-stretch text-red-1 text-sm">
            <AlertIcon />
            {errors.pwd.message}
          </span>
        )}
      </div>

      {/* 비밀번호 확인 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">비밀번호 확인</span>
        <input
          {...register("pwdConfirm", {
            validate: (value) =>
              value === watch("pwd") || "비밀번호가 일치하지 않아요",
          })}
          className={`signup-input ${errors.pwdConfirm && "border-red-1"}`}
          type="password"
          placeholder="비밀번호를 다시 한 번 확인할게요"
        />
        {errors.pwdConfirm && typeof errors.pwdConfirm.message === "string" && (
          <span className="flex items-center gap-[6px] self-stretch text-red-1 text-sm">
            <AlertIcon />
            {errors.pwdConfirm.message}
          </span>
        )}
        {!errors.pwd &&
          !errors.pwdConfirm &&
          watch("pwdConfirm") === watch("pwd") &&
          watch("pwd")?.length > 0 && (
            <span className="flex items-center gap-[6px] self-stretch text-gray-4 text-sm">
              <DetailCheckBox />
              비밀번호가 일치합니다
            </span>
          )}
      </div>

      {/* 닉네임 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">닉네임</span>
        <input
          {...register("nickname", {
            validate: validateNickname,
            onBlur: (e) => checkNicknameDuplicate(e.target.value),
          })}
          className={`signup-input ${errors.nickname && "border-red-1"}`}
          placeholder="영문, 한글 및 숫자로 이루어진 2글자 이상의 닉네임을 입력해주세요"
        />
        {errors.nickname && typeof errors.nickname.message === "string" && (
          <span className="flex items-center gap-[6px] self-stretch text-red-1 text-sm">
            <AlertIcon />
            {errors.nickname.message}
          </span>
        )}
        {!errors.nickname && nicknameChecked && (
          <span className="flex items-center gap-[6px] self-stretch text-gray-4 text-sm">
            <DetailCheckBox />
            사용 가능한 닉네임입니다
          </span>
        )}
      </div>

      {/* 소속 */}
      <div className="signup-max-w-600 flex-col items-start gap-1 relative">
        <span className="text-gray-4 text-sm font-bold">소속</span>
        <div
          onClick={() => {
            setShowAffiliation((prev) => !prev);
          }}
          className={`signup-input items-center cursor-pointer ${
            errors.affiliation && "border-red-1"
          }`}
        >
          <input
            value={affiliation}
            className="placeholder:text-gray-3 placeholder:font-normal cursor-pointer "
            placeholder="소속을 선택해 주세요"
            onFocus={(e) => e.target.blur()}
            readOnly
          />
          <DownLightArrow />
        </div>

        {errors.affiliation && (
          <span className="flex items-center gap-[6px] self-stretch text-red-1 text-sm">
            <AlertIcon />
            {errors.affiliation.message}
          </span>
        )}

        {/* 소속 선택 */}
        {showAffiliation && (
          <AffiliationSelect
            show={showAffiliation}
            onSelect={handleAffiliationSelect}
          />
        )}
      </div>

      {/* 다음 버튼 */}
      <PrimaryButton
        isActive={isButtonActive}
        onClick={() => {}}
        text="가입완료"
      />
    </form>
  );
}
