import { motion } from "framer-motion";

interface IBanner {
  tag: string;
  title: string;
  content: string;
  link: string;
  img: string;
  reversed?: boolean;
}

export default function Banner({
  tag,
  title,
  content,
  link,
  img,
  reversed,
}: IBanner) {
  const variants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`w-full sm:py-8 lg:h-[400px] flex justify-center px-4 -z-10 ${
        reversed && "bg-primary-0"
      }`}
    >
      <motion.div
        variants={variants}
        transition={{ type: "tween", duration: 0.5 }}
        className={`w-full max-w-[1200px] flex gap-8 items-center ${
          reversed
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        }`}
      >
        <div className={`w-full grow bg-gray-3 sm:h-[250px] lg:h-[300px]`}>
          {/* 이미지로 수정 필요 */}
        </div>
        <div className="w-full grow flex flex-col gap-4">
          <h3 className="font-semibold">#{tag}</h3>
          <h2 className="font-semibold text-[2rem] sm:whitespace-normal lg:whitespace-pre-wrap">
            {title}
          </h2>
          <p className="text-sm leading-5 sm:whitespace-normal lg:whitespace-pre-wrap">
            {content}
          </p>
          <span className="font-semibold leading-5 underline cursor-pointer">
            바로 사용해보기↗ {/* 링크 연결 필요 */}
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
