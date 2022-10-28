import { nextSection as nextSectionAtom, text as textAtom } from "atoms";
import Button from "components/utils/inputs/button";
import { C } from "interface";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Form from "./form";
import Lego from "./lego";
import s from "./s.module.css";
import { useEffect, useRef, useState } from "react";
import { fade } from "animations";
import Spin from "components/utils/inputs/spin";
const Content: C = () => {
  const nextSection = useRecoilValue(nextSectionAtom);
  const ref = useRef(null);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    fade(ref.current);
  });
  return (
    <div className={s.customize}>
      <div className={s.main}>
        {finish ? (
          <Redirect />
        ) : (
          <>
            <div className={s.content} ref={ref}>
              {nextSection ? <Check setFinish={setFinish} /> : <Form />}
            </div>
            <Lego />
          </>
        )}
      </div>
    </div>
  );
};
const Check: C<{ setFinish: Function }> = ({ setFinish }) => {
  const text = useRecoilValue(textAtom);
  const setNext = useSetRecoilState(nextSectionAtom);

  return (
    <>
      <h1>
        Check your <strong>Lego.</strong>
      </h1>
      <div className={s.check}>
        <label>
          <span className={s.name}>Your text</span>
          <span className={s.value}>{text}</span>
        </label>
        <div className={s.column}>
          <label>
            <span className={s.name}>Size</span>
            <span className={s.text}>12cmx24cm</span>
          </label>
          <label>
            <span className={s.name}>Color</span>
            <span className={s.color}>
              <div className={s.circle}></div>
              Beige
            </span>
          </label>
        </div>
      </div>
      <div className={s.actions}>
        <Button onClick={() => setFinish(true)}>Finish</Button>
        <Button onClick={() => setNext(false)} typeClass="simple">
          Back
        </Button>
      </div>
    </>
  );
};

const Redirect: C = () => {
  return (
    <div className={s.redirect}>
      <h1>Redirecting ...</h1>
      <span>Bless my funk home</span>
      <Spin/>
    </div>
  );
};
export default Content;
