"use client";

import { useState } from "react";
import { DownLightArrow } from "../../components/Icons";
import { CheckBox } from "../sign-up/_components/Icons";
import { PLACEHOLDER_TEXT, SECTION_TITLE } from "./_constants/constants";
import RecordBox from "./components/RecordBox";

export default function PracticePage() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full min-h-screen bg-primary-0 flex justify-center">
      <div className="w-full max-w-[1200px] px-4 pt-[132px] pb-[60px] flex flex-col gap-[60px]">
        <section className="w-full">
          <div
            className="w-fit flex gap-2 cursor-pointer"
            onClick={() => setIsChecked((prev) => !prev)}
          >
            <CheckBox isChecked={isChecked} />
            <span
              className={`text-gray-4 ${
                isChecked && "text-gray-9 font-semibold"
              }`}
            >
              {SECTION_TITLE[0]}
            </span>
          </div>
        </section>
        <section className="w-full flex flex-col gap-3">
          <span className="title-text">{SECTION_TITLE[1]}</span>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder={PLACEHOLDER_TEXT[0]}
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder={PLACEHOLDER_TEXT[1]}
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
        </section>
        <section className="w-full flex flex-col gap-3">
          <span className="title-text">{SECTION_TITLE[2]}</span>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder={PLACEHOLDER_TEXT[2]}
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
          <div className="w-full h-[50px] border border-gray-3 bg-white rounded-lg flex items-center px-4 cursor-pointer">
            <input
              placeholder={PLACEHOLDER_TEXT[3]}
              className="grow cursor-pointer placeholder:text-gray-3"
              onFocus={(e) => e.target.blur()}
            />
            <DownLightArrow />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <span className="title-text">{SECTION_TITLE[3]}</span>
          <RecordBox />
        </section>
      </div>
    </div>
  );
}
