"use client";
import Content from "components/customize";
import { FC } from "react";
import { RecoilRoot } from "recoil";

const Customize: FC = () => {
  return (
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  );
};
export default Customize;
