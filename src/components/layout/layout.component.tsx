import * as React from "react";
import Menu from "../menu/menu.component";
import FooterComponent from "../footer/footer.component";

import "./layout.component.scss";

const defaultProps = {
  isMenuButtonAMainCtaButton: true,
  shouldMenuBeDisplayed: true,
};

const Layout = ({
  isMenuButtonAMainCtaButton,
  shouldMenuBeDisplayed,
  children,
}: React.PropsWithChildren<{
  isMenuButtonAMainCtaButton: boolean;
  shouldMenuBeDisplayed: boolean;
}>) => {
  return (
    <React.Fragment>
      <Menu
        isCtaButtonPrimary={isMenuButtonAMainCtaButton}
        displayMenu={shouldMenuBeDisplayed}
      />
      {children}
      <FooterComponent />
    </React.Fragment>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
