// 이후 다른 곳에서 사용하게 되면 상위 _components 폴더로 옮겨주세요

import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import EditorToolBar from "./EditorToolBar";
import { FONT_SIZE } from "../_constants/constants";
import { useEffect } from "react";

export default function TextEditor({
  width,
  height,
  initial,
  onChange,
}: {
  width: string;
  height: string;
  initial: string;
  onChange: (text: string) => void;
}) {
  // ReactQuill을 dynamic을 이용하여 서버에서
  // import 되지 않고 브라우저 내에서만 실행되도록 함
  const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
    // 로딩 중에도 기본 레이아웃 제공으로 사용자가 변화를 최소한으로 느끼게 함
    // 또한 absolute로 <EditorToolBar />의 초기 렌더링 중 생기는 레이아웃 오류를 가림
    loading: () => (
      <div className="w-full h-full border border-[#CCCCCC] bg-white absolute top-0 left-0 z-10">
        <div className="w-full h-[43px] border-b border-[#CCCCCC]" />
      </div>
    ),
  });

  // Quill을 서버에서 import 되지 않게 함
  // 이후 Quill에 FONT_SIZE 정보 입력
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Quill = require("react-quill").Quill;
      var Size = Quill.import("attributors/style/size");
      Size.whitelist = FONT_SIZE;
      Quill.register(Size, true);
    }
  }, []);

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {},
    },
  };

  const onTextChange = (text: string) => {
    onChange(text);
  };

  // 리렌더링 시 기존 작성 중이던 내용 표시
  const initialText = DOMPurify.sanitize(initial);

  return (
    <section className="relative" style={{ width, height }}>
      <EditorToolBar />
      <ReactQuill
        theme="snow"
        // toolbar의 높이 : 43px
        className={`react-quill w-full h-[calc(100%-43px)]`}
        onChange={onTextChange}
        // 기존에 입력된 값을 다시 화면에 출력할 때
        // XSS 공격을 막기 위해 text sanitize
        value={initialText}
        modules={modules}
      />
    </section>
  );
}
