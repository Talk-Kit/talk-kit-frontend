import ReactQuill, { ReactQuillProps } from "react-quill";

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
  isPrivate: boolean;
  password: string;
}

export interface IReply {
  id: number;
  profileImg: string;
  nickname: string;
  affiliation: string;
  likes: number;
  content: string;
  targetName: string;
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

export interface IPrivateDialog {
  onBgClick: () => void;
  onBtnClick: (password: string) => void;
}

export interface ICommentInput {
  target?: string;
  onSubmit: (content: string) => void;
}

export interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}
