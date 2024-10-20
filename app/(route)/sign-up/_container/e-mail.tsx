"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { emailState } from "../_state/atom";
import PrimaryButton from "../_components/PrimaryButton";
import { EMAIL_TEXT } from "../_constants/constants";
import api from "../../../_api/config";
import { Dialog  } from "../../../_components/Dialog";



export default function EmailContainer() {
  const router = useRouter();
  const [, setEmailState] = useRecoilState(emailState);

  // 이메일 state
  const [formState, setFormState] = useState({
    email: "",
    code:"",
    isEmailValid: false,
    isBtnActive: true,
  });

  // dialog
  const [dialogProps,setDialogProps] = useState({
    isWarn: false,
    topText: "",
    bottomText: "",
    btnText: "",
    onBtnClick: () => {},
    isTwoButton: false,
    subBtnText: "",
    onSubBtnClick: () => {},
  });
  const [dialogState,setDialogState] = useState(false);

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

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      code: e.target.value,
    }));
  };

  // 인증요청 버튼 클릭
  const handleAuthRequest = async() => {
    if (formState.isEmailValid) {
      try{
        const res = await api.post("/api/user-service/email",{userEmail:formState.email});
        if(res.status === 200){
          console.log("Email sent Successfully");

          //인증요청 다이얼로그
          setDialogProps({
            isWarn: false,
            topText: EMAIL_TEXT[5],
            bottomText: EMAIL_TEXT[6],
            btnText: "확인",
            onBtnClick: ()=>{setDialogState(false);},
            isTwoButton: false,
            subBtnText: "",
            onSubBtnClick: () => {},
          });
          setDialogState(true);
        }
      }catch(e){
        console.error("Error: " + e.message);
      }
    }
  };

  // 다음 버튼 클릭
  const handleButtonClick = async() => {
    if (formState.isBtnActive) {
      setEmailState(formState.email);
      try{
        const res = await api.post("/api/user-service/email/confirm",
        {userEmail:formState.email,authCode:formState.code});
        if(res.status === 200){
          router.push("/sign-up/detail");
        }
      }catch(e){
        console.error("Error: " + e.message);
        // 잘못된 인증번호 다이얼로그
        setDialogProps({
          isWarn: true,
          topText: EMAIL_TEXT[7],
          bottomText: EMAIL_TEXT[8],
          btnText: "확인",
          onBtnClick: ()=>{setDialogState(false);},
          isTwoButton: false,
          subBtnText: "",
          onSubBtnClick: () => {},
        });
        setDialogState(true);
        return; 
      }
    }
  };
  return (
    <>
      {dialogState && (
        <Dialog
          {...dialogProps} 
        />
      )}

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
      <input 
        type="text"
        value={formState.code}
        onChange={handleCodeChange}
        className="signup-input" 
        placeholder={EMAIL_TEXT[3]} 
      />

      {/* 다음 버튼 */}
      <PrimaryButton
        isActive={formState.isBtnActive}
        onClick={handleButtonClick}
        text="다음"
      />
    </>
  );
}
