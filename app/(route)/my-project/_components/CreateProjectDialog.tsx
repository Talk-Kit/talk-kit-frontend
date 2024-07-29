import Button from "../../../_components/Button";
import { FolderIcon } from "../../../_components/Icons";
import { DIALOG_TEXT } from "../_constants/constants";
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
              {DIALOG_TEXT[0]}
            </span>
          </div>

          {/* 인풋 */}
          <input
            placeholder={DIALOG_TEXT[1]}
            value={value}
            onChange={onChange}
            className="flex h-12 p-4 items-center self-stretch rounded-2xl border-[1px] border-gray-2 placeholder:text-gray-4"
          />
        </div>

        {/* 버튼 */}
        <div className="flex-center py-0 px-8 self-stretch">
          {/* 기본 버튼 */}

          <Button onClick={onClick} text={DIALOG_TEXT[2]} isActive={!value} />
        </div>
      </div>
    </div>
  );
}
