import { useEffect } from "react"
import styles from "./CustomOrders.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import ProductEnquirySubmit from "./ProductEnquirySubmit"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["custom-orders-content"]}>
      <div className={styles["custom-orders-back-home"]} data-reveal="">
        <div className={styles["back-home-button"]}>
          {/* TODO: external Framer module "Arrow Left" — reimplement or swap for an npm equivalent */}
          <p className={styles["back-home-label"]}>{"Back Home Label"}</p>
        </div>
      </div>
      <div className={styles["title-subtitle-spacing"]} />
      <div className={styles["custom-orders-enquiry"]} data-reveal="">
        <p className={styles["text"]}>{"Tell us about your custom order"}</p>
        <p className={styles["text2"]}>{"Share your requirements and the team will get back to you with a practical next step."}</p>
        <div className={styles["custom-orders-form"]}>
          <div className={styles["name-field"]}>
            <p className={styles["name"]}>{"Name"}</p>
            <input className={styles["form-input"]} type="text" name="name" aria-label={"Name"} />
          </div>
          <div className={styles["email-field"]}>
            <p className={styles["email"]}>{"Email"}</p>
            <input className={styles["form-input"]} type="email" name="email" aria-label={"Email"} />
          </div>
          <div className={styles["message-field"]}>
            <p className={styles["project-details"]}>{"Project details"}</p>
            <textarea className={styles["form-input"]} name="project-details" rows={5} aria-label={"Project details"} />
          </div>
          <ProductEnquirySubmit />
        </div>
      </div>
      <div className={styles["suggested-custom-routes"]} data-reveal="">
        <div className={styles["custom-orders-faq"]}>
          <p className={styles["custom-orders-faq2"]}>{"Custom Orders FAQ"}</p>
          <div className={styles["faq-questions"]}>
            <div className={styles["text3"]}>
              <p className={styles["text4"]}>{"What can BioMed Shed make?"}</p>
              <p className={styles["text5"]}>{"We support custom 3D printed electrode connectors, flow cells, biosensors, adhesive components and related prototyping work."}</p>
            </div>
            <div className={styles["faq-how-long"]}>
              <p className={styles["text6"]}>{"How long does a custom order take?"}</p>
              <p className={styles["text7"]}>{"Timing depends on the component, materials and quantity. Share your requirements through the form and we’ll suggest a practical route."}</p>
            </div>
            <div className={styles["faq-how-to-start"]}>
              <p className={styles["text8"]}>{"How should I start a custom order?"}</p>
              <p className={styles["text9"]}>{"Tell us what you are trying to sense, the format you need, expected quantities and any timing constraints. We’ll take it from there."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
