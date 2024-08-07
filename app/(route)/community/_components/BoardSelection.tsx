import { useState } from "react";
import { COMMUNITY_LIST } from "../_constants/constants";
import { DownLightArrow } from "../../../_components/Icons";
import { motion } from "framer-motion";

export default function BoardSelection() {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(COMMUNITY_LIST[0]);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className={"flex gap-2 px-3 py-2 items-center cursor-pointer"}
      >
        <span className="font-semibold">{selected}</span>
        <span className={`${isOpened && "rotate-180"}`}>
          <DownLightArrow />
        </span>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpened ? "auto" : 0 }}
        transition={{ type: "tween" }}
        className="w-full overflow-hidden"
      >
        <div className="w-full pt-1 border-t border-gray-2">
          <div className="w-full border border-gray-2">
            {COMMUNITY_LIST.map((el) => (
              <div
                key={el}
                onClick={() => {
                  setSelected(el);
                  setIsOpened((prev) => !prev);
                }}
                className="text-sm text-gray-4 p-3 cursor-pointer hover:bg-gray-1"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
