"use client";

import { useEffect, useState } from "react";
import TopBar from "../../_components/TopBar/TopBar";
import Footer from "../_components/Footer";
import api from "../../_api/config";
import CreateScriptDraft from "./_components/CreateScriptDraft";
import CreateScript from "./_components/CreateScript";
import { Project } from "./_interfaces/interfaces";
import { DUMMY_PROJECT_LIST } from "./_constants/constants";

export default function ScriptPage() {
  // token 가져오기
  const [token, setToken] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 로그인(토큰 저장) 구현 후 수정 필요
      const storedToken = localStorage.getItem("token");
      storedToken && setToken(storedToken); // Bearer 제거
    }
  }, []);

  // 토큰으로 프로젝트 목록 불러오기
  const [projectList, setProjectList] = useState<Project[]>();
  useEffect(() => {
    if (token !== "") {
      api
        .get("/api/script-service/projects", {
          headers: { Authorization: token },
          params: { Authorization: token },
        })
        .then((res) => {
          // 이후 res에서 가져온 데이터로 대체 필요
          setProjectList(res.data);
        });
      // 403 에러
      // parameters에 Authorization에 뭘 넣어야 하는지 모르겠음
      // 위의 headers를 없애면 401 에러가 나오는 것을 보아
      // headers의 토큰으로 JWT 인증까지는 되는 것으로 판단됨
      // (아래의 초안 GPT 작성은 멀쩡하게 됨)
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
            projectList={DUMMY_PROJECT_LIST}
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
