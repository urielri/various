import { C } from "interface";
import { Lego as LegoIcon } from "icons";
import s from "./s.module.css";
import { useRecoilValue } from "recoil";
import {text as textAtom } from 'atoms'
const Lego: C = () => {
  const text = useRecoilValue(textAtom)
  return (
    <div className={s.lego}>
      <div className={s.text}>
        <span>{text}</span>
      </div>
      <LegoIcon />
    </div>
  );
};
export default Lego;
