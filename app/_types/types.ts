export interface DialogProps {
  isWarn?: boolean;
  topText: string;
  bottomText?: string;
  btnText: string;
  onBtnClick: (reason?: string) => void;
  onBgClick: () => void;

  isTwoButton?: boolean;
  subBtnText?: string;
  onSubBtnClick?: () => void;

  isReport?: boolean;
}

export interface IDropDown {
  placeholder: string;
  currentValue: string;
  selectionList: string[];
  isOpened: boolean;
  onDropDownClick: () => void;
  onSelectionClick: (selected: string) => void;

  isDisabled?: boolean;
}
