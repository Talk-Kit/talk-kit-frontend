// 이후 다른 곳에서 사용하게 되면 상위 _components 폴더로 옮겨주세요

import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

export default function TextEditor({
  initial,
  onChange,
}: {
  initial: string;
  onChange: (text: string) => void;
}) {
  // ReactQuill을 dynamic을 이용하여 서버에서
  // import 되지 않고 브라우저 내에서만 실행되도록 함
  const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
    // 로딩 중에도 기본 레이아웃 제공으로 사용자가 변화를 최소한으로 느끼게 함
    loading: () => (
      <div className="w-full h-full border border-[#CCCCCC]">
        <div className="w-full h-[42.5px] border-b border-[#CCCCCC]"></div>
      </div>
    ),
  });

  const onTextChange = (text: string) => {
    onChange(text);
  };

  const initialText = DOMPurify.sanitize(initial);

  return (
    <ReactQuill
      theme="snow"
      // toolbar의 높이 : 43px
      className="w-full h-[calc(500px-43px)]"
      onChange={onTextChange}
      // 기존에 입력된 값을 다시 화면에 출력할 때
      // XSS 공격을 막기 위해 text sanitize
      value={initialText}
    />
  );
}
