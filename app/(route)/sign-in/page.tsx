"use client";

import { useEffect, useState } from "react";
import TalkKitLogo from "../../_components/LOGO";
import { useForm } from "react-hook-form";
import api from "../../_api/config";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  // 로그인 여부 확인
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") !== null) {
      router.push("/");
    }
  }, []);

  const [loginErr, setLoginErr] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: { userId: string; userPwd: string }) => {
    try {
      const response = await api.post("/api/user-service/login", data);
      if (response.status === 200) {
        const accessToken = response.headers.authorization;
        localStorage.setItem("token", accessToken);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="w-full max-w-[600px] flex flex-col gap-6 items-center">
        <TalkKitLogo width={208} height={79} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="w-full flex flex-col">
            <div
              className={`flex justify-center w-full px-1 text-[.8125rem] ${
                loginErr ? "text-red-1" : "text-transparent"
              }`}
            >
              아이디와 비밀번호가 일치하지 않습니다
            </div>
            <div className="px-4 py-2 border border-gray-3 rounded-t-lg focus-within:border-primary-1 focus-within:z-10">
              <input
                {...register("userId", { required: true })}
                className="w-full outline-none"
                type="text"
                placeholder="아이디를 입력해 주세요"
              />
            </div>
            <div className="-mt-[1px] px-4 py-2 border border-gray-3 rounded-b-lg focus-within:border-primary-1">
              <input
                {...register("userPwd", { required: true })}
                className="w-full outline-none"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>
          </div>
          <input
            className="cursor-pointer long-button bg-primary-1 text-white"
            type="submit"
            value="로그인"
          />
        </form>
        <div className="w-full flex items-center">
          <div className="w-full grow h-[1px] bg-gray-2" />
          <span className="px-3 py-1 text-gray-4 text-sm shrink-0 cursor-pointer">
            아이디 찾기
          </span>
          <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
          <span className="px-3 py-1 text-gray-4 text-sm shrink-0 cursor-pointer">
            비밀번호 찾기
          </span>
          <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
          <span className="px-3 py-1 text-gray-4 text-sm shrink-0 cursor-pointer">
            회원가입
          </span>
          <div className="w-full grow h-[1px] bg-gray-2" />
        </div>
        <div className="w-full flex flex-col gap-6 py-6">
          <button className="long-button bg-[#FFF96B]">
            카카오 계정으로 로그인
          </button>
          <button className="long-button border border-gray-3">
            구글 계정으로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
