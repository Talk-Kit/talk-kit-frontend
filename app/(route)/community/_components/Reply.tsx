import { useState } from "react";
import { Dialog } from "../../../_components/Dialog";
import Profile from "../../_components/Profile";
import { IReply } from "../_types/community_types";
import { ReplyIcon } from "./Icons";
import { COMMENT_TEXT, REPORT_PLACEHOLDER } from "../_constants/constants";
import CommentInput from "./CommentInput";

export default function Reply({
  data,
  targetId,
  onSubmit,
}: {
  data: IReply;
  targetId: number;
  onSubmit: (targetId: number, targetName: string, content: string) => void;
}) {
  const [isReported, setIsReported] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2 pl-6">
      <Profile
        profileImg={data.profileImg}
        nickname={data.nickname}
        affiliation={data.affiliation}
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="p-3 bg-gray-0 rounded-lg flex flex-col">
          <span className="text-primary-1 font-semibold leading-[1.375rem]">{`@${data.targetName}`}</span>
          <span className="leading-[1.375rem]">{data.content}</span>
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
            const newReport = { replyId: data.id, reason: reason };
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
            onSubmit(targetId, data.nickname, content);
            setIsReplying((prev) => !prev);
          }}
        />
      )}
    </div>
  );
}
