import * as React from "react";
import Menu from "../menu/menu.component";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
    </React.Fragment>
  );
};

export default Layout;
