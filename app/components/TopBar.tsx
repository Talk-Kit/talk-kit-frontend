import { useState } from "react";
import TalkKitLogo from "./LOGO";
import { SmMenuIcon, SmSignInIcon } from "./Icons";
import { useRouter } from "next/navigation";

// 화면 변화 시점이 744인 페이지 => md
// 화면 변화 시점이 834인 페이지 => lg
interface ITopBar {
  screen: "md" | "lg";
}

export default function TopBar({ screen }: ITopBar) {
  // 로그인 구현 후 수정 필요
  const [token, setToken] = useState(true);
  const [newAlarm, setNewAlarm] = useState(false);

  const router = useRouter();
  return (
    <nav className="fixed w-full bg-white h-[72px] flex justify-center px-4">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center">
        <TalkKitLogo width={130} height={50} />
        <div
          className={`sm:block ${screen === "md" ? "md:hidden" : "lg:hidden"}`}
        >
          <span>{token ? <SmMenuIcon /> : <SmSignInIcon />}</span>
        </div>
        <div
          className={`sm:hidden ${screen === "md" ? "md:block" : "lg:block"}`}
        >
          {token ? (
            <div className="flex gap-3">
              <button className="px-3 py-1 rounded-lg text-sm text-gray-4">
                대본
              </button>
              <button className="px-3 py-1 rounded-lg text-sm text-gray-4">
                발표
              </button>
              <button className="px-3 py-1 rounded-lg text-sm text-gray-4">
                커뮤니티
              </button>
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gray-3" />
                {newAlarm && (
                  <div className="w-[6px] h-[6px] bg-red-1 rounded-full absolute top-0 right-0" />
                )}
              </div>
              <button className="px-4 py-2 text-sm text-gray-4 rounded-lg border border-gray-2">
                새로운 프로젝트 생성
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  router.push("/sign-in");
                }}
                className="px-4 py-[0.62rem] text-sm rounded-lg"
              >
                로그인
              </button>
              <button
                onClick={() => {
                  router.push("sign-up");
                }}
                className="px-4 py-[0.62rem] text-sm rounded-lg bg-primary-1 text-white"
              >
                회원가입
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
