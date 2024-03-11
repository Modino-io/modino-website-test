import * as React from "react";
import Menu from "../menu/menu.component";
import FooterComponent from "../footer/footer.component";

import "./layout.component.scss";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
      <FooterComponent />
    </React.Fragment>
  );
};

export default Layout;
