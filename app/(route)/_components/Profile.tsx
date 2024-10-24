import { IProfile } from "../_types/types";

export default function Profile({
  profileImg,
  nickname,
  affiliation,
}: IProfile) {
  return (
    <div className="flex gap-3">
      {/* 프로필 이미지로 대체 필요 */}
      <div className="w-[36px] h-[36px] rounded-full bg-gray-2 shrink-0" />

      <div className="flex flex-col justify-center">
        <span className="text-sm font-semibold">{nickname}</span>
        <span className="text-xs font-medium text-gray-4">{affiliation}</span>
      </div>
    </div>
  );
}
