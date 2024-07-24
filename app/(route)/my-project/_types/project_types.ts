import { ChangeEvent } from "react";

// 버튼
export interface BtnProps {
  onClick: () => void;
}

// 새 프로젝트 만들기 다이얼로그
export interface DialogProps extends BtnProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// 프로젝트 폴더 아이콘 컴포넌트들
export interface MyProjectFolderProps {
  isCreate?: boolean;
  title: string;
  date: any;
}

// 프로젝트 input
export interface ProjectInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
