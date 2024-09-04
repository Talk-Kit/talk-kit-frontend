import TopBar from "../_components/TopBar/TopBar";
import Banner from "./_components/Banner";
import PostCard from "./_components/PostCard";
import FileCard from "./_components/FileCard";
import Footer from "./_components/Footer";
import {
  BANNER_DATA,
  DUMMY_FILE_DATA,
  DUMMY_POST_DATA,
  MAIN_PAGE_TEXT,
} from "./_constants/constants";
import { IBanner } from "./_types/types";

export default function Home() {
  return (
    <>
      <TopBar screen="lg" />
      <div className="pt-[72px] w-full flex flex-col items-center">
        <section className="w-full h-[400px] flex bg-gray-3 justify-center px-4">
          <div className="w-full max-w-[1200px] flex flex-col justify-center gap-4">
            <h2 className="font-bold text-[2rem]">{MAIN_PAGE_TEXT[0]}</h2>
            <span>{MAIN_PAGE_TEXT[1]}</span>
          </div>
        </section>
        {BANNER_DATA.map((el: IBanner, index) => (
          <Banner
            key={index}
            tag={el.tag}
            title={el.title}
            content={el.content}
            link={el.link}
            img={el.img}
            reversed={index % 2 === 1 && true}
          />
        ))}
        <section className="w-full px-4 py-8 flex justify-center">
          <div className="w-full max-w-[1200px] flex flex-col gap-6">
            <h2 className="text-[1.75rem]">{MAIN_PAGE_TEXT[2]}</h2>
            {DUMMY_POST_DATA.map((el, index) => (
              <PostCard
                key={index}
                rank={index + 1}
                profileImg=""
                nickname={el.nickname}
                tag={el.tag}
                title={el.title}
                content={el.content}
                thumbnail=""
                likes={el.likes}
                comments={el.comments}
              />
            ))}
          </div>
        </section>
        <section className="bg-primary-0 w-full flex justify-center px-4 py-8">
          <div className="w-full max-w-[1200px] flex flex-col gap-8">
            <h2 className="text-[1.75rem]">{MAIN_PAGE_TEXT[3]}</h2>
            <div className="flex w-full justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-[.62rem] w-full max-w-[600px] lg:max-w-none">
                {DUMMY_FILE_DATA.map((el, index) => (
                  <FileCard
                    key={index}
                    title={el.title}
                    fileName={el.fileName}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
