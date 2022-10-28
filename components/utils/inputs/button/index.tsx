import { C } from "interface";
import { ReactElement, ReactNode } from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./s.module.css";
type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode | ReactElement | string;
  typeClass?: "normal" | "simple";
  onClick: Function
};
const Button: C<Button> = ({ onClick, children, typeClass = "normal" , disabled}) => {
  return (
    <div className={`${s.button} ${s[typeClass]}`}>
      <button onClick={(e)=> onClick(e)} disabled={disabled}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
