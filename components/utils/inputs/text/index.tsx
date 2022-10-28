import { C } from "interface";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import s from "./s.module.css";
type Text = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onChange: Function;
};
const Text: C<Text> = ({
  onChange,
  value,
  disabled,
  placeholder,
  name,
  maxLength,
  id,
}) => {
  return (
    <div className={s.text}>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
      />
    </div>
  );
};
export default Text;
