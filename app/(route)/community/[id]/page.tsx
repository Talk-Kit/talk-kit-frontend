"use client";

import { useParams } from "next/navigation";
import Card from "../_components/Card";
import {
  DETAIL_PAGE_TEXT,
  DUMMY_CARD_DATA,
  DUMMY_COMMENT_DATA,
} from "../_constants/constants";
import { ICardData, IComment } from "../_types/community_types";
import { useRef } from "react";
import Comment from "../_components/Comment";
import Reply from "../_components/Reply";
import { useForm } from "react-hook-form";

export default function DetailPage() {
  const { id }: { id: string } = useParams();
  // id를 통한 api 호출을 통해 얻은 게시물의 데이터로 수정 필요
  const data: ICardData = DUMMY_CARD_DATA[id];

  // id를 통한 api 호출을 통해 얻은 게시글 별 댓글 데이터로 수정 필요
  const comments: IComment[] = DUMMY_COMMENT_DATA;

  const ref = useRef<HTMLTextAreaElement>(null);
  // textarea 높이 자동 조절용 함수
  const handleHeight = () => {
    const textarea = ref.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };
  const { register, handleSubmit } = useForm();
  const onsubmit = ({ text }: { text: string }) => {
    console.log(text);
  };
  return (
    <div className="full-screen">
      <div className="w-full max-w-[1200px] flex flex-col gap-8 py-8 px-4">
        <Card data={data} isDetail />
        <div className="w-full flex flex-col gap-8 px-4">
          <span>{`${DETAIL_PAGE_TEXT[0]} ${data.comments}`}</span>
          {/* 댓글 입력칸 */}
          <form
            {...register("text")}
            onSubmit={handleSubmit(onsubmit)}
            className="w-full py-3 px-4 border border-gray-2 rounded-lg flex flex-col gap-2"
          >
            <div className="flex w-full gap-4">
              {/* 프로필 이미지로 대체 필요 */}
              <div className="w-[36px] h-[36px] rounded-full bg-gray-2" />
              <div className="grow h-fit mt-[7px]">
                <textarea
                  ref={ref}
                  rows={1}
                  onChange={handleHeight}
                  className="w-full max-h-[4.5rem] outline-none resize-none leading-[1.375rem]"
                  placeholder={DETAIL_PAGE_TEXT[1]}
                />
              </div>
            </div>
            <button type="submit" className="short-button self-end">
              {DETAIL_PAGE_TEXT[2]}
            </button>
          </form>
          {/* 댓글 리스트 */}
          <section className="flex flex-col">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col gap-4 py-6 border-t border-gray-2"
              >
                <Comment data={comment} />
                {/* 댓글에 답글이 남겨져 있는 경우 */}
                {comment.reply.length !== 0 &&
                  comment.reply.map((reply) => (
                    <Reply
                      key={reply.id}
                      data={reply}
                      target={comment.nickname}
                    />
                  ))}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
