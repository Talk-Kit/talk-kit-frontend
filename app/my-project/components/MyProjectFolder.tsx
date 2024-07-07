import {
  CreateProjectFolderIcon,
  ProjectFolderIcon,
  ShowDetailIcon,
} from "./Icons";

export default function MyProjectFolder() {
  return (
    <div className="flex-center py-[6px] px-3 flex-col gap-3 w-auto cursor-pointer">
      <div className="relative h-[150px] self-stretch rounded-lg bg-white">
        <ProjectFolderIcon />
        <div className="absolute -top-1 right-[6.5px] cursor-pointer">
          <ShowDetailIcon />
        </div>
      </div>

      <div className="flex h-[38px] flex-col items-start gap-[6px] self-stretch">
        <div className="flex justify-center items-start gap-1 self-stretch ">
          <span className="overflow-hidden text-center text-ellipsis font-medium">
            프로젝트명
          </span>
        </div>

        <div className="flex-center self-stretch">
          <span className="text-gray-3 text-[10px]">마지막 수정 일자</span>
        </div>
      </div>
    </div>
  );
}

export const CreateFolder = () => {
  return (
    <div className="flex-center py-[6px] px-3 flex-col gap-3 w-auto cursor-pointer">
      <div className="relative h-[150px] self-stretch rounded-lg bg-white">
        <CreateProjectFolderIcon />
      </div>

      <div className="flex h-[38px] flex-col items-start gap-[6px] self-stretch">
        <div className="flex justify-center items-start gap-1 self-stretch ">
          <span className="overflow-hidden text-center text-ellipsis font-medium">
            {""}
          </span>
        </div>

        <div className="flex-center self-stretch">
          <span className="text-gray-3 text-[10px]">{""}</span>
        </div>
      </div>
    </div>
  );
};
