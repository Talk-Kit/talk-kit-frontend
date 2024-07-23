import React from "react";
import { AffiliationSelectProps } from "../_types/sign-up_types";

export default function AffiliationSelect({
  show,
  onSelect,
}: AffiliationSelectProps) {
  if (!show) return null;

  return (
    <div className="signup-max-w-600 flex-col items-start rounded-lg border-[1px] border-gray-2 bg-white shadow-lg cursor-pointer">
      <div onClick={() => onSelect("청소년")} className="signup-affiliation">
        청소년
      </div>
      <div onClick={() => onSelect("대학생")} className="signup-affiliation">
        대학생
      </div>
      <div onClick={() => onSelect("직장인")} className="signup-affiliation">
        직장인
      </div>
      <div onClick={() => onSelect("기타")} className="signup-affiliation">
        기타
      </div>
    </div>
  );
}
