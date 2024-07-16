"use client";

import { ChangeEvent, useState } from "react";
import { EmptyProjectIcon } from "./_components/Icons";
import MyProjectFolder from "./_components/MyProjectFolder";
import { useRouter } from "next/navigation";
import { CreateProjectDialog } from "./_components/CreateProject";

export default function MyProject() {
  const [myProjectList, setMyProjectList] = useState([]);
  return (
    <div className="pt-[72px] flex px-4 py-8 flex-col items-center self-stretch">
      {/* 위에 */}
      {myProjectList.length > 0 ? (
        <div
          style={{
            background: "rgba(247, 247, 247, 0.50)",
            minHeight: "calc(100vh - (88px + 72px))",
          }}
          className="flex py-8 px-0 flex-col items-center gap-8 self-stretch"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-0 px-4 gap-6 self-stretch">
            {myProjectList.map((index) => (
              <MyProjectFolder title="프로젝트명" date="24.07.07" key={index} />
            ))}
            <MyProjectFolder title="" date="" isCreate />
          </div>
        </div>
      ) : (
        // 아무 프로젝트도 없을 경우
        <EmptyProject />
      )}
    </div>
  );
}

const EmptyProject = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(inputValue);
    setInputValue(event.target.value);
  };
  return (
    <div className="flex flex-col items-center gap-[60px] self-stretch">
      <div className="flex flex-col items-center gap-3 self-stretch">
        <div className="flex-center w-[200px] h-[200px]">
          <EmptyProjectIcon />
        </div>
        <span className="flex-center py-1 px-3 gap-[10px] self-stretch text-center ">
          생성된 프로젝트가 아직 없습니다
        </span>
        <span className="flex-center py-1 px-3 gap-[10px] self-stretch text-center ">
          프로젝트를 생성하여 <br /> 자료들을 효율적으로 관리해 보세요!
        </span>
      </div>

      {/* 버튼 */}
      <button
        type="button"
        onClick={() => {
          router.push("/my-project/new-project");
        }}
        className="flex-center py-3 px-6 gap-[10px] rounded-lg bg-primary-1 text-gray-0 font-semibold "
      >
        새로운 프로젝트 생성하러 가기
      </button>

      {/* <CreateProjectDialog
        onBtnClick={() => {}}
        value={inputValue}
        onChange={handleInputChange}
      /> */}
    </div>
  );
};