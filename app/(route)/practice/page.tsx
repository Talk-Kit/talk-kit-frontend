"use client";

import { useState } from "react";
import { CheckBox } from "../sign-up/_components/Icons";
import {
  DUMMY_SELECTION_LIST,
  PLACEHOLDER_TEXT,
  SECTION_TITLE,
} from "./_constants/constants";
import RecordBox from "./_components/RecordBox";
import DropDown from "../../_components/DropDown";
import Timer from "./_components/Timer";

export default function PracticePage() {
  // 타이머 활성화 state
  const [isTimerActivated, setIsTimerActivated] = useState(false);

  // 드롭다운 메뉴 열기/닫기
  const [dropDownState, setDropDownState] = useState({
    scriptProjectOpened: false,
    scriptNameOpened: false,
    pptProjectOpened: false,
    pptNameOpened: false,
  });

  // 현재 선택된 드롭다운 항목 저장
  const [currentValueState, setCurrentValueState] = useState({
    scriptProject: "",
    scriptName: "",
    pptProject: "",
    pptName: "",
  });

  return (
    <div className="full-screen bg-primary-0 flex justify-center">
      <div className="w-full max-w-[1200px] px-4 pt-[50px] pb-[60px] flex flex-col gap-[60px]">
        {/* 타이머 */}
        <section className="w-full">
          <div
            className="w-fit flex gap-2 cursor-pointer"
            onClick={() => setIsTimerActivated((prev) => !prev)}
          >
            <CheckBox isChecked={isTimerActivated} />
            <span
              className={`text-gray-4 ${
                isTimerActivated && "text-gray-9 font-semibold"
              }`}
            >
              {SECTION_TITLE[0]}
            </span>
          </div>
          <Timer
            isVisible={isTimerActivated}
            onClose={() => setIsTimerActivated((prev) => !prev)}
          />
        </section>
        {/* 대본 선택 */}
        <section className="w-full flex flex-col gap-3">
          <span className="title-text">{SECTION_TITLE[1]}</span>
          <DropDown
            placeholder={PLACEHOLDER_TEXT[0]}
            currentValue={currentValueState.scriptProject}
            selectionList={DUMMY_SELECTION_LIST}
            isOpened={dropDownState.scriptProjectOpened}
            onDropDownClick={() =>
              setDropDownState((prev) => ({
                ...prev,
                scriptProjectOpened: !prev.scriptProjectOpened,
              }))
            }
            onSelectionClick={(selected: string) => {
              setCurrentValueState((prev) => ({
                ...prev,
                scriptProject: selected,
              }));
            }}
          />
          <DropDown
            placeholder={PLACEHOLDER_TEXT[1]}
            currentValue={currentValueState.scriptName}
            selectionList={DUMMY_SELECTION_LIST}
            isOpened={dropDownState.scriptNameOpened}
            onDropDownClick={() =>
              setDropDownState((prev) => ({
                ...prev,
                scriptNameOpened: !prev.scriptNameOpened,
              }))
            }
            onSelectionClick={(selected: string) => {
              setCurrentValueState((prev) => ({
                ...prev,
                scriptName: selected,
              }));
            }}
          />
        </section>
        {/* 발표자료 선택 */}
        <section className="w-full flex flex-col gap-3">
          <span className="title-text">{SECTION_TITLE[2]}</span>
          <DropDown
            placeholder={PLACEHOLDER_TEXT[2]}
            currentValue={currentValueState.pptProject}
            selectionList={DUMMY_SELECTION_LIST}
            isOpened={dropDownState.pptProjectOpened}
            onDropDownClick={() =>
              setDropDownState((prev) => ({
                ...prev,
                pptProjectOpened: !prev.pptProjectOpened,
              }))
            }
            onSelectionClick={(selected: string) => {
              setCurrentValueState((prev) => ({
                ...prev,
                pptProject: selected,
              }));
            }}
          />
          <DropDown
            placeholder={PLACEHOLDER_TEXT[3]}
            currentValue={currentValueState.pptName}
            selectionList={DUMMY_SELECTION_LIST}
            isOpened={dropDownState.pptNameOpened}
            onDropDownClick={() =>
              setDropDownState((prev) => ({
                ...prev,
                pptNameOpened: !prev.pptNameOpened,
              }))
            }
            onSelectionClick={(selected: string) => {
              setCurrentValueState((prev) => ({
                ...prev,
                pptName: selected,
              }));
            }}
          />
        </section>
        {/* 음성 녹음 */}
        <section className="flex flex-col gap-3">
          <span className="title-text">{SECTION_TITLE[3]}</span>
          <RecordBox />
        </section>
      </div>
    </div>
  );
}
