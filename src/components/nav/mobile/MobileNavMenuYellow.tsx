import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";

function MobileNavMenuYellow() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  function changeIConMenu() {
    setOpenMenu(!openMenu);
  }
  const languageState = useSelector((state: RootState) => state.language);
  return (
    <Fragment>
      <div className="mobile_nav_menu_yellow">
        <img
          onClick={changeIConMenu}
          className="menu_icon"
          alt="enterprise subscribers"
          src={
            process.env.PUBLIC_URL +
            `/icons/${openMenu ? "close" : "menu-icon"}.svg`
          }
        />
        <img
          className="logo"
          alt="logo irancell"
          src={process.env.PUBLIC_URL + `/icons/${languageState.value ? 'logo-en':"logo-fa"}.svg`}
        />
      </div>
      {openMenu ? (
        <ul
          className={
            openMenu ? "mobile_nav_menu menu_active" : "mobile_nav_menu"
          }
        >
          <li>
            <span>{t("store")}</span>
          </li>
          <li>
            <span>{t("productsServices")}</span>
          </li>
          <li>
            <span>{t("festivals")}</span>
          </li>
          <li>
            <span>{t("supports")}</span>
          </li>
          <li>
            <span>{t("workWithUs")}</span>
          </li>
          <li>
            <span>{t("news")}</span>
          </li>
        </ul>
      ) : undefined}
    </Fragment>
  );
}
export default MobileNavMenuYellow;
