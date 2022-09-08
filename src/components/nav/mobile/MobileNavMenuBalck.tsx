import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";
import { language } from "../../../state-management/features/languageSlice";

function MobileNavMenuBlack() {
  const { t } = useTranslation();
  const [changeLanguage, SetChangeLanguage] = useState(false);
  const languageState = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  /**
@function handle button for onchange language
**/
  const onChangeLanguage = () => {
    SetChangeLanguage(!changeLanguage);
    if (changeLanguage) {
      dispatch(language(false));
      i18n.changeLanguage("fa");
    } else {
      dispatch(language(true));
      i18n.changeLanguage("en");
    }
  };
  return (
    <Fragment>
      <div className="mobile_container_nav_menu_black">
        <div className="mobile_nav_menu_black_corporate">
          <img
            alt="enterprise subscribers"
            src={process.env.PUBLIC_URL + `/icons/enterprise-subscribers.svg`}
          />
          <span
            className={
              languageState.value
                ? "corporate_text_en mobile_nav_menu_black_corporate_text"
                : "mobile_nav_menu_black_corporate_text"
            }
          >
            {t("enterpriseSubscribers")}
          </span>
        </div>
        <ul className="mobile_nav_menu_black_list">
          <li>
            <img
              alt="basket"
              src={process.env.PUBLIC_URL + `/icons/basket.svg`}
            />
          </li>
          <li>
            <img alt="user" src={process.env.PUBLIC_URL + `/icons/user.svg`} />
          </li>
          <li className="language" onClick={onChangeLanguage}>
            <img
              alt="change language"
              src={process.env.PUBLIC_URL + `/icons/language.svg`}
            />
            <span
              className={languageState.value ? "margin-left-mobile-lang" : ""}
            >
              {!changeLanguage ? "En" : "Fa"}
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
export default MobileNavMenuBlack;
