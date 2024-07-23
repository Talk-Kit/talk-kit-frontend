"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TopBar from "../../../components/TopBar/TopBar";
import MyProjectFooter from "../_components/Footer";
import RemoveContentBtn from "./_components/RemoveContentBtn";
import ProjectInput from "./_components/ProjectInput";
import ProjectBtn from "./_components/ProjectBtn";

// react-quill을 dynamic import로
// react-quill은 브라우저 환경에서만 동작하는 라이브러리이기 때문에
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MyProject_New() {
  const [projectState, setProjectState] = useState({
    projectName: "",
    isNameBtnActive: false,
    isScriptBtnActive: false,
  });
  const [scriptContent, setScriptContent] = useState("");

  useEffect(() => {
    // 프로젝트명이 입력되었는지 확인하고 버튼 Active로
    setProjectState((prevState) => ({
      ...prevState,
      isNameBtnActive: prevState.projectName.trim().length > 0,
    }));
  }, [projectState.projectName]);

  useEffect(() => {
    // 대본이 입력됐는지 확인하고 버튼 Active로
    setProjectState((prevState) => ({
      ...prevState,
      isScriptBtnActive: scriptContent.trim().length > 0,
    }));
  }, [scriptContent]);

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectState((prevState) => ({
      ...prevState,
      projectName: e.target.value,
    }));
  };

  useEffect(() => {
    const savedContent = localStorage.getItem("scriptContent");
    if (savedContent) {
      setScriptContent(savedContent);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("scriptContent", scriptContent);
  };

  const handleLoad = () => {
    const savedContent = localStorage.getItem("scriptContent");
    if (savedContent) {
      setScriptContent(savedContent);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleChange = (e) => {
    setScriptContent(e);
  };
  return (
    <>
      <TopBar screen={"md"} />
      <div
        style={{ background: "rgba(189, 203, 253, 0.20)" }}
        className="pt-[132px] pb-[60px] h-auto flex py-[60px] px-4 lg:px-[120px] flex-col items-center self-stretch"
      >
        <div className="flex flex-col items-center gap-8 self-stretch">
          {/* 프로젝트명 */}
          <div className="flex flex-col items-end gap-3 self-stretch">
            <span className="flex py-0 px-[10px] items-center gap-[10px] self-stretch font-semibold">
              프로젝트명
            </span>
            <ProjectInput
              placeholder="생성할 프로젝트명을 입력해주세요"
              value={projectState.projectName}
              onChange={handleProjectNameChange}
            />
            <ProjectBtn
              text="업로드"
              onClick={() => {
                if (projectState.isNameBtnActive) {
                  console.log("업로드");
                }
              }}
              isActive={projectState.isNameBtnActive}
            />
          </div>

          {/* 대본 */}
          <div className="flex pl-8 items-start gap-3 self-stretch">
            <div className="flex flex-col items-end gap-3 w-full">
              <ProjectInput
                placeholder="대본을 적어주세요"
                value={""}
                onChange={() => {}}
              />

              <div className="flex-center h-[500px] self-stretch">
                <ReactQuill
                  className="h-[500px] w-full bg-white border-none text-xl"
                  value={scriptContent}
                  onChange={handleChange}
                  modules={{ toolbar: false }}
                />
              </div>

              <ProjectBtn
                onClick={handleSave}
                text="저장하기"
                isActive={projectState.isScriptBtnActive}
              />
            </div>

            <RemoveContentBtn onClick={() => {}} />
          </div>

          {/* 새로운 녹음 */}
          <div className="flex pl-8 items-start gap-3 self-stretch">
            <div className="flex px-6 items-center gap-3 w-full rounded-2xl bg-white">
              <div className="flex h-[50px] py-[10px] items-center">
                <div className="flex items-center gap-3">
                  <span className="flex-center max-w-[300px] text-gray-9 font-semibold">
                    새로운 녹음
                  </span>
                  <span className="flex-center text-gray-4 text-sm">
                    10시 32분
                  </span>
                </div>
              </div>
            </div>

            <RemoveContentBtn onClick={() => {}} />
          </div>

          {/* 발표자료 */}
          <div className="flex pl-8 items-start gap-3 self-stretch">
            <div className="flex px-6 items-center gap-3 w-full rounded-2xl bg-white">
              <div className="flex h-[50px] py-[10px] items-center">
                <div className="flex items-center gap-3">
                  <span className="flex-center max-w-[300px] text-gray-9 font-semibold">
                    발표자료
                  </span>
                </div>
              </div>
            </div>

            <RemoveContentBtn onClick={() => {}} />
          </div>
        </div>
      </div>
      <MyProjectFooter />
    </>
  );
}
