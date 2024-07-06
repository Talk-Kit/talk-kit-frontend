"use client";

import { EmptyProjectIcon } from "./components/Icons";

export default function MyProject() {
  return (
    <div className="pt-[72px] flex px-4 py-8 flex-col items-center self-stretch">
      <div className="flex flex-col items-center gap-[60px] self-stretch">
        {/* 위에 */}
        <div className="flex flex-col items-center gap-3 self-stretch">
          <div className="flex-center w-[200px] h-[200px]">
            <EmptyProjectIcon />
          </div>
          <span className="flex-center py-1 px-3 gap-[10px] self-stretch text-gray-9 text-center ">
            생성된 프로젝트가 아직 없습니다
          </span>
          <span className="flex-center py-1 px-3 gap-[10px] self-stretch text-gray-9 text-center ">
            프로젝트를 생성하여 <br /> 자료들을 효율적으로 관리해 보세요!
          </span>
        </div>

        {/* 버튼 */}
        <button
          type="button"
          onClick={() => {
            console.log("새로운 프로젝트 생성하러 가기");
          }}
          className="flex-center py-3 px-6 gap-[10px] rounded-lg bg-primary-1 text-gray-0 font-semibold "
        >
          새로운 프로젝트 생성하러 가기
        </button>
      </div>
    </div>
  );
}
