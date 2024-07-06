import React from "react";

interface AffiliationSelectProps {
  show: boolean;
  onSelect: (value: string) => void;
}

export default function AffiliationSelect({
  show,
  onSelect,
}: AffiliationSelectProps) {
  if (!show) return null;

  return (
    <div className="flex flex-col items-start w-full max-w-[600px] rounded-lg border-[1px] border-gray-2 bg-white shadow-lg cursor-pointer">
      <div
        onClick={() => onSelect("청소년")}
        className="flex py-[6px] px-6 items-center self-stretch text-gray-9 text-sm"
      >
        청소년
      </div>
      <div
        onClick={() => onSelect("대학생")}
        className="flex py-[6px] px-6 items-center self-stretch text-gray-9 text-sm"
      >
        대학생
      </div>
      <div
        onClick={() => onSelect("직장인")}
        className="flex py-[6px] px-6 items-center self-stretch text-gray-9 text-sm"
      >
        직장인
      </div>
      <div
        onClick={() => onSelect("기타")}
        className="flex py-[6px] px-6 items-center self-stretch text-gray-9 text-sm"
      >
        기타
      </div>
    </div>
  );
}
