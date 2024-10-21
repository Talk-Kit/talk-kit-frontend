import { useState } from "react";
import { LikesIcon } from "./Icons";
import { CARD_TEXT } from "../_constants/constants";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => {
        setIsLiked((prev) => !prev);
      }}
      className="likes-comments text-sm font-bold"
    >
      <LikesIcon isLiked={isLiked} />
      <span className={`${isLiked ? "text-primary-1" : "text-gray-4"}`}>
        {CARD_TEXT[1]}
      </span>
    </button>
  );
}
