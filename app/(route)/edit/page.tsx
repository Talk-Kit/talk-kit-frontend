"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";
import React from "react";

// 에디터 위 헤더에 있는 속성들
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ],
};

// react-quill을 dynamic import로
// react-quill은 브라우저 환경에서만 동작하는 라이브러리이기 때문에
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditPage = () => {
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("editorContent", editorContent);
  };

  const handleLoad = () => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  };

  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <Link href="/">홈으로</Link>
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        modules={modules}
      />
      <div>
        <button onClick={handleSave}>저장</button>
        <button onClick={handleLoad}>불러오기</button>
      </div>
    </div>
  );
};

export default EditPage;
