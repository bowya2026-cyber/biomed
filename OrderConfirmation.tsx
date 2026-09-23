import { useMemo } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./OrderConfirmation.module.css"
import "./theme.css"
import { LAST_REQUEST_KEY } from "./cart"
import { go } from "./router"

export default function Page() {
  const reference = useMemo(() => {
    try {
      const raw = localStorage.getItem(LAST_REQUEST_KEY)
      if (!raw) return "BMS-REQUEST"
      return JSON.parse(raw)?.orderReference || "BMS-REQUEST"
    } catch { return "BMS-REQUEST" }
  }, [])

  return (
    <div className={styles["confirmation-content"]}>
      <div className={styles["order-confirmation"]}>
        <p className={cx(tokens["text-label"], styles["order-request-received"])}>{"ORDER REQUEST RECEIVED"}</p>
        <h1 className={cx(tokens["text-display"], styles["h1"])}>{"Thank you - we’ll take it from here."}</h1>
        <p className={cx(tokens["text-body"], styles["text"])}>{"Your request has been prepared for review by the Biomed SHED team. A member of the team will follow up with next steps."}</p>
        <p className={styles["text2"]}>{`Order reference: ${reference}`}</p>
        <div className={styles["stack"]}>
          <div className={styles["stack2"]} onClick={() => go("/products")} role="link" tabIndex={0}>
            <p className={styles["return-to-products"]}>{"Return to Products"}</p>
          </div>
          <div className={styles["stack3"]} onClick={() => go("/contact")} role="link" tabIndex={0}>
            <p className={styles["contact-biomed-shed"]}>{"Contact Biomed SHED"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
