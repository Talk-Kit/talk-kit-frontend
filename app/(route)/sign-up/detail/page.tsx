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
import { DownLightArrow } from "../../../_components/Icons";
import TalkKitLogo from "../../../_components/LOGO";
import AffiliationSelect from "../_components/AffiliationSelect";
import { DETAIL_ALERT_TEXT, DETAIL_TEXT } from "../_constants/constants";

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
        message = DETAIL_ALERT_TEXT[0];
        break;
      case "pwd":
        isValid =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            field
          );
        message = DETAIL_ALERT_TEXT[2];
        break;
      case "nickname":
        isValid = /^[A-Za-z0-9가-힣]{2,}$/.test(field);
        message = DETAIL_ALERT_TEXT[5];
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
        message: DETAIL_ALERT_TEXT[7],
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

      <SignUpProgress
        text={DETAIL_TEXT[0]}
        num={3}
        isStep2={true}
        isStep3={true}
      />

      {/* 아이디 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">{DETAIL_TEXT[1]}</span>
        <input
          {...register("id", {
            validate: (value) => validateField(value, "id"),
            onBlur: (e) => checkIdDuplicate(e.target.value),
          })}
          className={`signup-input ${errors.id && "border-red-1"}`}
          placeholder={DETAIL_TEXT[2]}
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
            {DETAIL_ALERT_TEXT[1]}
          </span>
        )}
      </div>

      {/* 비밀번호 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">{DETAIL_TEXT[3]}</span>
        <input
          {...register("pwd", {
            validate: (value) => validateField(value, "pwd"),
          })}
          className={`signup-input ${errors.pwd && "border-red-1"}`}
          type="password"
          placeholder={DETAIL_TEXT[4]}
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
        <span className="text-gray-4 text-sm font-bold">{DETAIL_TEXT[5]}</span>
        <input
          {...register("pwdConfirm", {
            validate: (value) => value === watch("pwd") || DETAIL_ALERT_TEXT[3],
          })}
          className={`signup-input ${errors.pwdConfirm && "border-red-1"}`}
          type="password"
          placeholder={DETAIL_TEXT[6]}
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
              {DETAIL_ALERT_TEXT[4]}
            </span>
          )}
      </div>

      {/* 닉네임 */}
      <div className="signup-max-w-600 flex-col items-start gap-2">
        <span className="text-gray-4 text-sm font-bold">{DETAIL_TEXT[7]}</span>
        <input
          {...register("nickname", {
            validate: (value) => validateField(value, "nickname"),
            onBlur: (e) => checkNicknameDuplicate(e.target.value),
          })}
          className={`signup-input ${errors.nickname && "border-red-1"}`}
          placeholder={DETAIL_TEXT[8]}
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
            {DETAIL_ALERT_TEXT[6]}
          </span>
        )}
      </div>

      {/* 소속 */}
      <div className="signup-max-w-600 flex-col items-start gap-1 relative">
        <span className="text-gray-4 text-sm font-bold">{DETAIL_TEXT[9]}</span>
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
            placeholder={DETAIL_TEXT[10]}
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
        text={DETAIL_TEXT[15]}
      />
    </form>
  );
}
