import Profile from "../../_components/Profile";
import { IReply } from "../_types/community_types";
import { ReplyIcon } from "./Icons";

export default function Reply({
  data,
  target,
}: {
  data: IReply;
  target: string;
}) {
  return (
    <div className="w-full flex flex-col gap-2 pl-6">
      <Profile
        profileImg={data.profileImg}
        nickname={data.nickname}
        affiliation={data.affiliation}
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="p-3 bg-gray-0 rounded-lg flex flex-col">
          <span className="text-primary-1 font-semibold leading-[1.375rem]">{`@${target}`}</span>
          <span className="leading-[1.375rem]">{data.content}</span>
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
