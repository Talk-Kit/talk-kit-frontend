import { useState } from "react";
import DropDown from "../../../_components/DropDown";
import { DUMMY_UPLOAD_DATA } from "../_constants/constants";
import { IUploadDialog } from "../_types/community_types";

export default function UploadDialog({
  onBgClick,
  onCancelClick,
  onUploadClick,
}: IUploadDialog) {
  const [isProjectOpened, setIsProjectOpened] = useState(false);
  const [isFileOpened, setIsFileOpened] = useState(false);
  const [selectedFile, setSelectedFile] = useState({
    project: "",
    file: "",
  });

  return (
    <div
      onClick={onBgClick}
      className="fixed inset-0 flex-center z-50 bg-black bg-opacity-30"
    >
      <div onClick={(e) => e.stopPropagation()} className="dialog-container">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="flex flex-col gap-2 w-full">
            {/* 프로젝트 선택 드롭다운 */}
            <DropDown
              isOpened={isProjectOpened}
              currentValue={selectedFile.project}
              selectionList={DUMMY_UPLOAD_DATA.map((el) => el.name)}
              onDropDownClick={() => setIsProjectOpened((prev) => !prev)}
              onSelectionClick={(select) =>
                setSelectedFile((prev) => ({ ...prev, project: select }))
              }
              placeholder={"프로젝트를 선택해주세요"}
            />
            {/* 파일 선택 드롭다운 */}
            <DropDown
              isOpened={isFileOpened}
              currentValue={selectedFile.file}
              selectionList={
                selectedFile.project &&
                DUMMY_UPLOAD_DATA.filter(
                  (el) => el.name === selectedFile.project
                )[0].files
              }
              onDropDownClick={() => setIsFileOpened((prev) => !prev)}
              onSelectionClick={(select) =>
                setSelectedFile((prev) => ({ ...prev, file: select }))
              }
              placeholder={"파일을 선택해주세요"}
              isDisabled={!selectedFile.project ? true : false}
            />
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex py-0 px-4 items-center gap-4 self-stretch">
          {/* 취소 버튼 */}
          <button
            onClick={onCancelClick}
            className="flex-center px-2 py-3 gap-2 rounded-lg w-full bg-gray-0 border-[1px] border-gray-3"
          >
            <span className="text-gray-3 text-sm font-bold leading-tight">
              취소
            </span>
          </button>

          {/* 저장 버튼 */}
          <button
            onClick={() => onUploadClick(selectedFile.file)}
            className="flex-center px-2 py-3 gap-2 rounded-lg w-full bg-primary-1"
          >
            <span className="text-white font-bold leading-tight">저장</span>
          </button>
        </div>
      </div>
    </div>
  );
}
