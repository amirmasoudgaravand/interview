import React, { Fragment } from "react";
import DesktopNav from "./desktop/DesktopNav";
import MobileNav from "./mobile/MobileNav";
import { useSelector } from "react-redux";
import { RootState } from "../../state-management/store";

function Header() {
  const languageState = useSelector((state: RootState) => state.language);

  return (
    <Fragment>
      <header
        className={
          languageState.value
            ? "direction_ltr container_header"
            : "container_header"
        }
      >
        <DesktopNav />
        <MobileNav />
      </header>
    </Fragment>
  );
}
export default Header;
