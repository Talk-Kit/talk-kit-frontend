import React from "react";
import { CheckBox } from "../../components/Icons";

interface TermsProps {
  isChecked: boolean;
  onClick: () => void;
}

// 토크키트 이용 약관
export const Terms1: React.FC<TermsProps> = ({ isChecked, onClick }) => (
  <div className="signup-max-w-600 flex-col items-start gap-4">
    <button onClick={onClick} className="flex items-center gap-2 self-stretch">
      <CheckBox isChecked={isChecked} />
      <span className={`${isChecked ? "text-gray-9" : "text-gray-4"}`}>
        <span className="font-bold">[필수]</span> 토크키트 이용약관
      </span>
    </button>
    <div className="flex h-[120px] py-2 px-4 items-start border-[1px] self-stretch border-gray-3 overflow-scroll hide-scrollbar">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
      efficitur nulla, eget varius arcu. Phasellus auctor massa vel turpis
      imperdiet posuere id a metus. Nulla elementum scelerisque elit, non
      bibendum lacus ornare eu. Cras dignissim aliquam nulla ut porta. Fusce
      pulvinar sed sem sed aliquet. Vivamus nisl nunc, vulputate eu sem sit
      amet, viverra dictum mauris. Curabitur eget nunc ultricies, tincidunt arcu
      sed, auctor enim. Vivamus elementum tincidunt dapibus. Vivamus tincidunt
      ex nec massa commodo auctor. Cras ultricies posuere dolor efficitur
      pharetra.
    </div>
  </div>
);

// 개인정보 수집 및 이용
export const Terms2: React.FC<TermsProps> = ({ isChecked, onClick }) => (
  <div className="signup-max-w-600 flex-col items-start gap-4">
    <button onClick={onClick} className="flex items-center gap-2 self-stretch">
      <CheckBox isChecked={isChecked} />
      <span className={`${isChecked ? "text-gray-9" : "text-gray-4"}`}>
        <span className="font-bold">[필수]</span> 개인정보 수집 및 이용
      </span>
    </button>
    <div className="flex h-[120px] py-2 px-4 items-start border-[1px] self-stretch border-gray-3 overflow-scroll hide-scrollbar">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
      efficitur nulla, eget varius arcu. Phasellus auctor massa vel turpis
      imperdiet posuere id a metus. Nulla elementum scelerisque elit, non
      bibendum lacus ornare eu. Cras dignissim aliquam nulla ut porta. Fusce
      pulvinar sed sem sed aliquet. Vivamus nisl nunc, vulputate eu sem sit
      amet, viverra dictum mauris. Curabitur eget nunc ultricies, tincidunt arcu
      sed, auctor enim. Vivamus elementum tincidunt dapibus. Vivamus tincidunt
      ex nec massa commodo auctor. Cras ultricies posuere dolor efficitur
      pharetra.
    </div>
  </div>
);

// [선택] 마케팅 수신 동의
export const Terms3: React.FC<TermsProps> = ({ isChecked, onClick }) => (
  <div className="signup-max-w-600 flex-col items-start gap-4">
    <button onClick={onClick} className="flex items-center gap-2 self-stretch">
      <CheckBox isChecked={isChecked} />
      <span className={`${isChecked ? "text-gray-9" : "text-gray-4"}`}>
        <span className="font-bold">[선택]</span> 마케팅 수신 동의
      </span>
    </button>
    <div className="flex h-[120px] py-2 px-4 items-start border-[1px] self-stretch border-gray-3 overflow-scroll hide-scrollbar">
      이건 선택사항입니다.
    </div>
  </div>
);
