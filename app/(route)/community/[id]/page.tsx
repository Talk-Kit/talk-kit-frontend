"use client";

import { useParams } from "next/navigation";
import Card from "../_components/Card";
import {
  DETAIL_PAGE_TEXT,
  DUMMY_CARD_DATA,
  DUMMY_COMMENT_DATA,
} from "../_constants/constants";
import { ICardData, IComment } from "../_types/community_types";
import { useState } from "react";
import Comment from "../_components/Comment";
import Reply from "../_components/Reply";
import CommentInput from "../_components/CommentInput";

export default function DetailPage() {
  const { id }: { id: string } = useParams();
  // id를 통한 api 호출을 통해 얻은 게시물의 데이터로 수정 필요
  const data: ICardData = DUMMY_CARD_DATA[id];

  // id를 통한 api 호출을 통해 얻은 게시글 별 댓글 데이터로 수정 필요
  const [comments, setComments] = useState<IComment[]>(DUMMY_COMMENT_DATA);

  // 댓글/답글에 들어갈 사용자 정보는 이후 실 데이터로 수정 필요
  // 댓글 등록
  const onCommentSubmit = (content: string) => {
    // 임시 id 부여 (백엔드 구축 이후 수정 필요)
    const newId = comments.length;
    const newComment: IComment = {
      id: newId,
      profileImg: "",
      nickname: "사용자1",
      affiliation: "대학생",
      content,
      likes: 0,
      reply: [],
    };
    setComments((prev) => [...prev, newComment]);
  };

  // 답글 등록
  const onReplySubmit = (
    targetId: number,
    targetName: string,
    content: string
  ) => {
    // 답글이 저장될 댓글 필터링
    const [targetComment] = comments.filter((el) => el.id === targetId);
    const targetIndex = comments.findIndex((el) => el.id === targetId);
    // 임시 id 부여 (백엔드 구축 이후 수정 필요)
    const newId = targetComment.reply.length;
    const newReply = {
      id: newId,
      profileImg: "",
      nickname: "사용자1",
      affiliation: "대학생",
      likes: 0,
      content: content,
      targetName: targetName,
    };
    const newComment = {
      ...targetComment,
      reply: [...targetComment.reply, newReply],
    };
    const BeforeTarget = comments.slice(0, targetIndex);
    const AfterTarget = comments.slice(targetIndex + 1);
    const newComments = [...BeforeTarget, newComment, ...AfterTarget];
    setComments(newComments);
  };

  return (
    <div className="full-screen">
      <div className="w-full max-w-[1200px] flex flex-col gap-8 py-8 px-4">
        <Card data={data} isDetail />
        <div className="w-full flex flex-col gap-8 px-4">
          <span>{`${DETAIL_PAGE_TEXT[0]} ${comments.length}`}</span>
          {/* 댓글 입력칸 */}
          <CommentInput onSubmit={onCommentSubmit} />

          {/* 댓글 리스트 */}
          <section className="flex flex-col">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col gap-4 py-6 border-t border-gray-2"
              >
                <Comment data={comment} onSubmit={onReplySubmit} />
                {/* 댓글에 답글이 남겨져 있는 경우 */}
                {comment.reply.length !== 0 &&
                  comment.reply.map((reply) => (
                    <Reply
                      key={reply.id}
                      data={reply}
                      targetId={comment.id}
                      onSubmit={onReplySubmit}
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
