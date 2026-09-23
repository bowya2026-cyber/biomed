import { useEffect } from "react"
import styles from "./Contact.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import ContactFormSubmit from "./ContactFormSubmit"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["contact-content"]}>
      <div className={styles["contact-introduction"]}>
        <div className={styles["introduction-copy"]}>
          <p className={styles["eyebrow"]}>{"Eyebrow"}</p>
          <p className={styles["title"]}>{"Title"}</p>
          <p className={styles["subtitle"]}>{"Subtitle"}</p>
        </div>
        <div className={styles["laboratory-image"]} />
      </div>
      <div className={styles["contact-workspace"]}>
        <div className={styles["contact-form-card"]}>
          <p className={styles["eyebrow2"]}>{"Eyebrow"}</p>
          <p className={styles["title2"]}>{"Title"}</p>
          <p className={styles["copy"]}>{"Copy"}</p>
          <div className={styles["enquiry-form"]} data-reveal="">
            <div className={styles["name-and-email"]}>
              <div className={styles["full-name-field"]}>
                <p className={styles["label"]}>{"Label"}</p>
                <input className={styles["form-input"]} type="text" name="label" aria-label={"Label"} />
              </div>
              <div className={styles["email-field"]}>
                <p className={styles["label2"]}>{"Label"}</p>
                <input className={styles["form-input"]} type="text" name="label" aria-label={"Label"} />
              </div>
            </div>
            <div className={styles["organisation-field"]}>
              <p className={styles["label3"]}>{"Label"}</p>
              <input className={styles["form-input"]} type="text" name="label" aria-label={"Label"} />
            </div>
            <div className={styles["enquiry-type-field"]}>
              <p className={styles["label4"]}>{"Label"}</p>
              <input className={styles["form-input"]} type="text" name="label" aria-label={"Label"} />
            </div>
            <div className={styles["subject-field"]}>
              <p className={styles["label5"]}>{"Label"}</p>
              <input className={styles["form-input"]} type="text" name="label" aria-label={"Label"} />
            </div>
            <div className={styles["message-field"]}>
              <p className={styles["label6"]}>{"Label"}</p>
              <input className={styles["form-input"]} type="text" name="label" aria-label={"Label"} />
            </div>
            <ContactFormSubmit variant="Default" />
          </div>
          <p className={styles["form-note"]}>{"Form Note"}</p>
        </div>
        <div className={styles["contact-information"]}>
          <p className={styles["eyebrow3"]}>{"Eyebrow"}</p>
          <p className={styles["title3"]}>{"Title"}</p>
          <p className={styles["copy2"]}>{"Copy"}</p>
          <div className={styles["email-contact"]} data-reveal="">
            {/* TODO: external Framer module "Mail" — reimplement or swap for an npm equivalent */}
            <div className={styles["email-copy"]}>
              <p className={styles["heading"]}>{"Heading"}</p>
              <p className={styles["email-link"]}>{"Email Link"}</p>
            </div>
          </div>
          <div className={styles["linkedin-cta"]} data-reveal="">
            {/* TODO: external Framer module "Linkedin" — reimplement or swap for an npm equivalent */}
            <p className={styles["label7"]}>{"Label"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
