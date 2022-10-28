import { RecoilRoot } from "recoil";

export default function Template({ children }: {
  children: React.ReactNode
}) {
  return (<RecoilRoot>
    <div>{children}</div> 
  </RecoilRoot>)}