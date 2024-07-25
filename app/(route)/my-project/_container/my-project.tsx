"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import MyProjectFolder from "../_components/MyProjectFolder";
import Button from "../../../components/Button";
import { EmptyProjectIcon } from "../_components/Icons";
import { MYPROJECT_TEXT } from "../_constants/constants";

export default function MyProjectContainer() {
  const [myProjectList, setMyProjectList] = useState([1]);
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
          {MYPROJECT_TEXT[0]}
        </span>
        <span className="flex-center py-1 px-3 gap-[10px] self-stretch text-center ">
          {MYPROJECT_TEXT[1]}
          <br /> {MYPROJECT_TEXT[2]}
        </span>
      </div>

      {/* 버튼 */}
      <Button
        onClick={() => {
          router.push("/my-project/new-project");
        }}
        text={MYPROJECT_TEXT[3]}
      />

      {/* <CreateProjectDialog
          onClick={() => {}}
          value={inputValue}
          onChange={handleInputChange}
        /> */}
    </div>
  );
};
