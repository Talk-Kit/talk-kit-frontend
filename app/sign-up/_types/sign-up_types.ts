export interface PrimaryButtonProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

export interface SignUpProgressProps {
  text: string;
  num: number;
  isStep2: boolean;
  isStep3: boolean;
}

export interface TermsProps {
  isChecked: boolean;
  onClick: () => void;
}

export interface FormData {
  id: string;
  pwd: string;
  pwdConfirm: string;
  nickname: string;
  affiliation: string;
}

export interface AffiliationSelectProps {
  show: boolean;
  onSelect: (value: string) => void;
}
