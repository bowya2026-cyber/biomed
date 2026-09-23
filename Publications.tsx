import { useEffect } from "react"
import styles from "./Publications.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["publications-introduction"]}>
        <p className={styles["section-label"]}>{"Section Label"}</p>
        <p className={styles["page-title"]}>{"Page Title"}</p>
        <p className={styles["page-introduction"]}>{"Page Introduction"}</p>
      </div>
      <div className={styles["publication-index"]}>
        <div className={styles["publication-card"]} data-reveal="">
          <p className={styles["publication-title"]}>{"Publication Title"}</p>
          <p className={styles["publication-description"]}>{"Publication Description"}</p>
          <div className={styles["publication-link"]}>
            <p className={styles["read-paper"]}>{"Read Paper"}</p>
            {/* TODO: external Framer module "Arrow Up Right" — reimplement or swap for an npm equivalent */}
          </div>
        </div>
        <div className={styles["publication-card2"]} data-reveal="">
          <p className={styles["publication-title2"]}>{"Publication Title"}</p>
          <p className={styles["publication-description2"]}>{"Publication Description"}</p>
          <div className={styles["publication-link2"]}>
            <p className={styles["read-paper2"]}>{"Read Paper"}</p>
            {/* TODO: external Framer module "Arrow Up Right" — reimplement or swap for an npm equivalent */}
          </div>
        </div>
      </div>
    </div>
  )
}
