import { Fragment } from "react";
import MobileNavMenuBlack from "./MobileNavMenuBalck";
import MobileNavMenuYellow from "./MobileNavMenuYellow";

function MobileNav(){
    return(
        <Fragment>
            <nav className="mobile_nav">
            <MobileNavMenuBlack />
            <MobileNavMenuYellow />
            </nav>
        </Fragment>
    )
}
export default MobileNav;