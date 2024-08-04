import { useState } from "react";
import { CommentsIcon, LikesIcon } from "./Icons";
import { COMMUNITY_TEXT, ICardData } from "../_constants/constants";
import { useCalculateDate } from "../../../_hooks/useCalculateDate";

export default function Card({ data }: { data: ICardData }) {
  const [showMore, setShowMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const difference = useCalculateDate(data.date);
  return (
    <div className="w-full px-3 py-6 flex flex-col gap-6 border-t border-gray-2">
      <section className="flex flex-col gap-6">
        <div className="flex gap-3">
          <div className="w-[36px] h-[36px] rounded-full bg-gray-2" />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold">{data.nickname}</span>
            <span className="text-xs font-medium text-gray-4">
              {data.affiliation}
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-4">{difference}</span>
          <span className="font-semibold">{data.title}</span>
        </div>
        <div>
          <p
            // 2줄이 넘어갈 경우 텍스트 숨김 (line-height:1.5rem * 2줄)
            className={`leading-6 ${
              !showMore && "max-h-[calc(2*1.5rem)] overflow-hidden"
            }`}
          >
            {data.content}
          </p>
          {!showMore && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-gray-4 font-medium leading-6"
            >
              {COMMUNITY_TEXT[2]}
            </button>
          )}
        </div>
      </section>
      <section className="flex gap-4">
        <div className="likes-comments text-xs">
          <span className="font-semibold text-gray-4">{COMMUNITY_TEXT[3]}</span>
          <span className="text-gray-4">{data.likes}</span>
        </div>
        <div className="likes-comments text-xs">
          <span className="font-semibold text-gray-4">{COMMUNITY_TEXT[4]}</span>
          <span className="text-gray-4">{data.comments}</span>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              setIsLiked((prev) => !prev);
            }}
            className="likes-comments text-sm font-bold"
          >
            <LikesIcon isLiked={isLiked} />
            <span className={`${isLiked ? "text-primary-1" : "text-gray-4"}`}>
              {COMMUNITY_TEXT[3]}
            </span>
          </button>
          <button
            onClick={() => {}}
            className="likes-comments text-sm font-bold"
          >
            <CommentsIcon />
            <span className="text-gray-4">{COMMUNITY_TEXT[5]}</span>
          </button>
        </div>
        <button onClick={() => {}} className="text-sm text-gray-4">
          {COMMUNITY_TEXT[6]}
        </button>
      </section>
    </div>
  );
}
