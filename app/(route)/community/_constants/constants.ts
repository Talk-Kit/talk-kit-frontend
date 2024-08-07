import { ICardData, IComment } from "../_types/community_types";

export const COMMUNITY_LIST = ["자유 게시판", "피드백 게시판"];

export const COMMUNITY_TEXT = ["검색어를 입력해주세요", "작성하기"];

export const CARD_TEXT = [
  "...더보기",
  "좋아요",
  "댓글",
  "댓글 달기",
  "게시글 신고",
];

export const DETAIL_PAGE_TEXT = ["댓글", "댓글을 남겨 보세요", "등록"];

export const COMMENT_TEXT = ["답글 남기기", "댓글 신고"];

export const REPORT_PLACEHOLDER = [
  "이 게시물을 정말 신고하시겠습니까?",
  "이 댓글을 정말 신고하시겠습니까?",
  "신고",
];

// 이후 실제 데이터로 대체
export const DUMMY_CARD_DATA: ICardData[] = [
  {
    id: 0,
    profileImg: "",
    nickname: "화끈한분노",
    affiliation: "대학생",
    date: "2024-08-04T12:00:00",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 3,
  },
  {
    id: 1,
    profileImg: "",
    nickname: "화끈한분노",
    affiliation: "대학생",
    date: "2024-08-03T12:00:00",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 3,
  },
  {
    id: 2,
    profileImg: "",
    nickname: "화끈한분노",
    affiliation: "대학생",
    date: "2024-08-02T12:00:00",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 3,
  },
  {
    id: 3,
    profileImg: "",
    nickname: "화끈한분노",
    affiliation: "대학생",
    date: "2024-08-01T12:00:00",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 3,
  },
  {
    id: 4,
    profileImg: "",
    nickname: "화끈한분노",
    affiliation: "대학생",
    date: "2024-07-31T12:00:00",
    title: "눈을 보기가 어렵다면 미간을 보세요",
    content:
      "눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.\n눈 대신 눈썹, 코, 이마, 입 등을 바라보세요. 상대방은 당신이 눈을 보고 있다고 느낄 것입니다.",
    likes: 32,
    comments: 3,
  },
];

// 이후 실제 데이터로 대체
export const DUMMY_COMMENT_DATA: IComment[] = [
  {
    id: 0,
    profileImg: "",
    nickname: "화끈한분노",
    affiliation: "대학생",
    likes: 4,
    content:
      "좋은 글 감사합니다\n좋은 글 감사합니다\n\n좋은 글 감사합니다좋은 글 감사합니다좋은 글 감사합니다",
    reply: [
      {
        id: 0,
        profileImg: "",
        nickname: "침착한분노",
        affiliation: "대학생",
        likes: 4,
        content: "좋은 글 감사합니다",
      },
      {
        id: 1,
        profileImg: "",
        nickname: "조용한분노",
        affiliation: "대학생",
        likes: 4,
        content: "감사합니다",
      },
    ],
  },
  {
    id: 1,
    profileImg: "",
    nickname: "차가운분노",
    affiliation: "대학생",
    likes: 4,
    content:
      "좋은 글 감사합니다\n좋은 글 감사합니다\n\n좋은 글 감사합니다좋은 글 감사합니다좋은 글 감사합니다",
    reply: [],
  },
];
