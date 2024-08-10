import { useState } from "react";
import { CommentsIcon, PrivateIcon } from "./Icons";
import { CARD_TEXT, REPORT_PLACEHOLDER } from "../_constants/constants";
import { useCalculateDate } from "../../../_hooks/useCalculateDate";
import { ICard } from "../_types/community_types";
import { useRouter } from "next/navigation";
import Profile from "../../_components/Profile";
import LikeButton from "./LikeButton";
import { Dialog } from "../../../_components/Dialog";
import PrivateDialog from "./PrivateDialog";

export default function Card({ data, isDetail }: ICard) {
  const router = useRouter();

  const [showMore, setShowMore] = useState(isDetail || false);
  const [isReported, setIsReported] = useState(false);

  // 게시글 게시 이후의 시간 계산
  const difference = useCalculateDate(data.date);

  // 비공개 게시글 관련
  const [isPrivateClicked, setIsPrivateClicked] = useState(false);
  const onPrivateClick = (password: string) => {
    if (password === data.password) {
      router.push(`community/${data.id}`);
    } else {
      alert("잘못된 비밀번호입니다.");
      setIsPrivateClicked((prev) => !prev);
    }
  };

  return (
    <div
      className={`w-full px-3 py-6 flex flex-col gap-6 border-gray-2 ${
        isDetail ? "border-b" : "border-t"
      }`}
    >
      <section className="flex flex-col gap-6">
        <Profile
          profileImg={data.profileImg}
          nickname={data.nickname}
          affiliation={data.affiliation}
        />
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-4">{difference}</span>
          <div className="flex items-center gap-3">
            <span className="font-semibold">{data.title}</span>
            {data.isPrivate && !isDetail && <PrivateIcon />}
          </div>
        </div>
        <div>
          <p
            // 2줄이 넘어갈 경우 텍스트 숨김 (line-height:1.5rem * 2줄)
            className={`leading-6 ${
              !showMore && "max-h-[calc(2*1.5rem)] overflow-hidden"
            }`}
          >
            {data.isPrivate && !isDetail ? CARD_TEXT[5] : data.content}
          </p>
          {!showMore && !data.isPrivate && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-gray-4 font-medium leading-6"
            >
              {CARD_TEXT[0]}
            </button>
          )}
        </div>
      </section>
      <section className="flex gap-4">
        <div className="likes-comments text-xs">
          <span className="font-semibold text-gray-4">{CARD_TEXT[1]}</span>
          <span className="text-gray-4">{data.likes}</span>
        </div>
        <div className="likes-comments text-xs">
          <span className="font-semibold text-gray-4">{CARD_TEXT[2]}</span>
          <span className="text-gray-4">{data.comments}</span>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex gap-4 items-center">
          <LikeButton />
          {!isDetail && (
            <button
              onClick={() => {
                if (!data.isPrivate) {
                  router.push(`community/${data.id}`);
                } else {
                  setIsPrivateClicked((prev) => !prev);
                }
              }}
              className="likes-comments text-sm font-bold"
            >
              <CommentsIcon />
              <span className="text-gray-4">{CARD_TEXT[3]}</span>
            </button>
          )}
        </div>
        <button
          onClick={() => setIsReported((prev) => !prev)}
          className="text-sm text-gray-4"
        >
          {CARD_TEXT[4]}
        </button>
      </section>
      {/* 신고 다이얼로그 */}
      {isReported && (
        <Dialog
          topText={REPORT_PLACEHOLDER[0]}
          isWarn
          isReport
          onBtnClick={(reason: string) => {
            // 신고 처리 로직 수정 필요
            const newReport = { postId: data.id, reason: reason };
            console.log(newReport);
            setIsReported((prev) => !prev);
          }}
          onBgClick={() => {
            setIsReported((prev) => !prev);
          }}
          btnText={REPORT_PLACEHOLDER[2]}
        />
      )}

      {/* 비공개 게시글 다이얼로그 */}
      {isPrivateClicked && (
        <PrivateDialog
          onBgClick={() => setIsPrivateClicked((prev) => !prev)}
          onBtnClick={onPrivateClick}
        />
      )}
    </div>
  );
}
