"use client";

import { useRouter } from "next/navigation";
import {
  CreateProjectFolderIcon,
  ProjectFolderIcon,
  ShowDetailIcon,
} from "./Icons";
import { useState } from "react";

interface MyProjectFolderProps {
  isCreate?: boolean;
  title: string;
  date: any;
}

export default function MyProjectFolder({
  isCreate,
  title,
  date,
}: MyProjectFolderProps) {
  const router = useRouter();

  const [showDetail, setShowDetail] = useState(false);
  return (
    <div
      className="flex-center w-[174px] py-[6px] px-3 flex-col gap-3 cursor-pointer"
      onClick={() => {
        if (isCreate) {
          router.push("/my-project/new-project");
        }
      }}
    >
      <div className="relative h-[150px] self-stretch rounded-lg bg-white">
        {isCreate ? <CreateProjectFolderIcon /> : <ProjectFolderIcon />}
        {!isCreate && (
          <>
            <div
              onClick={() => {
                setShowDetail((prev) => !prev);
              }}
              className="absolute -top-1 right-[6.5px] cursor-pointer"
            >
              <ShowDetailIcon />
            </div>

            {showDetail && <DetailOverlay />}
          </>
        )}
      </div>

      <div className="flex h-[38px] flex-col items-start gap-[6px] self-stretch">
        <div className="flex justify-center items-start gap-1 self-stretch ">
          <span className="overflow-hidden text-center text-ellipsis font-medium">
            {title}
          </span>
        </div>

        <div className="flex-center self-stretch">
          <span className="text-gray-3 text-[10px]">{date}</span>
        </div>
      </div>
    </div>
  );
}

const DetailOverlay = () => {
  return (
    <div className="absolute top-7 right-[6.5px] flex w-28 flex-col items-start rounded-lg bg-white shadow-2xl">
      <div
        className="flex-center h-8 py-2 px-3 self-stretch bg-white rounded-t-lg text-xs border-b-[1px] border-gray-2
      "
        onClick={() => {
          console.log("이름 바꾸기");
        }}
      >
        이름 바꾸기
      </div>

      <div
        className="flex-center h-8 py-2 px-3 self-stretch bg-white rounded-lg text-xs"
        onClick={() => {
          console.log("삭제");
        }}
      >
        삭제
      </div>
    </div>
  );
};
