// 이후 다른 곳에서 사용하게 되면 상위 _components 폴더로 옮겨주세요

import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import EditorToolBar from "./EditorToolBar";
import { FONT_SIZE } from "../_constants/constants";
import React, { useEffect } from "react";

// props에 들어가는 onChange 함수는 사용할 페이지에서 useCallBack으로 감싸주어야
// state의 변화가 일어나도 리렌더링 되지 않아요! (new-post의 handleContentChange 함수 참고 바람)

// React.memo를 이용하여 state 변화 시 컴포넌트 리렌더링 방지
const TextEditor = React.memo(
  ({
    width,
    height,
    onChange,
  }: {
    width: string;
    height: string;
    onChange: (text: string) => void;
  }) => {
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

    return (
      <section className="relative" style={{ width, height }}>
        <EditorToolBar />
        <ReactQuill
          theme="snow"
          // toolbar의 높이 : 43px
          className={`react-quill w-full h-[calc(100%-43px)]`}
          onChange={onTextChange}
          modules={modules}
        />
      </section>
    );
  }
);

export default TextEditor;
