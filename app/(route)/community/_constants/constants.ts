import { ICardData, IComment } from "../_types/community_types";

export const COMMUNITY_LIST = ["자유 게시판", "피드백 게시판"];

export const COMMUNITY_TEXT = ["검색어를 입력해주세요", "작성하기"];

export const CARD_TEXT = [
  "...더보기",
  "좋아요",
  "댓글",
  "댓글 달기",
  "게시글 신고",
  "비공개 게시글입니다.",
];

export const DETAIL_PAGE_TEXT = ["댓글", "댓글을 남겨 보세요", "등록"];

export const COMMENT_TEXT = ["답글 남기기", "댓글 신고"];

export const REPORT_PLACEHOLDER = [
  "이 게시물을 정말 신고하시겠습니까?",
  "이 댓글을 정말 신고하시겠습니까?",
  "신고",
];

export const NEW_POST_TEXT = [
  "제목을 입력해 주세요",
  "공개",
  "비공개",
  "프로젝트에 저장된 나만의 파일을 공유해보세요",
  "프로젝트에서 가져오기",
  "등록",
];

export const PRIVATE_DIALOG_TEXT = [
  "비밀번호를 입력해주세요",
  "입력칸",
  "확인",
];

export const FONT_SIZE = [
  "8px",
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "24px",
  "30px",
  "36px",
  "48px",
  "60px",
  "72px",
  "96px",
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
    isPrivate: false,
    password: "",
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
    isPrivate: false,
    password: "",
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
    isPrivate: false,
    password: "",
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
    isPrivate: true,
    password: "1234",
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
    isPrivate: false,
    password: "",
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
        targetName: "화끈한분노",
      },
      {
        id: 1,
        profileImg: "",
        nickname: "조용한분노",
        affiliation: "대학생",
        likes: 4,
        content: "감사합니다",
        targetName: "침착한분노",
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

export const DUMMY_UPLOAD_DATA = [
  {
    name: "프로젝트1",
    files: ["프1 파일1", "프1 파일2", "프1 파일3", "프1 파일4"],
  },
  {
    name: "프로젝트2",
    files: ["프2 파일1", "프2 파일2", "프2 파일3", "프2 파일4"],
  },
  {
    name: "프로젝트3",
    files: ["프3 파일1", "프3 파일2", "프3 파일3", "프3 파일4"],
  },
  {
    name: "프로젝트4",
    files: ["프4 파일1", "프4 파일2", "프4 파일3", "프4 파일4"],
  },
];
