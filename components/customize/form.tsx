import { C } from "interface";
import Text from "components/utils/inputs/text";
import s from "./s.module.css";
import Button from "components/utils/inputs/button";
import { useRecoilState } from "recoil";
import { text as textAtom, nextSection as nextSectionAtom } from "atoms";
const Form: C = () => {
  const [text, setText] = useRecoilState(textAtom);
  const [, setNext] = useRecoilState(nextSectionAtom);
  const action = (e: any, type: string) => {
    e.preventDefault();
    if (type === "cancel") {
      console.log("redirect");
    } else {
      setNext(true);
    }
  };
  return (
    <>
      <h1>
        Customize your <strong>Lego!</strong>
      </h1>
      <div className={s.form}>
        <form>
          <label htmlFor="text">
            <span className={s.name}>text</span>
            <Text
              onChange={(e) => setText(e.target.value)}
              placeholder="Input your text"
              id="text"
              name="text"
              value={text}
              maxLength={32}
            />
            <span className={s.info}>Max 32 chars. Used ({text.length})</span>
          </label>
          <div className={s.actions}>
            <Button onClick={(e) => action(e, "next")}>Next</Button>
            <Button typeClass="simple" onClick={(e) => action(e, "cancel")}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
