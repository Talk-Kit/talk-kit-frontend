import { useState, useEffect } from "react";
import ToastEditor from "../components/ToastEditor";
import Link from "next/link";

const EditPage = () => {
  const [initialValue, setInitialValue] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setInitialValue(savedContent);
    }
  }, []);

  const handleSave = (content) => {
    localStorage.setItem("editorContent", content);
  };

  return (
    <div>
      <Link href="/">홈으로</Link>
      <ToastEditor initialValue={initialValue} onSave={handleSave} />
    </div>
  );
};

export default EditPage;
