import { useSelector } from "react-redux";
import { RootState } from "../../state-management/store";
interface ToggleSwitcherProps {
  label: string;
  onChange: () => void;
  disabled?: boolean;
}

const ToggleSwitcher = (props: ToggleSwitcherProps) => {
  const toggleState = useSelector((state: RootState) => state.from.value);
  const simcardtype = toggleState[0].value;
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          disabled={props.disabled}
          type="checkbox"
          className="checkbox"
          name={props.label}
          id={props.label}
          onChange={props.onChange}
        />
        <label className="label" htmlFor={props.label}>
          <span
            className={
              simcardtype !== "credit"
                ? "default_toggle_inner disabled_switch inner"
                : "inner"
            }
          />
          <span
            className={
              simcardtype !== "credit"
                ? "default_toggle_switch cursor_disabled switch"
                : "switch"
            }
          />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitcher;
