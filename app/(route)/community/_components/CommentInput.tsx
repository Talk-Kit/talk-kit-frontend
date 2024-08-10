import { useForm } from "react-hook-form";
import { DETAIL_PAGE_TEXT } from "../_constants/constants";
import { ICommentInput } from "../_types/community_types";
import { useRef } from "react";

export default function CommentInput({ target, onSubmit }: ICommentInput) {
  const ref = useRef<HTMLTextAreaElement>(null);
  // textarea 높이 자동 조절용 함수
  const handleHeight = () => {
    const textarea = ref.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const { register, handleSubmit, setValue } = useForm();
  const onsubmit = ({ content }: { content: string }) => {
    if (content === "") {
      alert("내용을 입력해주세요");
    } else {
      onSubmit(content);
      setValue("content", "");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="w-full py-3 px-4 border border-gray-2 rounded-lg flex flex-col gap-2"
    >
      <div className="flex w-full gap-4">
        {/* 프로필 이미지로 대체 필요 */}
        <div className="shrink-0 w-[36px] h-[36px] rounded-full bg-gray-2" />
        <div className="grow h-fit mt-[7px]">
          {/* 답글일 경우 target 표시 */}
          {target && (
            <span className="text-primary-1 font-semibold leading-[1.375rem]">{`@${target}`}</span>
          )}
          <textarea
            {...register("content")}
            // register와 ref의 충돌로 인해
            // form 데이터에 text값이 넘어가지 않는 오류 방지
            ref={(e) => {
              ref.current = e;
              register("content").ref(e);
            }}
            rows={1}
            onChange={handleHeight}
            className="w-full max-h-[4.125rem] outline-none resize-none leading-[1.375rem]"
            placeholder={DETAIL_PAGE_TEXT[1]}
          />
        </div>
      </div>
      <button type="submit" className="short-button self-end">
        {DETAIL_PAGE_TEXT[2]}
      </button>
    </form>
  );
}
