import { useState } from "react";
import Profile from "../../_components/Profile";
import {
  CARD_TEXT,
  COMMENT_TEXT,
  REPORT_PLACEHOLDER,
} from "../_constants/constants";
import { IComment } from "../_types/community_types";
import { ReplyIcon } from "./Icons";
import LikeButton from "./LikeButton";
import { Dialog } from "../../../_components/Dialog";
import CommentInput from "./CommentInput";

export default function Comment({
  data,
  onSubmit,
}: {
  data: IComment;
  onSubmit: (targetId: number, targetName: string, content: string) => void;
}) {
  const [isReported, setIsReported] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2">
      <Profile
        profileImg={data.profileImg}
        nickname={data.nickname}
        affiliation={data.affiliation}
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="self-end flex gap-6">
          <span className="text-sm text-gray-4">{`${CARD_TEXT[1]} ${data.likes}`}</span>
          <LikeButton />
        </div>
        <div className="p-3 bg-gray-0 rounded-lg leading-[1.375rem]">
          {data.content}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsReplying((prev) => !prev)}
            className="flex gap-2 items-center"
          >
            <ReplyIcon />
            <span className="text-sm text-gray-4">{COMMENT_TEXT[0]}</span>
          </button>
          <button
            onClick={() => setIsReported((prev) => !prev)}
            className="text-sm text-gray-4"
          >
            {COMMENT_TEXT[1]}
          </button>
        </div>
      </div>
      {isReported && (
        <Dialog
          topText={REPORT_PLACEHOLDER[1]}
          isWarn
          isReport
          onBtnClick={(reason: string) => {
            // 신고 처리 로직 수정 필요
            const newReport = { commentId: data.id, reason: reason };
            console.log(newReport);
            setIsReported((prev) => !prev);
          }}
          onBgClick={() => {
            setIsReported((prev) => !prev);
          }}
          btnText={REPORT_PLACEHOLDER[2]}
        />
      )}
      {isReplying && (
        <CommentInput
          target={data.nickname}
          onSubmit={(content) => {
            onSubmit(data.id, data.nickname, content);
            setIsReplying((prev) => !prev);
          }}
        />
      )}
    </div>
  );
}
