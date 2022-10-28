import { atom } from "recoil";

export const text = atom<string>({ key: "textState", default: "" });

export const nextSection = atom<boolean>({
  key: "nextSectionState",
  default: false,
});
