import { CommentsIcon, LikesIcon } from "../../_components/Icons";

interface IPostCard {
  rank: number;
  profileImg: string;
  nickname: string;
  tag: string;
  title: string;
  content: string;
  thumbnail: string;
  likes: number;
  comments: number;
}

export default function PostCard({
  rank,
  profileImg,
  nickname,
  tag,
  title,
  content,
  thumbnail,
  likes,
  comments,
}: IPostCard) {
  return (
    <div className="w-full px-3 py-5 flex gap-6">
      <div>
        <span className="px-2 border-b leading-9 block border-gray-2">
          {rank}
        </span>
      </div>
      <div className="flex flex-col gap-6 grow overflow-hidden">
        <div className="flex grow gap-6 items-center justify-between overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 rounded-full bg-gray-3">
                {/* profileImg로 대체 */}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{nickname}</span>
                <span className="text-xs font-medium text-gray-4">{tag}</span>
              </div>
            </div>
            <div className="flex flex-col gap-[.34rem] overflow-hidden">
              <span className="font-semibold">{title}</span>
              <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {content}
              </span>
            </div>
          </div>
          <div className="w-[100px] h-[100px] shrink-0 bg-gray-3" />
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center">
            <LikesIcon />
            <span className="text-gray-4 text-xs">{likes}</span>
          </div>
          <div className="flex gap-1">
            <CommentsIcon />
            <span className="text-gray-4 text-xs">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
