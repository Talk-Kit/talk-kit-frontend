import { atom } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const nicknameState = atom({
  key: "nicknameState",
  default: "",
});

export const terms1State = atom({
  key: "termsOfAgreement",
  default: false,
});

export const terms2State = atom({
  key: "personalInfoAgreement",
  default: false,
});

export const terms3State = atom({
  key: "marketingAgreement",
  default: false,
});

