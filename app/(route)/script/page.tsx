"use client";

import { useEffect, useState } from "react";
import TopBar from "../../_components/TopBar/TopBar";
import Footer from "../_components/Footer";
import api from "../../_api/config";
import CreateScriptDraft from "./_components/CreateScriptDraft";
import CreateScript from "./_components/CreateScript";
import { Project, ScriptForm } from "./_interfaces/interfaces";
import { useToken } from "../../_hooks/useToken";
import { set } from "react-hook-form";


export default function ScriptPage() {
  // token 가져오기
  const {token, } = useToken();
  
  // 토큰으로 프로젝트 목록 불러오기
  const [projectList, setProjectList] = useState<Project[]>();

  useEffect(() => {
    if (token !== null) {
      console.log("token: "+token);
      api
        .get("/api/script-service/projects", {
          headers: { Authorization: token }
        })
        .then((res) => {
          if(res.status === 202){
            // 생성된 프로젝트가 없을때
            setProjectList([]);
          }
          // 이후 res에서 가져온 데이터로 대체 필요
          setProjectList(res.data);
          console.log(res.data);
        });
    }
  }, [token]);

  const [defaultValue, setDefaultValue] = useState("");
  const handleDraft = async (draft: string) => {
    try {
      const response = await api.post(
        "/api/script-service/script/ai",
        { content: draft },
        { headers: { Authorization: token } }
      );
      console.log(response.data);

      // GPT 응답 시 아래 대본 작성 부분에 초안 입력
      setDefaultValue(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScript = async (data: ScriptForm) => {
    try {
      // 지금 data.projectSeq은 존재하는 프로젝트의 id값
      const response = await api.post(
        `/api/script-service/script/${data.projectSeq}`,
        {
          fileName: data.fileName,
          fileContent: data.fileContent,
        },
        {
          headers: { Authorization: token },
        }
      );
      if (response.status === 201){
        alert("저장되었습니다")
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopBar screen="lg" />
      <div className="w-full flex justify-center pt-[72px] px-4 bg-primary-0">
        <div className="w-full max-w-[1200px] flex flex-col py-[60px] gap-[60px]">
          {/* 대본 초안 작성 */}
          <CreateScriptDraft onSubmit={handleDraft} />
          {/* 대본 작성 */}
          <CreateScript
            defaultValue={defaultValue}
            projectList={projectList}
            onSubmit={handleScript}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
