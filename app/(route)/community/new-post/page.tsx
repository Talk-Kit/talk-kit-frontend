"use client";

import { useEffect, useState } from "react";
import { CheckBox } from "../../sign-up/_components/Icons";
import BoardSelection from "../_components/BoardSelection";
import { RemoveIcon, UploadIcon } from "../_components/Icons";
import UploadDialog from "../_components/UploadDialog";
import { NEW_POST_TEXT } from "../_constants/constants";
import { useForm } from "react-hook-form";
import { IFormData } from "../_types/community_types";

export default function NewPost() {
  // 게시글 관련
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  // 공개 범위 설정
  const [checkBox, setCheckBox] = useState({
    isPublic: true,
    isPrivate: false,
  });

  // 파일 업로드 관련
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const onUpload = (select: string) => {
    // 동일한 파일명은 존재할 수 있기 때문에 이후 파일명이 아닌 식별자로 수정 필요
    if (uploadedFiles.indexOf(select) === -1) {
      setUploadedFiles((prev) => [...prev, select]);
      setIsUploadOpen((prev) => !prev);
    } else {
      alert("이미 업로드된 파일입니다");
    }
  };
  const removeFile = (target: string) => {
    const targetIndex = uploadedFiles.indexOf(target);
    const beforeTarget = uploadedFiles.slice(0, targetIndex);
    const afterTarget = uploadedFiles.slice(targetIndex + 1);
    const newFiles = [...beforeTarget, ...afterTarget];
    setUploadedFiles(newFiles);
  };

  // 업로드된 파일의 변화가 생길 시 Form 데이터 갱신
  useEffect(() => {
    setValue("files", uploadedFiles);
  }, [uploadedFiles]);

  return (
    <div className="full-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1200px] px-4 py-[60px] flex flex-col gap-8"
      >
        <section className="flex flex-col gap-8">
          <input
            {...register("title")}
            className="w-full px-4 py-3 border-b border-gray-2 outline-none font-semibold"
            placeholder={NEW_POST_TEXT[0]}
          />
          <div className="flex gap-6 px-2">
            <button
              onClick={() =>
                setCheckBox(() => ({ isPublic: true, isPrivate: false }))
              }
              className="check-button"
            >
              <CheckBox isChecked={checkBox.isPublic} />
              <span className={`${!checkBox.isPublic && "text-gray-4"}`}>
                {NEW_POST_TEXT[1]}
              </span>
            </button>
            <button
              onClick={() =>
                setCheckBox(() => ({ isPublic: false, isPrivate: true }))
              }
              className="check-button"
            >
              <CheckBox isChecked={checkBox.isPrivate} />
              <span className={`${!checkBox.isPrivate && "text-gray-4"}`}>
                {NEW_POST_TEXT[2]}
              </span>
            </button>
          </div>
          <BoardSelection />
        </section>
        <section>{/* react-quill */}</section>
        <section className="flex flex-col p-4 border border-gray-2 border-dotted rounded-lg gap-8">
          <div className="flex flex-col gap-[18px] w-full items-center">
            <UploadIcon />
            <span className="font-medium text-gray-4">{NEW_POST_TEXT[3]}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsUploadOpen((prev) => !prev);
              }}
              className="px-6 py-3 bg-[#9095FF] text-white rounded-lg font-semibold text-sm"
            >
              {NEW_POST_TEXT[4]}
            </button>
          </div>
          {isUploadOpen && (
            <UploadDialog
              onBgClick={() => setIsUploadOpen((prev) => !prev)}
              onCancelClick={() => setIsUploadOpen((prev) => !prev)}
              onUploadClick={(select) => onUpload(select)}
            />
          )}
          {uploadedFiles && (
            <div className="w-full flex flex-col gap-4">
              {uploadedFiles.map((el, index) => (
                <div
                  key={index}
                  className="w-full bg-primary-0 px-4 py-3 text-sm text-gray-4 rounded-lg flex justify-between items-center"
                >
                  <span>{el}</span>
                  <button
                    onClick={() => removeFile(el)}
                    className="w-4 h-4 rounded-full bg-gray-4 flex justify-center items-center"
                  >
                    <RemoveIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="flex justify-end">
          <button className="short-button" type="submit">
            등록
          </button>
        </section>
      </form>
    </div>
  );
}