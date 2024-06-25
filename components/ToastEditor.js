import React, { useRef, useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

const ToastEditor = ({ initialValue, onSave }) => {
  const editorRef = useRef(null);
  const [Editor, setEditor] = useState(null);

  useEffect(() => {
    (async () => {
      const { Editor } = await import("@toast-ui/react-editor"); // @toast-ui 모듈에서 Editor를 동적으로 가져옴
      setEditor(() => Editor);
    })();
  }, []);

  // 저장하기
  const handleSave = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getHTML(); // 에디터 인스턴스에서 HTML형식(위지윅)의 내용을 가져옴
      onSave(content);
    }
  };

  return (
    <div>
      {Editor ? (
        <>
          <Editor
            initialValue={initialValue}
            height="600px"
            initialEditType="wysiwyg"
            ref={editorRef}
            toolbarItems={[]} // 툴바를 숨기기 위해 빈 배열로 설정, 여기에 넣을거만 넣기 볼드라든가 기울기라단
            hideModeSwitch={true} // 이거 없으면 사용자가 마크다운으로 바꿀수 있음
          />
          <button className="border-2 border-black p-2" onClick={handleSave}>
            로컬스토리지에 저장
          </button>
        </>
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
};

export default ToastEditor;
