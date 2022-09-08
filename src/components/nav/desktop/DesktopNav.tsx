import { Fragment } from "react";
import DesktopNavMenuBlack from "./DesktopNavMenuBlack";
import DesktopNavMenuYellow from "./DesktopNavMenuYellow";

function DesktopNav(){
    return(
       <Fragment>
          <nav className="desktop_nav">
          <DesktopNavMenuYellow />
          <DesktopNavMenuBlack />
        </nav>
       </Fragment>
    )
}
export default DesktopNav;