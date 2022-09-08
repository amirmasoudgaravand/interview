import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../state-management/store";

interface invoiceProps {
  language: boolean;
}

function Invoice(props: invoiceProps) {
  const form = useSelector((state: RootState) => state.from.value);
  const { t } = useTranslation();
  return (
    <section className="invoice_container">
      <div className="invoice">
        <h5 className="final_invoice_text">{t("finalInvoice")} </h5>
        {form.map((data, index) => (
          <div
            key={index}
            className={
              props.language ? "margin-left invoice_row" : "invoice_row"
            }
          >
            <div className="invoice_row_title">
              {t(data.name)}
              {data.name === "purchaseBonus" && (
                <span className="invoice_dot_green"></span>
              )}
            </div>
            <div className="invoice_row_value">
              {data.value === "" ? "---" : t(data.value)}{" "}
            </div>
          </div>
        ))}
      </div>
      <p className="invoice_description">
        <span
          className={
            props.language
              ? "margin-right invoice_description_dot_green"
              : "invoice_description_dot_green"
          }
        ></span>
        <span className="description">{t("InvoiceDescription")}</span>
      </p>
    </section>
  );
}
export default Invoice;
