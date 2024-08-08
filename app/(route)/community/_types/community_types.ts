export interface ISearch {
  search: string;
}

export interface ICard {
  data: ICardData;
  isDetail?: boolean;
}

export interface ICardData {
  id: number;
  profileImg: string;
  nickname: string;
  affiliation: string;
  date: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

export interface IReply {
  id: number;
  profileImg: string;
  nickname: string;
  affiliation: string;
  likes: number;
  content: string;
}

export interface IComment {
  id: number;
  profileImg: string;
  nickname: string;
  affiliation: string;
  likes: number;
  content: string;
  reply: IReply[];
}

export interface IUploadDialog {
  onBgClick: () => void;
  onCancelClick: () => void;
  onUploadClick: (select: string) => void;
}

export interface IFormData {
  title: string;
  content: string;
  files: string[];
  isPrivate: boolean;
  password: string;
}
