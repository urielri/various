import Context from "./context"
export default function Layout({children}: {children: any}) {

    return (
      <Context>{children}</Context>
    )
}