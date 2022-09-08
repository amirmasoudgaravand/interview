import { useSelector } from "react-redux";
import { RootState } from "../../state-management/store";
import Form from "./Form";
import Invoice from "./Invoice";

function ChargeContent() {
  const languageState = useSelector((state: RootState) => state.language);

  return (
    <div
      className={
        languageState.value
          ? "direction_ltr content_inner_container"
          : "content_inner_container"
      }
    >
      <Form />
      <Invoice language={languageState.value} />
    </div>
  );
}
export default ChargeContent;
