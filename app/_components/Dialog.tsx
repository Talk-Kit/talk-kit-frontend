import { useState } from "react";
import { DialogProps } from "../_types/types";
import DropDown from "./DropDown";
import { DialogCheckIcon, DialogWarnIcon } from "./Icons";
import { DIALOG_PLACEHOLDER, REPORT_REASON } from "../_constants/constants";

export function Dialog({
  isWarn,
  topText,
  bottomText,
  btnText,
  onBtnClick,
  onBgClick,

  isTwoButton,
  subBtnText,
  onSubBtnClick,

  isReport,
}: DialogProps) {
  const [currentValue, setCurrentValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      onClick={onBgClick}
      className="fixed inset-0 flex-center z-50 bg-black bg-opacity-30"
    >
      <div onClick={(e) => e.stopPropagation()} className="dialog-container">
        <div className="flex flex-col items-center gap-4 self-stretch">
          {/* 아이콘 */}
          {isWarn ? <DialogWarnIcon /> : <DialogCheckIcon />}

          <div className="flex flex-col gap-2">
            {/* 텍스트 */}
            <div className="flex py-0 px-4 flex-col items-start gap-2 self-stretch">
              <span className="self-stretch text-center text-xl font-semibold">
                {topText}
              </span>
              {bottomText && (
                <span className="self-stretch text-center">{bottomText}</span>
              )}
            </div>

            {/* 신고 사유 선택 드롭다운 */}
            {isReport && (
              <DropDown
                isOpened={isOpened}
                currentValue={currentValue}
                selectionList={REPORT_REASON}
                onDropDownClick={() => setIsOpened((prev) => !prev)}
                onSelectionClick={(select) => setCurrentValue(select)}
                placeholder={DIALOG_PLACEHOLDER[0]}
              />
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex py-0 px-4 items-center gap-4 self-stretch">
          {/* 버튼 2개일 때 나오는 왼쪽 버튼 */}
          {isTwoButton && (
            <button
              onClick={onSubBtnClick}
              className={`flex-center px-2 py-3 gap-2 rounded-lg w-full bg-gray-0 border-[1px] border-gray-3`}
            >
              <span className="text-gray-3 text-sm font-bold leading-tight">
                {subBtnText}
              </span>
            </button>
          )}

          {/* 기본 버튼 */}
          <button
            onClick={
              isReport ? () => onBtnClick(currentValue) : () => onBtnClick()
            }
            className={`flex-center px-2 py-3 gap-2 rounded-lg w-full ${
              isWarn ? "bg-red-1" : "bg-primary-1"
            } `}
          >
            <span className="text-white font-bold leading-tight">
              {btnText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
