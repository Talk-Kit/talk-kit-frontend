import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TalkKitLogo from "../LOGO";
import { BellIcon, SmMenuIcon, SmSignInIcon } from "../Icons";
import Overlay from "../Overlay";
import MenuCard from "./MenuCard";
import { AnimatePresence, motion } from "framer-motion";

// 화면 변화 시점이 744인 페이지 => md
// 화면 변화 시점이 834인 페이지 => lg
interface ITopBar {
  screen: "md" | "lg";
}

export default function TopBar({ screen }: ITopBar) {
  // 로그인 구현 후 수정 필요
  const [token, setToken] = useState(true);
  const [newAlarm, setNewAlarm] = useState(true);
  const [isMenuOpen, setIsMenuOpened] = useState(false);

  const router = useRouter();

  // 서브 메뉴가 열린 채 화면 크기가 변화했을 시 state 초기화
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 834) {
        setIsMenuOpened(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="fixed w-full bg-white h-[72px] flex justify-center px-4 z-10">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center">
        <TalkKitLogo width={130} height={50} />
        {/* 작은 화면일 때의 탑바 */}
        <div
          className={`sm:block ${screen === "md" ? "md:hidden" : "lg:hidden"}`}
        >
          <span
            className="cursor-pointer"
            onClick={() => setIsMenuOpened((prev) => !prev)}
          >
            {token ? <SmMenuIcon /> : <SmSignInIcon />}
          </span>
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* 작은 화면일 때의 서브 메뉴 */}
                <Overlay onClick={() => setIsMenuOpened((prev) => !prev)} />
                <motion.div
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  exit={{ x: 300 }}
                  transition={{ type: "tween", duration: 0.2 }}
                  className="fixed right-0 top-0 w-[300px] h-screen bg-white py-4 flex flex-col"
                >
                  {token ? (
                    <>
                      {/* 로그인 되었을 때 */}
                      <div className="px-3 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gray-3 rounded-full">
                            {/* 프로필 이미지로 변경 필요 */}
                          </div>
                          <span>화끈한분노{/* 닉네임 반영 필요 */}</span>
                        </div>
                        <div className="relative cursor-pointer">
                          <BellIcon />
                          {newAlarm && (
                            <div className="w-[3.33px] h-[3.33px] rounded-full bg-red-1 absolute right-0 top-0" />
                          )}
                        </div>
                      </div>
                      <MenuCard text="워크스페이스" onClick={() => {}} />
                      <MenuCard text="대본" onClick={() => {}} />
                      <MenuCard text="발표" onClick={() => {}} />
                      <MenuCard text="커뮤니티" onClick={() => {}} />
                      <MenuCard text="설정" onClick={() => {}} />
                    </>
                  ) : (
                    <>
                      {/* 로그인이 안 되었을 때 */}
                      <MenuCard
                        text="로그인"
                        onClick={() => router.push("/sign-in")}
                      />
                      <MenuCard
                        text="회원가입"
                        onClick={() => router.push("/sign-up")}
                      />
                    </>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        {/* 큰 화면일 때의 탑바 */}
        <div
          className={`sm:hidden ${screen === "md" ? "md:block" : "lg:block"}`}
        >
          {token ? (
            <>
              {/* 로그인 되었을 때 */}
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
            </>
          ) : (
            <>
              {/* 로그인이 안 되었을 때 */}
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
