import Profile from "../../_components/Profile";
import { CARD_TEXT } from "../_constants/constants";
import { IComment } from "../_types/community_types";
import { ReplyIcon } from "./Icons";
import LikeButton from "./LikeButton";

export default function Comment({ data }: { data: IComment }) {
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
          <button className="flex gap-2 items-center">
            <ReplyIcon />
            <span className="text-sm text-gray-4">답글 남기기</span>
          </button>
          <button className="text-sm text-gray-4">댓글 신고</button>
        </div>
      </div>
    </div>
  );
}
