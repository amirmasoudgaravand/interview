import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { commaThreeDigits, removeComma } from "../pureFunctions/commaThreeDigits";
import {
  validEmail,
  validPhoneNumber,
  validChargeAmount,
} from "../pureFunctions/validations";
import { useDispatch } from "react-redux";
import { addPhoneNumber } from "../../state-management/features/formSlice";

interface InputProps {
  classNameLabel?: string;
  classNameInput?: string;
  placeHolder: string;
  id: string;
  value: string | undefined;
  type?: string;
  name: string;
  required: boolean;
}

function Input(props: InputProps) {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [clickInput, setClickInput] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>(props.value as string);
  const [validInputEmail, setValidInputEmail] = useState<boolean>(true);
  const [validInputPhoneNumber, setValidInputPhoneNumber] =
    useState<boolean>(true);
  const [validInputChargeAmount, setValidInputChargeAmount] =
    useState<boolean>(true);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("click", handleClickInput, true);
  }, []);

  function handleClickInput(event: any) {
    if (event.target.value !== "") setClickInput(true);
    if (
      !refInput.current?.contains(event.target) &&
      refInput.current?.value === ""
    ) {
      setClickInput(false);
    } else {
      setClickInput(true);
    }
  }
  /**
@function handle change input and dispatch to store
**/
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let currentValueInput = event.target.value;
    if (props.placeHolder === t("email")) {
      dispatch(addPhoneNumber({ name: "email", value: event.target.value }));
      if (validEmail(currentValueInput) === null) {
        setValidInputEmail(false);
      } else {
        setValidInputEmail(true);
      }
    }

    if (props.placeHolder === t("mobilePhone")) {
      dispatch(
        addPhoneNumber({ name: "mobilePhone", value: event.target.value })
      );
      if (validPhoneNumber(currentValueInput) === false) {
        setValidInputPhoneNumber(false);
      } else {
        setValidInputPhoneNumber(true);
      }
    }
    if (props.placeHolder === t("chargeAmountRials")) {
      dispatch(
        addPhoneNumber({ name: "chargeAmountRials", value:commaThreeDigits(event.target.value) })
      );
     let bouns = removeComma(event.target.value);
     let valueBouns = Number(bouns)/ 100;
      dispatch(
        addPhoneNumber({
          name: "purchaseBonus",
          value:valueBouns.toLocaleString(),
        })
      );

      if (validChargeAmount(currentValueInput) === false) {
        setValidInputChargeAmount(false);
      } else {
        setValidInputChargeAmount(true);
      }
    }

    if (props.placeHolder === t("chargeAmountRials")) {
      setValueInput(commaThreeDigits(event.target.value));
    } else {
      setValueInput(event.target.value);
    }
    if (event.target.value.length > 0) setClickInput(true);
  };
  return (
    <Fragment>
      <input
        ref={refInput}
        maxLength={
          props.placeHolder === t("chargeAmountRials")
            ? 9
            : props.placeHolder === t("mobilePhone")
            ? 11
            : undefined
        }
        onChange={(event) => {
          handleOnChangeInput(event);
        }}
        onClick={(event:React.MouseEvent<HTMLInputElement>) => handleClickInput(event)}
        type={props.type ? props.type : "text"}
        id={props.id}
        className={
          !validInputEmail || !validInputPhoneNumber || !validInputChargeAmount
            ? props.classNameInput + " border_red input"
            : props.classNameInput + " input"
        }
        value={valueInput}
      />
      <label
        className={
          clickInput || refInput.current?.value !== ""
            ? "focus_input label_input"
            : "label_input"
        }
        htmlFor={props.id}
      >
        {props.placeHolder}
      </label>
      {!validInputEmail && <div className="error">{t("inValidEmail")} </div>}
      {!validInputPhoneNumber && (
        <div className="error">{t("correctPhoneNumber")} </div>
      )}
      {!validInputChargeAmount && (
        <div className="alert_danger">{t("minMaxRial")} </div>
      )}
    </Fragment>
  );
}
export default Input;
