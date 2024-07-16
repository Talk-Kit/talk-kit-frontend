"use client";

import { useEffect, useState } from "react";
import SignUpProgress from "../_components/SignUpProgress";
import { useRouter } from "next/navigation";
import PrimaryButton from "../_components/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { AlertIcon, DetailCheckBox } from "../_components/Icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailState, nicknameState } from "../_state/atom";
import { FormData } from "../_types/sign-up_types";
import { DownLightArrow } from "../../../components/Icons";
import TalkKitLogo from "../../../components/LOGO";
import AffiliationSelect from "../_components/AffiliationSelect";

export default function SignUp_Detail() {
  const email = useRecoilValue(emailState);
  const [, setNicknameState] = useRecoilState(nicknameState);
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

  const [formState, setFormState] = useState({
    idChecked: false,
    nicknameChecked: false,
    showAffiliation: false,
    affiliation: "",
    isButtonActive: false,
  });

  // 각 input validation
  const validateField = (field: string, type: "id" | "pwd" | "nickname") => {
    let isValid = false;
    let message = "";

    switch (type) {
      case "id":
        isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(field);
        message = "영문과 숫자를 포함하는 6자 이상의 아이디를 입력해 주세요";
        break;
      case "pwd":
        isValid =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            field
          );
        message =
          "영문, 숫자, 특수기호를 포함하는 8자 이상의 비밀번호를 입력해 주세요";
        break;
      case "nickname":
        isValid = /^[A-Za-z0-9가-힣]{2,}$/.test(field);
        message =
          "영문, 한글 및 숫자로 이루어진 2글자 이상 닉네임을 입력해 주세요";
        break;
      default:
        break;
    }

    return isValid || message;
  };

  // 아이디 중복 검사
  const checkIdDuplicate = (id: string) => {
    console.log("아이디 중복검사");
  };

  // 닉네임 중복 검사
  const checkNicknameDuplicate = (nickname: string) => {
    console.log("닉네임 중복검사");
  };

  // 소속 클릭
  const handleAffiliationSelect = (value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      affiliation: value,
      showAffiliation: false,
    }));
    clearErrors("affiliation");
  };

  useEffect(() => {
    if (formState.affiliation) {
      setFormState((prevState) => ({
        ...prevState,
        isButtonActive: true,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        isButtonActive: false,
      }));
    }
  }, [formState.affiliation]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!formState.affiliation) {
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
    setNicknameState(data.nickname);

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
            validate: (value) => validateField(value, "id"),
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
        {errors.id && formState.idChecked && (
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
            validate: (value) => validateField(value, "pwd"),
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
            validate: (value) => validateField(value, "nickname"),
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
        {!errors.nickname && formState.nicknameChecked && (
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
            setFormState((prevState) => ({
              ...prevState,
              showAffiliation: !prevState.showAffiliation,
            }));
          }}
          className={`signup-input items-center cursor-pointer ${
            errors.affiliation && "border-red-1"
          }`}
        >
          <input
            value={formState.affiliation}
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
        {formState.showAffiliation && (
          <AffiliationSelect
            show={formState.showAffiliation}
            onSelect={handleAffiliationSelect}
          />
        )}
      </div>

      {/* 다음 버튼 */}
      <PrimaryButton
        isActive={formState.isButtonActive}
        onClick={() => {}}
        text="가입완료"
      />
    </form>
  );
}
