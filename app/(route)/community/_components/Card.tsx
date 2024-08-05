import { useState } from "react";
import { CommentsIcon, LikesIcon } from "./Icons";
import { CARD_TEXT, COMMUNITY_TEXT } from "../_constants/constants";
import { useCalculateDate } from "../../../_hooks/useCalculateDate";
import { ICard } from "../_types/community_types";
import { useRouter } from "next/navigation";
import Profile from "../../_components/Profile";
import LikeButton from "./LikeButton";

export default function Card({ data, isDetail }: ICard) {
  const [showMore, setShowMore] = useState(isDetail || false);

  const difference = useCalculateDate(data.date);

  const router = useRouter();
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
              onClick={() => router.push(`community/${data.id}`)}
              className="likes-comments text-sm font-bold"
            >
              <CommentsIcon />
              <span className="text-gray-4">{CARD_TEXT[3]}</span>
            </button>
          )}
        </div>
        <button onClick={() => {}} className="text-sm text-gray-4">
          {CARD_TEXT[4]}
        </button>
      </section>
    </div>
  );
}
