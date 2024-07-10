"use client";

import Banner from "../components/Banner";
import FileCard from "../components/FileCard";
import PostCard from "../components/PostCard";
import TopBar from "../components/TopBar/TopBar";

const dummyPostData = [
  {
    nickname: "화끈한분노",
    tag: "대학생",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 15,
  },
  {
    nickname: "화끈한분노",
    tag: "대학생",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 15,
  },
  {
    nickname: "화끈한분노",
    tag: "대학생",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 15,
  },
  {
    nickname: "화끈한분노",
    tag: "대학생",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 15,
  },
  {
    nickname: "화끈한분노",
    tag: "대학생",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 15,
  },
];

const dummyFileData = [
  { title: "간편한 금융 업무를 위한 앱에 대한 발표", fileName: "toast" },
  { title: "간편한 금융 업무를 위한 앱에 대한 발표", fileName: "toast" },
  { title: "간편한 금융 업무를 위한 앱에 대한 발표", fileName: "toast" },
  { title: "간편한 금융 업무를 위한 앱에 대한 발표", fileName: "toast" },
];

export default function Home() {
  return (
    <>
      <TopBar screen="lg" />
      <div className="pt-[72px] w-full flex flex-col items-center">
        <section className="w-full h-[400px] flex bg-gray-3 justify-center px-4">
          <div className="w-full max-w-[1200px] flex flex-col justify-center gap-4">
            <h2 className="font-bold text-[2rem]">발표를 쉽고 편리하게</h2>
            <span>
              {
                "토크키트(Talk Kit)는 시간이 많이 걸리고 복잡한 발표 과정을\n대본 초안 생성, 발음 평가, 음성녹음, 프로젝트별 저장 등을 통해\n간편하고 효율적으로 지원합니다."
              }
            </span>
          </div>
        </section>
        <Banner
          tag="대본"
          title={"대본을 더 쉽고 빠르게\n작성할 수 있습니다"}
          content={
            "발표 내용을 간단히 입력하면 대본 초안을 AI가 생성해 줍니다\n사용자는 이에 덧붙여 대본을 쉽게 작성 및 수정할 수 있습니다"
          }
          link=""
          img=""
        />
        <Banner
          tag="발표"
          title={"체계적이고 효율적인\n발표 연습이 가능합니다"}
          content={
            "음성녹음과 발음평가 기능을 지원합니다\n이를 통해 나의 억양, 속도 그리고 발음 등을 확인하고\n연습할 수 있습니다"
          }
          link=""
          img=""
          reversed
        />
        <Banner
          tag="커뮤니티"
          title={"같은 고민을 가진 사람들과\n소통하며 발전할 수 있습니다"}
          content={
            "이 공간에서 발표팁이나 피드백 등을 주고 받으며 더욱 완성된\n발표를 실현할 수 있습니다"
          }
          link=""
          img=""
        />
        <Banner
          tag="발표자료 관리"
          title={"발표자료들을 프로젝트별로\n생성합니다"}
          content={
            "발표자료, 대본 등을 이리저리 옮겨 다닐 필요없이\n이곳에 한데 모아 저장하고 관리할 수 있습니다\n또한 공개여부를 선택하여 다른 사용자에게 공유할 수 있습니다"
          }
          link=""
          img=""
          reversed
        />
        <section className="w-full px-4 py-8 flex justify-center">
          <div className="w-full max-w-[1200px] flex flex-col gap-6">
            <h2 className="text-[1.75rem]">
              일주일 동안 가장 도움을 많이 준 게시글 TOP 5
            </h2>
            {dummyPostData.map((el, index) => (
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
            <h2 className="text-[1.75rem]">사용자's Pick, 인기 발표자료</h2>
            <div className="flex w-full justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-[.62rem] w-full max-w-[600px] lg:max-w-none">
                {dummyFileData.map((el, index) => (
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
        <footer className="w-full bg-white py-8 flex justify-center border-t border-gray-2">
          <div className="flex items-center">
            <span className="text-gray-2 text-xs px-3 py-1">
              Copyright © 2024 by 운하
            </span>
            <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
            <span className="text-gray-2 text-xs px-3 py-1">
              Hosting by (주)운하
            </span>
            <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
            <span className="text-gray-2 text-xs px-3 py-1">
              개인정보처리방침
            </span>
            <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
            <span className="text-gray-2 text-xs px-3 py-1">이용약관</span>
            <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
            <span className="text-gray-2 text-xs px-3 py-1">
              email : chloe_kang@naver.com
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
