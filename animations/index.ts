import gsap from "gsap";

export const fade = (ref: any) => {
  gsap.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: 0.3 });
};
