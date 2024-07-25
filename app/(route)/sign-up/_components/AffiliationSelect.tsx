import React from "react";
import { AffiliationSelectProps } from "../_types/sign-up_types";
import { DETAIL_TEXT } from "../_constants/constants";

export default function AffiliationSelect({
  show,
  onSelect,
}: AffiliationSelectProps) {
  if (!show) return null;

  return (
    <div className="signup-max-w-600 flex-col items-start rounded-lg border-[1px] border-gray-2 bg-white shadow-lg cursor-pointer">
      <div
        onClick={() => onSelect(DETAIL_TEXT[11])}
        className="signup-affiliation"
      >
        {DETAIL_TEXT[11]}
      </div>
      <div
        onClick={() => onSelect(DETAIL_TEXT[12])}
        className="signup-affiliation"
      >
        {DETAIL_TEXT[12]}
      </div>
      <div
        onClick={() => onSelect(DETAIL_TEXT[13])}
        className="signup-affiliation"
      >
        {DETAIL_TEXT[13]}
      </div>
      <div
        onClick={() => onSelect(DETAIL_TEXT[14])}
        className="signup-affiliation"
      >
        {DETAIL_TEXT[14]}
      </div>
    </div>
  );
}
