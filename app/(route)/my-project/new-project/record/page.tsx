"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TopBar from "../../../../components/TopBar/TopBar";
import RecordingAnimation from "../../_components/RecordingAnimation";
import {
  MikeIcon,
  PlayIcon,
  RecordIcon,
  ShowSelectionIcon,
} from "../../_components/Icons";
import Button from "../../../../components/Button";

export default function Record() {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  return (
    <>
      <TopBar screen="lg" />
      <div
        style={{
          background: "rgba(189, 203, 253, 0.20)",
          minHeight: "calc(100vh - 88px)",
        }}
        className="w-full flex justify-center pt-[72px]"
      >
        <div className="w-full pt-[3.75rem] max-w-[1200px] px-4">
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold">음성녹음</span>
            {/* 녹음 기능 */}
            <div className="py-6 bg-white rounded-lg">
              <div className="flex flex-col gap-16 items-center">
                <div className="flex flex-col gap-6 items-center">
                  <span>
                    {isRecording ? <RecordingAnimation /> : <MikeIcon />}
                  </span>
                  <span
                    className={`text-center font-medium leading-5 ${
                      isRecording && "text-gray-4 text-sm"
                    }`}
                  >
                    {isRecording
                      ? `00:23`
                      : isRecorded
                      ? "음성녹음을 저장하지 않으면\n자동삭제되니 주의하세요"
                      : "녹음을 시작하려면 하단 빨간 버튼을 클릭해 주세요"}
                  </span>
                </div>
                <span
                  onClick={() => {
                    if (isRecording === true) {
                      setIsRecorded(true);
                    }
                    setIsRecording((prev) => !prev);
                  }}
                  className="relative flex justify-center items-center"
                >
                  <RecordIcon />
                  <AnimatePresence initial={false}>
                    <motion.div
                      className="absolute"
                      animate={{
                        width: isRecording ? 24 : 42,
                        height: isRecording ? 24 : 42,
                        borderRadius: isRecording ? 4 : 100,
                        background: "#E61919",
                      }}
                    />
                  </AnimatePresence>
                </span>
              </div>
            </div>
            {isRecorded && (
              <>
                {/* 녹음 파일 들어보기 */}
                <div className="w-full h-[50px] rounded-2xl bg-white flex gap-9 items-center px-6">
                  <div className="flex gap-3 items-center">
                    <span className="font-semibold">새로운 녹음</span>
                    <span className="text-gray-4 text-sm">10시 32분</span>
                  </div>
                  <div className="flex gap-3 grow items-center">
                    <PlayIcon />
                    <div className="bg-gray-2 h-3 w-full grow rounded-full"></div>
                    <span className="text-gray-4 text-xs">00:00</span>
                  </div>
                </div>
                {/* 녹음 파일 저장 */}
                <div className="w-full h-[50px] flex gap-3">
                  <div
                    onClick={() => {}}
                    className="w-full h-full grow bg-white border border-gray-3 rounded-lg flex items-center justify-between px-4 cursor-pointer"
                  >
                    <span className="text-gray-3">저장할 프로젝트</span>
                    <ShowSelectionIcon />
                  </div>
                  <Button onClick={() => {}} text="저장" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
