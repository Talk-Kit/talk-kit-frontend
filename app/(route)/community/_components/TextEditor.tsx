// 이후 다른 곳에서 사용하게 되면 상위 _components 폴더로 옮겨주세요

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import EditorToolBar from "./EditorToolBar";
import { DUMMY_IMG_URL, FONT_SIZE } from "../_constants/constants";
import React, { useEffect, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import { ForwardedQuillComponent } from "../_types/community_types";

// props에 들어가는 onChange 함수는 사용할 페이지에서 useCallBack으로 감싸주어야
// state의 변화가 일어나도 리렌더링 되지 않아요! (new-post의 handleContentChange 함수 참고 바람)

// React.memo를 이용하여 state 변화 시 컴포넌트 리렌더링 방지
const TextEditor = React.memo(
  ({
    width,
    height,
    onChange,
    defaultValue,
  }: {
    width: string;
    height: string;
    onChange: (text: string) => void;
    defaultValue?: string;
  }) => {
    // ReactQuill을 dynamic을 이용하여 서버에서
    // import 되지 않고 브라우저 내에서만 실행되도록 함
    const ReactQuill = dynamic(
      async () => {
        const { default: QuillComponent } = await import("react-quill");
        // dynamic import된 컴포넌트에 ref를 설정하기 위한 작업
        const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
          <QuillComponent ref={forwardedRef} {...props} />
        );
        return Quill;
      },
      {
        ssr: false,
        // 로딩 중에도 기본 레이아웃 제공으로 사용자가 변화를 최소한으로 느끼게 함
        // 또한 absolute로 <EditorToolBar />의 초기 렌더링 중 생기는 레이아웃 오류를 가림
        loading: () => (
          <div className="w-full h-full border border-[#CCCCCC] bg-white absolute top-0 left-0 z-10">
            <div className="w-full h-[43px] border-b border-[#CCCCCC]" />
          </div>
        ),
      }
    );

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

    const ref = useRef<ReactQuill>();

    const imageHandler = () => {
      const input = document.createElement("input");

      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      // 파일이 선택되었을 때를 감지
      input.addEventListener("change", async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("img", file);
        // 이후 스토리지에 이미지 저장 후 url 반환
        try {
          // const result = await axios.post("", formData)
          // const IMG_URL = result.data.url

          // 백에서 받아 온 url을 통해 현재 커서 위치에 이미지 삽입
          const editor = ref.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", DUMMY_IMG_URL);
          // 이미지 삽입 후 커서 이미지 아래 줄로 이동
          editor.setSelection({ index: range.index + 1, length: 0 });
          editor.insertText(range.index + 1, "\n");
          editor.setSelection({ index: range.index + 2, length: 0 });
        } catch (err) {
          console.log("이미지 업로드 실패");
        }
      });
    };

    const modules = useMemo(
      () => ({
        toolbar: {
          container: "#toolbar",
          handlers: {
            image: imageHandler,
          },
        },
      }),
      []
    );

    const onTextChange = (text: string) => {
      onChange(text);
    };

    return (
      <section className="relative" style={{ width, height }}>
        <EditorToolBar />
        <ReactQuill
          forwardedRef={ref}
          theme="snow"
          // toolbar의 높이 : 43px
          className={`react-quill w-full h-[calc(100%-43px)] bg-white`}
          onChange={onTextChange}
          modules={modules}
          defaultValue={defaultValue}
        />
      </section>
    );
  }
);

export default TextEditor;
