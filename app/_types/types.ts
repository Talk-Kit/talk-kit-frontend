export interface DialogProps {
  isWarn?: boolean;
  topText: string;
  bottomText?: string;
  btnText: string;
  onBtnClick: () => void;
  onBgClick: () => void;

  isTwoButton?: boolean;
  subBtnText?: string;
  onSubBtnClick?: () => void;

  isReport?: boolean;
}
