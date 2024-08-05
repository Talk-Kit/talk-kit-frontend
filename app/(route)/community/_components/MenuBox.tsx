import { useForm } from "react-hook-form";
import { DownLightArrow } from "../../../_components/Icons";
import { SearchIcon } from "./Icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { COMMUNITY_LIST, COMMUNITY_TEXT } from "../_constants/constants";
import { IFormData } from "../_types/community_types";

export default function MenuBox() {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ search }: IFormData) => {
    console.log(search);
  };

  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(COMMUNITY_LIST[0]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col">
          <div
            onClick={() => setIsOpened((prev) => !prev)}
            className={"flex gap-2 px-3 py-2 items-center cursor-pointer"}
          >
            <span>{selected}</span>
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
        <div className="flex items-center w-full px-4 py-3 bg-gray-0 rounded-full gap-2">
          <input
            {...register("search")}
            className="grow placeholder:text-gray-4 outline-none bg-transparent"
            placeholder={COMMUNITY_TEXT[0]}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      <section className="w-full flex justify-end">
        <button onClick={() => {}} className="short-button">
          {COMMUNITY_TEXT[1]}
        </button>
      </section>
    </>
  );
}
