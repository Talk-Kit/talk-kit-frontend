"use client";

import { DownLightArrow } from "../../components/Icons";
import RecordBox from "../my-project/_components/RecordBox";
import { CheckBox } from "../sign-up/_components/Icons";

export default function PracticePage() {
  return (
    <div className="w-full min-h-screen bg-primary-0 flex justify-center">
      <div className="w-full max-w-[1200px] px-4 pt-[132px] pb-[60px] flex flex-col gap-[60px]">
        <section className="w-full">
          <div className="w-full flex gap-2">
            <CheckBox isChecked={false} />
            <span className="text-gray-4">타이머 사용하기</span>
          </div>
        </section>
        <section className="w-full flex flex-col gap-3">
          <span className="title-text">대본 불러오기</span>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder="대본의 프로젝트를 선택해주세요"
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder="대본을 선택해주세요"
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
        </section>
        <section className="w-full flex flex-col gap-3">
          <span className="title-text">발표자료 불러오기</span>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder="대본을 선택해주세요"
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder="대본을 선택해주세요"
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <span className="title-text">음성 녹음</span>
          <RecordBox />
        </section>
      </div>
    </div>
  );
}
