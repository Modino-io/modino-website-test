import * as React from "react";
import Menu from "../menu/menu.component";
import Footer from "../footer/footer.component";

import "./layout.component.scss";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
