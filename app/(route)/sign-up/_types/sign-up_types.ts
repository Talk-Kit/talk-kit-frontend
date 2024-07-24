// 프로그레스 타입
export interface SignUpProgressProps {
  text: string;
  num: number;
  isStep2: boolean;
  isStep3: boolean;
}

// 약관동의 타입
export interface TermsProps {
  isChecked: boolean;
  onClick: () => void;
}

// 회원 생성 입력 상세
export interface FormData {
  id: string;
  pwd: string;
  pwdConfirm: string;
  nickname: string;
  affiliation: string;
}

// 소속 선택 타입
export interface AffiliationSelectProps {
  show: boolean;
  onSelect: (value: string) => void;
}
