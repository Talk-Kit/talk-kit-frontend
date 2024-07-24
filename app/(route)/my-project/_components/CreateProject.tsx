import { FolderIcon } from "../../../components/Icons";
import { DialogProps } from "../_types/project_types";

export function CreateProjectDialog({ onClick, value, onChange }: DialogProps) {
  return (
    <div className="fixed inset-0 flex-center z-50 bg-black bg-opacity-30">
      <div className="dialog-container">
        <div className="flex flex-col items-center gap-4 self-stretch">
          {/* 아이콘 */}
          <div className="flex-center w-24 h-24 p-0">
            <FolderIcon />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col items-start gap-2 self-stretch">
            <span className="self-stretch text-center text-gray-9 font-semibold">
              프로젝트명을 입력해주세요
            </span>
          </div>

          {/* 인풋 */}
          <input
            placeholder="입력란"
            value={value}
            onChange={onChange}
            className="flex h-12 p-4 items-center self-stretch rounded-2xl border-[1px] border-gray-2 placeholder:text-gray-4"
          />
        </div>

        {/* 버튼 */}
        <div className="flex py-0 px-8 items-center self-stretch">
          {/* 기본 버튼 */}
          <button
            onClick={onClick}
            className={`flex-center p-2 gap-2 rounded-lg w-full ${
              value ? "bg-primary-1" : "bg-gray-2"
            } `}
          >
            <span className="text-white text-xl font-bold">생성하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
