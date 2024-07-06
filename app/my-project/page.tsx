"use client";

export default function MyProject() {
  return (
    <div className="pt-[72px] flex px-4 py-8 flex-col items-center self-stretch">
      <div className="flex flex-col items-center gap-[60px] self-stretch">
        {/* 위에 */}
        <div className="flex flex-col items-center gap-3 self-stretch">
          <div className="flex items-center justify-center w-[200px] h-[200px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
            >
              <path
                d="M137.5 46.875V12.5H103.125V0H150V46.875H137.5ZM0 150V103.125H12.5V137.5H46.875V150H0ZM0 81.25V68.75H12.5V81.25H0ZM0 46.875V34.375H12.5V46.875H0ZM0 12.5V0H12.5V12.5H0ZM34.375 12.5V0H46.875V12.5H34.375ZM68.75 150V137.5H81.25V150H68.75ZM68.75 12.5V0H81.25V12.5H68.75ZM103.125 150V137.5H115.625V150H103.125ZM137.5 150V137.5H150V150H137.5ZM137.5 115.625V103.125H150V115.625H137.5ZM137.5 81.25V68.75H150V81.25H137.5Z"
                fill="#6B71FF"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <span className="flex py-1 px-3 justify-center items-center gap-[10px] self-stretch text-gray-9 text-center ">
            생성된 프로젝트가 아직 없습니다
          </span>
          <span className="flex py-1 px-3 justify-center items-center gap-[10px] self-stretch text-gray-9 text-center ">
            프로젝트를 생성하여 <br /> 자료들을 효율적으로 관리해 보세요!
          </span>
        </div>

        {/* 버튼 */}
        <button
          type="button"
          onClick={() => {
            console.log("새로운 프로젝트 생성하러 가기");
          }}
          className="flex py-3 px-6 justify-center items-center gap-[10px] rounded-lg bg-primary-1 text-gray-0 font-semibold "
        >
          새로운 프로젝트 생성하러 가기
        </button>
      </div>
    </div>
  );
}
