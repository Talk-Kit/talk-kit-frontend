"use client";

import { useEffect, useState } from "react";
import RecordingAnimation from "./RecordingAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { ShowSelectionIcon } from "../../my-project/_components/Icons";
import { RECORD_BOX_TEXT } from "../_constants/constants";
import { MikeIcon, PlayIcon, RecordIcon } from "./Icons";

export default function RecordBox() {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>(null);
  const [latestBlobURL, setLatestBlobURL] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [recordedTime, setRecordedTime] = useState(0);
  // 녹음 시간 측정 (10 밀리초마다 측정)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordedTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);
  const [currentTime, setCurrentTime] = useState(0);
  // 녹음된 데이터가 저장될 배열
  const audioArray = [];
  const onRecord = async () => {
    try {
      if (!isRecording) {
        // 마이크 mediaStream 생성
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        // MediaRecorder 생성
        const newMediaRecorder = new MediaRecorder(mediaStream);
        setMediaRecorder(newMediaRecorder);
        // 녹음된 데이터를 배열에 저장
        newMediaRecorder.ondataavailable = (event) => {
          audioArray.push(event.data);
        };
        // 녹음 종료 시 EventHandling
        newMediaRecorder.onstop = (event) => {
          setIsRecording(false);
          // 녹음이 종료될 때, 배열에 담긴 데이터를 합치고 코덱 설정
          const blob = new Blob(audioArray, { type: "audio/ogg codecs=opus" });
          // 녹음 데이터 배열 초기화
          audioArray.splice(0);
          // 합쳐진 음성 데이터(Blob)에 접근할 수 있는 URL 생성
          const blobURL = window.URL.createObjectURL(blob);
          setLatestBlobURL(blobURL);
          // 생성된 blobURL에 맞게 audio과 관련 state 갱신
          const newAudio = new Audio(blobURL);
          // 음성 재생이 끝나면 isPlaying state 변경
          newAudio.addEventListener("ended", () => {
            setIsPlaying(false);
          });
          // 새로운 녹음이 저장되었을 경우 currentTime state 초기화 및
          setCurrentTime(0);
          // 재생 시간이 변경될 경우 currentTime state 변경
          newAudio.addEventListener("timeupdate", () => {
            setCurrentTime(newAudio.currentTime);
          });
          setAudio(newAudio);
        };
        newMediaRecorder.start();
        setRecordedTime(0);
        setIsRecording(true);
      } else {
        mediaRecorder.stop();
      }
    } catch (err) {
      alert(RECORD_BOX_TEXT[0]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
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
                ? `${
                    Math.floor(recordedTime / 1000 / 60) < 10
                      ? `0${Math.floor(recordedTime / 1000 / 60)}`
                      : Math.floor(recordedTime / 1000 / 60)
                  }:${
                    Math.floor(recordedTime / 1000) < 10
                      ? `0${Math.floor(recordedTime / 1000)}`
                      : Math.floor(recordedTime / 1000)
                  }`
                : !isRecorded
                ? RECORD_BOX_TEXT[1]
                : RECORD_BOX_TEXT[2]}
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
      {isRecorded && !isRecording && (
        <>
          {/* 녹음 파일 들어보기 */}
          <div className="w-full h-[50px] rounded-2xl bg-white flex gap-9 items-center px-6">
            <div className="flex gap-3 items-center">
              <span className="font-semibold">새로운 녹음</span>
              <span className="text-gray-4 text-sm">10시 32분</span>
            </div>
            <div className="flex gap-3 grow items-center">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (!isPlaying) {
                    setIsPlaying(true);
                    audio.play();
                  } else {
                    setIsPlaying(false);
                    audio.pause();
                  }
                }}
              >
                <PlayIcon />
                <audio src={latestBlobURL}></audio>
              </div>
              <div className="bg-gray-2 h-3 w-full grow rounded-full relative overflow-hidden">
                <motion.div
                  style={{
                    scaleX: currentTime / Math.floor(recordedTime / 1000),
                  }}
                  className="bg-primary-1 h-3 w-full relative origin-left"
                />
              </div>
              <span className="text-gray-4 text-xs">{`${
                Math.floor(currentTime / 60) < 10
                  ? `0${Math.floor(currentTime / 60)}`
                  : Math.floor(currentTime / 60)
              }:${
                Math.floor(currentTime) < 10
                  ? `0${Math.floor(currentTime)}`
                  : Math.floor(currentTime)
              }`}</span>
            </div>
          </div>
          {/* 녹음 파일 저장 */}
          <div className="w-full h-[50px] flex gap-3">
            <div
              onClick={() => {}}
              className="w-full h-full grow bg-white border border-gray-3 rounded-lg flex items-center justify-between px-4 cursor-pointer"
            >
              <span className="text-gray-3">{RECORD_BOX_TEXT[3]}</span>
              <ShowSelectionIcon />
            </div>
            <button
              onClick={() => {}}
              className="px-6 py-3 bg-primary-1 text-white rounded-lg"
            >
              {RECORD_BOX_TEXT[4]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
