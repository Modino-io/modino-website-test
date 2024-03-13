import * as React from "react";
import Menu from "../menu/menu.component";
import FooterComponent from "../footer/footer.component";

import "./layout.component.scss";

const defaultProps = {
  isMenuButtonAMainCtaButton: true,
};

const Layout = ({
  isMenuButtonAMainCtaButton,
  children,
}: React.PropsWithChildren<{ isMenuButtonAMainCtaButton: boolean }>) => {
  return (
    <React.Fragment>
      <Menu isCtaButtonPrimary={isMenuButtonAMainCtaButton} />
      {children}
      <FooterComponent />
    </React.Fragment>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
