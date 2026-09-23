import { useEffect } from "react"
import styles from "./Training.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import ContactFormSubmit from "./ContactFormSubmit"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["training-desktop"]}>
      <div className={styles["training-top-bar"]}>
        <div className={styles["back-home-button"]} data-reveal="">
          {/* TODO: external Framer module "Arrow Left" — reimplement or swap for an npm equivalent */}
          <p className={styles["back-home-label"]}>{"Back Home Label"}</p>
        </div>
      </div>
      <div className={styles["training-opening"]}>
        <div className={styles["coming-soon-badge"]} data-reveal="">
          <p className={styles["coming-soon-label"]}>{"Coming Soon Label"}</p>
        </div>
        <p className={styles["training-eyebrow"]}>{"Training Eyebrow"}</p>
        <p className={styles["training-headline"]}>{"Training Headline"}</p>
        <p className={styles["training-hero-copy"]}>{"Training Hero Copy"}</p>
        <div className={styles["ask-about-programme"]} data-reveal="">
          <p className={styles["ask-about-programme-label"]}>{"Ask About Programme Label"}</p>
          {/* TODO: external Framer module "Arrow Right" — reimplement or swap for an npm equivalent */}
        </div>
      </div>
      <div className={styles["practical-starting-point"]}>
        <div className={styles["training-intro-copy"]} data-reveal="">
          <p className={styles["training-intro-eyebrow"]}>{"Training Intro Eyebrow"}</p>
          <p className={styles["training-intro-title"]}>{"Training Intro Title"}</p>
          <p className={styles["training-intro-paragraph"]}>{"Training Intro Paragraph"}</p>
        </div>
        <div className={styles["training-can-include"]} data-reveal="">
          <p className={styles["training-includes-title"]}>{"Training Includes Title"}</p>
          <div className={styles["biosensor-fundamentals"]}>
            <p className={styles["biosensor-fundamentals-title"]}>{"Biosensor Fundamentals Title"}</p>
            <p className={styles["biosensor-fundamentals-copy"]}>{"Biosensor Fundamentals Copy"}</p>
          </div>
          <div className={styles["microfluidic-prototyping"]}>
            <p className={styles["microfluidic-prototyping-title"]}>{"Microfluidic Prototyping Title"}</p>
            <p className={styles["microfluidic-prototyping-copy"]}>{"Microfluidic Prototyping Copy"}</p>
          </div>
          <div className={styles["lab-to-prototype-workflows"]}>
            <p className={styles["text"]}>{"Lab To Prototype Workflows Title"}</p>
            <p className={styles["text2"]}>{"Lab To Prototype Workflows Copy"}</p>
          </div>
        </div>
      </div>
      <div className={styles["training-enquiry-section"]}>
        <p className={styles["training-enquiry-title"]}>{"Training Enquiry Title"}</p>
        <p className={styles["training-enquiry-copy"]}>{"Training Enquiry Copy"}</p>
        <div className={styles["training-enquiry-form"]} data-reveal="">
          <div className={styles["name-field"]}>
            <p className={styles["name-label"]}>{"Name Label"}</p>
            <input className={styles["form-input"]} type="text" name="name-label" aria-label={"Name Label"} />
          </div>
          <div className={styles["email-field"]}>
            <p className={styles["email-label"]}>{"Email Label"}</p>
            <input className={styles["form-input"]} type="email" name="email-label" aria-label={"Email Label"} />
          </div>
          <div className={styles["enquiry-field"]}>
            <p className={styles["enquiry-label"]}>{"Enquiry Label"}</p>
            <input className={styles["form-input"]} type="text" name="enquiry-label" aria-label={"Enquiry Label"} />
          </div>
          <ContactFormSubmit variant="Default" />
        </div>
      </div>
    </div>
  )
}
