import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../tools/Button";
import Input from "../tools/Input";
import ToggleSwitcher from "../tools/ToggleSiwtcher";
import { UsePreviousState } from "../tools/customHook/UsePreviousState";
import { chargeAmount } from "../mockData/chargeAmount";
import {
  commaThreeDigits,
  removeComma,
} from "../pureFunctions/commaThreeDigits";
import { useDispatch } from "react-redux";
import { addPhoneNumber } from "../../state-management/features/formSlice";
import { toggle } from "../../state-management/features/toggleSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../state-management/store";

function Form() {
  const { t } = useTranslation();
  const [typeSim, setTypeSim] = useState<boolean>(false);
  const [typeCharge, setTypeCharge] = useState<boolean>(false);
  const [selectedCharge, setSelectedCharge] = useState<string>("20000");
  const dispatch = useDispatch();
  const prevCount = UsePreviousState(selectedCharge);
  const toggleState = useSelector((state: RootState) => state.toggle.value);
  const formState = useSelector((state: RootState) => state.from.value);
  const toggleAmazing = toggleState[1].state;
  const simCard = formState[0].value;
  const amazingOrNormal = formState[4].value;

  /**
@function handle button to change state change type sim card
**/
  function changeTypeSim(value: string) {
    if (t(value) !== t("credit") && typeSim === false) {
      setTypeSim(true);
      setSelectedCharge("50000");
      dispatch(
        addPhoneNumber({
          name: "chargeAmountRials",
          value: "50,000",
        })
      );
      if (!toggleAmazing || amazingOrNormal !== "amazing") {
        dispatch(toggle({ name: "chargeType", state: false }));
      } else {
        dispatch(toggle({ name: "chargeType", state: true }));
      }

      dispatch(
        addPhoneNumber({
          name: "chargeType",
          value: "normal",
        })
      );
      dispatch(
        addPhoneNumber({
          name: "simcardtype",
          value: "permanent",
        })
      );
    } else {
      if (t(value) !== t("permanent") && typeSim === true) {
        setTypeSim(false);
        setSelectedCharge("50,000");
        dispatch(
          addPhoneNumber({
            name: "chargeAmountRials",
            value: "50,000",
          })
        );
        dispatch(toggle({ name: "chargeType", state: false }));
        dispatch(
          addPhoneNumber({
            name: "simcardtype",
            value: "credit",
          })
        );
        if (toggleAmazing || amazingOrNormal === "amazing") {
          dispatch(toggle({ name: "chargeType", state: true }));
          dispatch(
            addPhoneNumber({
              name: "chargeType",
              value: "amazing",
            })
          );
        }
      }
    }
  }
  /**
@function handle button to create a new charge amount
**/
  function handleClickChargeAmount(amount: string | undefined) {
    if (amount !== "otherAmounts") {
      dispatch(
        addPhoneNumber({
          name: "chargeAmountRials",
          value: commaThreeDigits(amount as string),
        })
      );
    }
  }
  /**
@function handle button to toggle switcher and dispatch to store
**/
  function handleToggleSwitcher() {
    if (typeCharge === true) {
      dispatch(toggle({ name: "chargeType", state: false }));
      setTypeCharge(false);
      dispatch(
        addPhoneNumber({
          name: "chargeType",
          value: "normal",
        })
      );
    } else {
      if (typeCharge === false) {
        dispatch(toggle({ name: "chargeType", state: true }));
        if (selectedCharge === "otherAmounts") {
          dispatch(
            addPhoneNumber({
              name: "purchaseBonus",
              value: "500 ",
            })
          );
        }
        setTypeCharge(true);
        dispatch(
          addPhoneNumber({
            name: "chargeType",
            value: "amazing",
          })
        );
        if (selectedCharge !== "100000") {
          if (selectedCharge !== "200000") {
            setSelectedCharge("50000");
            dispatch(
              addPhoneNumber({
                name: "chargeAmountRials",
                value: commaThreeDigits("50,000"),
              })
            );
          }
        }
      }
    }
  }

  function handleSubmitForm(event: any) {
    event.preventDefault();
  }

  return (
    <section className="form_container">
      <div className="form">
        <h1 className="form_title">{t("buy")}</h1>
        <div className="form_sim_type">
          <h6 className="form_sim_type_text"> {t("simcardtype")} </h6>
          <div className="form_sim_type_btn">
            <Button
              type="button"
              onClick={() => changeTypeSim("credit")}
              className={typeSim ? "button" : "button background_yellow"}
              title={t("credit")}
            />
            <Button
              type="button"
              onClick={() => changeTypeSim("permanent")}
              className={typeSim ? "button background_yellow" : "button"}
              title={t("permanent")}
            />
          </div>
        </div>
        <div className="amazing_charging">
          <ToggleSwitcher
            onChange={handleToggleSwitcher}
            disabled={simCard !== "credit" && true}
            label="Notifications"
          />
          <span className="amazing_charging_text">{t("amazingCharging")}</span>
        </div>
        <form onSubmit={(event: any) => handleSubmitForm(event)}>
          <Input
            name="phoneNumber"
            required={true}
            id="mobilePhone"
            value=""
            placeHolder={t("mobilePhone")}
          />

          <div className="form_charge_amount">
            <h6 className="form_charge_amount_text"> {t("chargeAmount")} </h6>
            <div className="form_charge_amout">
              {chargeAmount.map((item) => (
                <Fragment key={item.id}>
                  <Button
                    disabled={
                      (toggleAmazing &&
                        item.amout === "10000" &&
                        simCard !== "permanent") ||
                      (toggleAmazing &&
                        item.amout === "20000" &&
                        simCard !== "permanent") ||
                      (toggleAmazing &&
                        item.amout === "otherAmounts" &&
                        simCard !== "permanent")
                        ? true
                        : false
                    }
                    type="button"
                    title={
                      item.amout !== "otherAmounts"
                        ? commaThreeDigits(item.amout)
                        : item.amout
                    }
                    subTitle={
                      item.amout !== "otherAmounts" ? "rial" : undefined
                    }
                    className={
                      selectedCharge === item.amout
                        ? "background_yellow background_btn_charge_amount"
                        : "background_btn_charge_amount" &&
                          item.amout === "otherAmounts"
                        ? "font_weight_normal background_btn_charge_amount"
                        : "background_btn_charge_amount"
                    }
                    onClick={() => {
                      if (item.amout !== "otherAmounts") {
                        let bonus = Number(item.amout) / 100;
                        let bounsValue = bonus.toString();
                        if (bounsValue.length === 4) {
                          bounsValue = removeComma(bounsValue);
                        }
                        dispatch(
                          addPhoneNumber({
                            name: "purchaseBonus",
                            value: Number(bounsValue).toLocaleString(),
                          })
                        );
                      }
                      if (
                        item.amout === "otherAmounts" &&
                        selectedCharge === "otherAmounts"
                      ) {
                        handleClickChargeAmount(prevCount);
                      } else {
                        handleClickChargeAmount(item.amout);
                      }
                      setSelectedCharge(item.amout);
                    }}
                  />
                </Fragment>
              ))}
            </div>
            {selectedCharge === "otherAmounts" ? (
              <>
                <Input
                  name="chargeAmount"
                  required={true}
                  id="chargeAmount"
                  value={prevCount && commaThreeDigits(prevCount)}
                  placeHolder={t("chargeAmountRials")}
                />
              </>
            ) : undefined}
            <div className="form_email">
              <Input
                name="email"
                required={false}
                id="mobilePhone"
                value=""
                type="email"
                placeHolder={t("email")}
              />
            </div>
            <Button
              type="submit"
              className="btn_bankpayment"
              title={t("bankPayment")}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
export default Form;
