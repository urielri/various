import { C } from "interface";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import s from "./s.module.css";

const Spin: C = () => {
  const ref = useRef(null);
  const q = gsap.utils.selector(ref);
  useEffect(() => {
    const rotate = gsap.utils.random(0, 60, 2);
    const scale = gsap.utils.random(1, 2, 0.01);
    const top = gsap.fromTo(
      q("#top"),
      { transform: " translate(-50%, -50%)scale(1) rotate(90deg)" },
      {
        repeat: -1,
        yoyo: true,
        duration: 2,
        repeatDelay: 0.6,
        transform: ` translate(-50%, -50%)scale(${scale}) rotate(${rotate}deg)`,
      }
    );
    const middle = gsap.fromTo(
      q("#middle"),
      { transform: "translate(-50%, -50%) scale(1) rotate(0deg)" },
      {
        repeat: -1,
        yoyo: true,
        duration: 2,
        repeatDelay: 0.3,
        transform: `translate(-50%, -50%)  scale(${scale}) rotate(${rotate}deg)`,
      }
    );
    const back = gsap.fromTo(
      q("#back"),
      { transform: " translate(-50%, -50%)  scale(1) rotate(0deg)" },
      {
        repeat: -1,
        yoyo: true,
        duration: 2,
        repeatDelay: 0,
        transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg)`,
      }
    );
    return () => {
      top.kill();
      middle.kill();
      back.kill();
    };
  });
  return (
    <div className={s.spin} ref={ref}>
      <svg
        width="89"
        height="88"
        viewBox="0 0 89 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
          id="back"

      >
        <path
          d="M3.89473 7.65814C16.6447 -6.97296 58.8948 3.15821 75.3948 20.1582C91.8948 37.1583 94.3948 67.1582 76.8948 81.6582C59.3948 96.1582 31.8952 81.6582 24.3948 69.6582C16.8944 57.6582 -8.85527 22.2892 3.89473 7.65814Z"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
      </svg>

      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        id="middle"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.27924 78.8327C-7.5968 63.4837 10.5477 24.006 30.4287 11.1222C50.3098 -1.76169 72.9719 -5.4086 83.7968 14.5745C94.6216 34.5575 88.3191 80.0762 75.0908 85.103C61.8626 90.1298 16.1553 94.1817 4.27924 78.8327Z"
          fill="#D9D9D9"
          fill-opacity="0.6"
        />
      </svg>

      <svg
        width="105"
        height="79"
        viewBox="0 0 105 79"
        fill="none"
        id="top"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.787796 28.2414C6.35361 9.64969 39.4499 -6.16503 61.4996 2.49894C83.5492 11.1629 112.276 21.6353 102.331 42.0702C92.385 62.5051 56.7212 76.8761 39.5276 78.8761C22.334 80.8762 -4.77802 46.8332 0.787796 28.2414Z"
          fill="#D9D9D9"
          fill-opacity="0.6"
        />
      </svg>
    </div>
  );
};
export default Spin;
