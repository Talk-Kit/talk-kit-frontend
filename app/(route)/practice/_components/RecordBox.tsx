"use client";

import { useEffect, useState } from "react";
import RecordingAnimation from "./RecordingAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { DUMMY_SELECTION_LIST, RECORD_BOX_TEXT } from "../_constants/constants";
import { MikeIcon, PlayIcon, RecordIcon } from "./Icons";
import DropDown from "../../../_components/DropDown";
import { useCalculateTime } from "../../../_hooks/useCalculateTime";

export default function RecordBox() {
  // 녹음 상태 관련 state
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // 녹음 기능 관련 state
  const [recordedTime, setRecordedTime] = useState(0);
  const [recMinutes, recSeconds] = useCalculateTime(recordedTime);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>(null);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  // 녹음된 파일 재생 관련 시간 state
  const [currentTime, setCurrentTime] = useState(0);
  const [currMinutes, currSeconds] = useCalculateTime(currentTime / 1000);
  const [totalTime, setTotalTime] = useState(0);

  // 녹음된 시각 저장
  const [recordedHours, setRecordedHours] = useState(0);
  const [recordedMinutes, setRecordedMinutes] = useState(0);

  // 녹음 시간 측정 (사용자에게 출력하기 위한 용도)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // 녹음된 데이터가 저장될 배열
  const audioArray = [];
  const onRecord = async () => {
    try {
      if (!isRecording) {
        // 녹음이 시작되면 재생되고 있던 오디오 정지
        if (audio) {
          audio.pause();
        }
        setIsDone(false);
        setIsPlaying(false);

        // 시간 측정 변수 선언
        let startedTime: number, endedTime: number;

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

        newMediaRecorder.onstart = (event) => {
          // 녹음 시작 시의 시간 측정
          startedTime = new Date().getTime();
        };

        // 녹음 종료 시 EventHandling
        newMediaRecorder.onstop = (event) => {
          // 녹음 종료 시의 시간 측정
          endedTime = new Date().getTime();
          setRecordedHours(new Date().getHours());
          setRecordedMinutes(new Date().getMinutes());

          const totalTime = endedTime - startedTime;
          setTotalTime(totalTime);

          setIsRecording(false);

          // 녹음이 종료될 때, 배열에 담긴 데이터를 합치고 코덱 설정
          const blob = new Blob(audioArray, { type: "audio/ogg codecs=opus" });
          // 녹음 데이터 배열 초기화
          audioArray.splice(0);
          // 합쳐진 음성 데이터(Blob)에 접근할 수 있는 URL 생성
          const blobURL = window.URL.createObjectURL(blob);
          // 생성된 blobURL에 맞게 audio과 관련 state 갱신
          const newAudio = new Audio(blobURL);

          // 음성 재생이 끝나면 isPlaying state 변경
          newAudio.addEventListener("ended", () => {
            setIsPlaying(false);
            setIsDone(true);
          });

          // 새로운 녹음이 저장되었을 경우 currentTime state 초기화
          setCurrentTime(0);
          // 생성된 오디오 엘리먼트 저장
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

  // 저장 관련
  const [isOpened, setIsOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

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
                ? `${recMinutes}:${recSeconds}`
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
              <span className="text-gray-4 text-sm">{`${recordedHours}시 ${recordedMinutes}분`}</span>
            </div>
            <div className="flex gap-3 grow items-center">
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (!isPlaying) {
                    // 끝까지 재생되었을 때 다시 재생하는 경우 진행도 즉시 초기화
                    if (isDone) {
                      setIsDone(false);
                      setCurrentTime(0);
                    }
                    setIsPlaying(true);
                    audio.play();
                  } else {
                    setIsPlaying(false);
                    audio.pause();
                  }
                }}
              >
                <PlayIcon />
              </div>
              <div className="bg-gray-2 h-3 w-full grow rounded-full relative overflow-hidden">
                <motion.div
                  style={{
                    scaleX: currentTime / totalTime,
                  }}
                  className="bg-primary-1 h-3 w-full relative origin-left"
                />
              </div>
              <span className="text-gray-4 text-xs">{`${currMinutes}:${currSeconds}`}</span>
            </div>
          </div>
          {/* 녹음 파일 저장 */}
          <div className="w-full h-[50px] flex gap-3">
            <DropDown
              currentValue={selectedProject}
              isOpened={isOpened}
              onDropDownClick={() => setIsOpened((prev) => !prev)}
              onSelectionClick={(select) => {
                setSelectedProject(select);
              }}
              placeholder={RECORD_BOX_TEXT[3]}
              selectionList={DUMMY_SELECTION_LIST}
            />
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
