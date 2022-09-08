import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";

function DesktopNavMenuYellow() {
  const { t } = useTranslation();
  const languageState = useSelector((state: RootState) => state.language);

  return (
    <Fragment>
      <div
        className={
          languageState.value
            ? "nav_border_radius_ltr desktop_nav_menu_yellow"
            : "desktop_nav_menu_yellow"
        }
      >
        <ul className="desktop_nav_menu_yellow_list">
          <li>
            <img
              className="logo"
              alt="logo irnacell"
              src={process.env.PUBLIC_URL + `/icons/${languageState.value ? 'logo-en':"logo-fa"}.svg`}
            />
          </li>
          <li>{t("store")}</li>
          <li>{t("productsServices")}</li>
          <li>{t("festivals")}</li>
          <li>{t("supports")}</li>
          <li>{t("workWithUs")}</li>
          <li> {t("news")}</li>
        </ul>
      </div>
    </Fragment>
  );
}
export default DesktopNavMenuYellow;
