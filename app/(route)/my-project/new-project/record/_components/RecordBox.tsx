"use client";

import { useRef, useState } from "react";
import RecordingAnimation from "../../../_components/RecordingAnimation";
import { MikeIcon, RecordIcon } from "../../../../../components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, ShowSelectionIcon } from "../../../_components/Icons";

export default function RecordBox() {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>(null);
  const [latestBlobURL, setLatestBlobURL] = useState("");
  // 녹음된 데이터가 저장될 배열
  const audioArray = [];
  const onRecord = async () => {
    if (!isRecording) {
      // 마이크 mediaStream 생성
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      // MediaRecorder 생성
      const newMediaRecorder = new MediaRecorder(mediaStream);
      setMediaRecorder(newMediaRecorder);
      // 녹음
      newMediaRecorder.ondataavailable = (event) => {
        // 녹음된 데이터를 배열에 저장
        audioArray.push(event.data);
      };
      // 녹음 종료 및 재생
      newMediaRecorder.onstop = (event) => {
        // 녹음이 종료될 때, 배열에 담긴 데이터를 합치고 코덱 설정
        const blob = new Blob(audioArray, { type: "audio/ogg codecs=opus" });
        // 배열 초기화
        audioArray.splice(0);
        // 합쳐진 음성 데이터(Blob)에 접근할 수 있는 URL 생성
        const blobURL = window.URL.createObjectURL(blob);
        setLatestBlobURL(blobURL);
      };

      newMediaRecorder.start();
      setIsRecording(true);
    } else {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <div className="py-6 bg-white rounded-lg">
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-col gap-6 items-center">
            <span>{isRecording ? <RecordingAnimation /> : <MikeIcon />}</span>
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
              onRecord();
            }}
            className="relative flex justify-center items-center cursor-pointer"
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
              <div className="cursor-pointer">
                <PlayIcon />
              </div>
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
            <button
              onClick={() => {}}
              className="px-6 py-3 bg-primary-1 text-white rounded-lg"
            >
              저장
            </button>
          </div>
        </>
      )}
    </>
  );
}
