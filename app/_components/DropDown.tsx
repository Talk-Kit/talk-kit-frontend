import { useOutsideClick } from "../_hooks/useOutsideClick";
import { IDropDown } from "../_types/types";
import { DownLightArrow } from "./Icons";

export default function DropDown({
  placeholder,
  currentValue,
  selectionList,
  isOpened,
  onDropDownClick,
  onSelectionClick,
  isDisabled,
}: IDropDown) {
  // 영역 밖이 클릭되었을 때 메뉴 닫기
  const ref = useOutsideClick(() => isOpened && onDropDownClick());

  return (
    <div
      ref={ref}
      onClick={!isDisabled ? onDropDownClick : () => {}}
      className={`relative w-full h-[50px] border border-gray-3 rounded-lg flex items-center px-4 ${
        isDisabled ? "bg-gray-1" : "bg-white cursor-pointer"
      }`}
    >
      <div className={`grow text-gray-3 ${currentValue && "text-gray-9"}`}>
        {currentValue || placeholder}
      </div>
      {!isOpened ? (
        <DownLightArrow />
      ) : (
        <span className="rotate-180">
          <DownLightArrow />
        </span>
      )}
      {isOpened && (
        <div className="absolute top-[calc(100%+4px)] -left-[1px] w-[calc(100%+2px)] bg-white rounded-lg flex flex-col dropdown-shadow overflow-hidden z-10">
          {selectionList.map((el, index) => (
            <span
              key={index}
              onClick={() => {
                onSelectionClick(el);
              }}
              className="text-sm py-[6px] px-6 w-full hover:bg-gray-1"
            >
              {el}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
