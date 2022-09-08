import { useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import { translationEn } from "../../translation/translationEn";
import { translationFa } from "../../translation/translationFa";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../../../state-management/features/languageSlice";
import { RootState } from "../../../state-management/store";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fa: { translation: translationFa },
  },
  lng: "fa",
  fallbackLng: "fa",
  interpolation: { escapeValue: false },
});

function DesktopNavMenuBlack() {
  const [changeLanguage, SetChangeLanguage] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const languageState = useSelector((state: RootState) => state.language);
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
    <div className="desktop_container_nav_menu_black">
      <div className="desktop_nav_menu_black">
        <span className="desktop_nav_menu_black_corporate">
          <img
            alt="enterprise subscribers"
            src={process.env.PUBLIC_URL + `/icons/enterprise-subscribers.svg`}
          />
          <span
            className={
              languageState.value
                ? "margin_corporate_text desktop_nav_menu_black_corporate_text"
                : "desktop_nav_menu_black_corporate_text"
            }
          >
            {t("enterpriseSubscribers")}
          </span>
        </span>
      </div>
      <ul
        className={
          languageState.value
            ? "padding_left_zero desktop_nav_menu_black_list"
            : "desktop_nav_menu_black_list"
        }
      >
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
          <span className={languageState.value ? "right_zero" : ""}>
            {!changeLanguage ? "En" : "Fa"}
          </span>
        </li>
      </ul>
    </div>
  );
}
export default DesktopNavMenuBlack;
