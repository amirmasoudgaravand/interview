import { useTranslation } from "react-i18next";

interface ButtonProps {
  className?: string;
  title: string;
  subTitle?: string;
  onClick?: (event: any) => void;
  ref?: any;
  disabled?: boolean;
  type:"submit" | "button";
}

function Button(props: ButtonProps) {
  const { t } = useTranslation();
  return (
    <button
      disabled={props.disabled}
      ref={props.ref}
      type={props.type}
      className={
        props.disabled
          ? props.className + " cursor_disabled button"
          : props.className + " button"
      }
      onClick={props.onClick}
    >
      {t(props.title)}
      <span className="sub_title">{props.subTitle && t(props.subTitle)}</span>
    </button>
  );
}
export default Button;
