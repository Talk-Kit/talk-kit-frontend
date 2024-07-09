import { DialogCheckIcon, DialogWarnIcon } from "./Icons";

interface DialogProps {
  isWarn?: boolean;
  topText: string;
  bottomText: string;
  btnText: string;
  onBtnClick: () => void;

  isTwoButton?: boolean;
  subBtnText?: string;
  onSubBtnClick?: () => void;
}

export default function Dialog({
  isWarn,
  topText,
  bottomText,
  btnText,
  onBtnClick,

  isTwoButton,
  subBtnText,
  onSubBtnClick,
}: DialogProps) {
  return (
    <div className="fixed inset-0 flex-center z-50 bg-black bg-opacity-30">
      <div className="flex w-[300px] py-6 px-0 flex-col items-start gap-8 rounded-2xl bg-white shadow-xl">
        <div className="flex flex-col items-center gap-4 self-stretch">
          {/* 아이콘 */}
          <div className="flex-center w-20 h-20 p-[10px]">
            {isWarn ? <DialogWarnIcon /> : <DialogCheckIcon />}
          </div>

          {/* 텍스트 */}
          <div className="flex py-0 px-4 flex-col items-start gap-2 self-stretch">
            <span className="self-stretch text-center text-xl font-semibold">
              {topText}
            </span>
            <span className="self-stretch text-center">{bottomText}</span>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex py-0 px-8 items-center gap-4 self-stretch">
          {/* 버튼 2개일 때 나오는 왼쪽 버튼 */}
          {isTwoButton && (
            <button
              onClick={onSubBtnClick}
              className={`flex-center p-2 gap-2 rounded-lg w-full bg-gray-0 border-[1px] border-gray-3`}
            >
              <span className="text-gray-3 text-sm font-bold">
                {subBtnText}
              </span>
            </button>
          )}

          {/* 기본 버튼 */}
          <button
            onClick={onBtnClick}
            className={`flex-center p-2 gap-2 rounded-lg w-full ${
              isWarn ? "bg-red-1" : "bg-primary-1"
            } `}
          >
            <span className="text-white text-sm font-bold">{btnText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
