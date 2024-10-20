import { useEffect, useState } from "react";
import { CIRCUMFERENCE, TIMER_BUTTON_TEXT } from "../_constants/constants";
import { useCalculateTime } from "../../../_hooks/useCalculateTime";
import { motion } from "framer-motion";
import { CloseIcon } from "../../../_components/Icons";
import { useOutsideClick } from "../../../_hooks/useOutsideClick";
import ClockTicks from "./ClockTicks";

interface ITimer {
  isVisible: boolean;
  onClose: () => void;
}

export default function Timer({ isVisible, onClose }: ITimer) {
  // 현재 남은 시간 및 MM:ss 계산을 위한 훅 사용
  const [time, setTime] = useState(0);
  const [minutes, seconds] = useCalculateTime(time);

  // 재생됨 여부 및 재생되었을 때의 시간
  const [startedTime, setStartedTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  // 현재 재생 여부 및 setInterval 저장
  const [isTicking, setIsTicking] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  // 타이머 시작/정지
  useEffect(() => {
    if (isTicking && time > 0) {
      // 타이머 시작
      const id = setInterval(() => {
        setTime((prev) => Number((prev - 0.1).toFixed(1)));
      }, 100);
      setTimerId(id);

      return () => clearInterval(id);
    } else if (!isTicking) {
      // 타이머 정지
      if (timerId) clearInterval(timerId);
    }
  }, [isTicking]);

  // time이 0이 될 경우(초기화 버튼 클릭 시 포함) 타이머 정지 및 state 초기화
  useEffect(() => {
    if (time <= 0) {
      setIsTicking((prev) => !prev);
      setIsStarted((prev) => !prev);
      setStartedTime(0);
      clearInterval(timerId);
    }
  }, [time]);

  const ref = useOutsideClick(() => {
    isVisible && onClose();
  });

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      ref={ref}
      transition={{ type: "tween", duration: 0.5 }}
      className="bg-[#161616]/[0.2] fixed w-full top-0 left-0 z-20 flex flex-col items-center py-6 gap-8 rounded-b-lg"
    >
      <div className="flex lg:flex-col lg:gap-8 items-center gap-8">
        {/* 타이머 스타일링 */}
        <section className="w-[180px] h-[180px] flex justify-center items-center relative">
          <div className="w-[150px] h-[150px] bg-gray-9 rounded-full flex justify-center items-center">
            <span className="timer-number">
              {minutes}
              <span className="timer-unit">M</span>
            </span>
            <span className="timer-number -mt-[5px]">:</span>
            <span className="timer-number">
              {seconds}
              <span className="timer-unit">S</span>
            </span>
          </div>
          {/* 진행도 바 스타일링 */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            width="170"
            height="170"
            viewBox="0 0 170 170"
          >
            <motion.circle
              // 진행도 바 즉시 초기화(리렌더링)를 위한 key
              key={isStarted + ""}
              fill="none"
              stroke="#6B71FF"
              strokeWidth="10"
              r="80"
              cx="85"
              cy="85"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: 0 }}
              animate={{
                strokeDashoffset:
                  time && startedTime
                    ? CIRCUMFERENCE - CIRCUMFERENCE * (time / startedTime)
                    : 0,
              }}
              transition={{ duration: 0.1, type: "tween", ease: "linear" }}
              style={{ rotate: -90 }}
            />
          </svg>
          {/* 시계 점 스타일링 */}
          <ClockTicks />
        </section>
        {/* 버튼 */}
        <section className="flex gap-4 max-lg:grid max-lg:grid-cols-2">
          {TIMER_BUTTON_TEXT.map((el, index) => (
            <button
              key={index}
              onClick={() => {
                if (el.minutes === 0) {
                  setTime(0);
                } else if (el.minutes === -1) {
                  if (time <= 0) {
                    alert("시간을 설정해주세요");
                  } else {
                    if (!isStarted) {
                      // 처음 시작되었을 때만 startedTime 설정
                      setIsStarted((prev) => !prev);
                      // 비율 계산을 위한 초기 time값 저장
                      setStartedTime(time);
                      setIsTicking((prev) => !prev);
                    } else {
                      setIsTicking((prev) => !prev);
                    }
                  }
                } else {
                  if (isStarted) {
                    setStartedTime((prev) => prev + el.minutes * 60);
                    setTime((prev) => prev + el.minutes * 60);
                  } else {
                    setTime((prev) => prev + el.minutes * 60);
                  }
                }
              }}
              className="timer-button"
            >
              {el.text}
            </button>
          ))}
        </section>
      </div>
      <button
        onClick={() => {
          onClose();
        }}
      >
        <CloseIcon />
      </button>
    </motion.div>
  );
}
