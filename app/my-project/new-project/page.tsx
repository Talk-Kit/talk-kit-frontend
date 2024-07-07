"use client";

import { useEffect, useState } from "react";
import { PlusIcon } from "../../components/Icons";

export default function MyProject_New() {
  const [projectName, setProjectName] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    // 프로젝트명이 입력되었는지 확인하고 버튼 Active로
    setIsButtonActive(projectName.trim().length > 0);
  }, [projectName]);

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };
  return (
    <div
      style={{ background: "rgba(189, 203, 253, 0.20)" }}
      className="mt-[72px] mb-[88px] h-auto flex py-[60px] px-4 lg:px-[120px] flex-col items-center self-stretch"
    >
      <div className="flex flex-col items-center gap-8 self-stretch">
        {/* 프로젝트명 */}
        <div className="flex w-full flex-col gap-3">
          <span className="px-[10px] font-semibold">프로젝트명</span>
          <div className="flex h-[50px] px-6 justify-between items-center bg-white rounded-2xl">
            <input
              className="flex w-full py-[10px] items-center outline-none font-semibold placeholder:text-gray-3 placeholder:font-normal"
              placeholder="생성할 프로젝트명을 입력해주세요"
              value={projectName}
              onChange={handleProjectNameChange}
            />
          </div>
        </div>

        {/* 대본 */}
        <div className="flex w-full flex-col items-start gap-3">
          <span className="flex px-8 py-0 items-center font-semibold">
            대본
          </span>
          <div className="flex w-full pl-8 justify-center gap-3">
            <div className="flex w-full h-[50px] px-6 items-center rounded-2xl bg-white">
              <input
                className="flex py-[10px] items-center w-full outline-none font-semibold placeholder:text-gray-3 placeholder:font-normal"
                placeholder="대본 추가하려면 우측 플러스 버튼을 눌러 주세요"
              />
            </div>
            <button className="flex-center h-[50px] w-[50px] bg-white rounded-2xl">
              <PlusIcon />
            </button>
          </div>
        </div>

        {/* 음성녹음 */}
        <div className="flex w-full flex-col items-start gap-3">
          <span className="flex px-8 py-0 items-center font-semibold">
            음성녹음
          </span>
          <div className="flex w-full pl-8 justify-center gap-3">
            <div className="flex w-full h-[50px] px-6 items-center rounded-2xl bg-white">
              <input
                className="flex py-[10px] items-center w-full outline-none font-semibold placeholder:text-gray-3 placeholder:font-normal"
                placeholder="음성녹음을 추가하려면 우측 플러스 버튼을 눌러 주세요"
              />
            </div>
            <button className="flex-center h-[50px] w-[50px] bg-white rounded-2xl">
              <PlusIcon />
            </button>
          </div>
        </div>

        {/* 발표자료 */}
        <div className="flex w-full flex-col items-start gap-3">
          <span className="flex px-8 py-0 items-center font-semibold">
            발표자료
          </span>
          <div className="flex w-full pl-8 justify-center gap-3">
            <div className="flex w-full h-[50px] px-6 items-center rounded-2xl bg-white">
              <input
                className="flex py-[10px] items-center w-full outline-none font-semibold placeholder:text-gray-3 placeholder:font-normal"
                placeholder="발표자료를 추가하려면 우측 플러스 버튼을 눌러 주세요"
              />
            </div>
            <button className="flex-center h-[50px] w-[50px] bg-white rounded-2xl">
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 items-end w-full mt-[60px]">
        <button
          onClick={() => {
            if (isButtonActive) {
              console.log("프로젝트 생성");
            }
          }}
          className={`flex-center px-6 py-3 rounded-lg border-[1px] border-gray-2 font-semibold ${
            isButtonActive ? "bg-primary-1 text-white" : "bg-white text-gray-4"
          }`}
        >
          프로젝트 생성
        </button>
      </div>
    </div>
  );
}
