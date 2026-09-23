import { useEffect } from "react"
import styles from "./Facilities.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["facilities-content"]}>
      <div className={styles["facilities-main"]}>
        <div className={styles["facilities-equipment-hero"]}>
          <div className={styles["hero-copy"]} data-reveal="">
            <p className={styles["hero-eyebrow"]}>{"Hero Eyebrow"}</p>
            <p className={styles["hero-title"]}>{"Hero Title"}</p>
            <p className={styles["hero-description"]}>{"Hero Description"}</p>
            <div className={styles["hero-actions"]}>
              <div className={styles["contact-our-team-button"]}>
                <p className={styles["contact-our-team-label"]}>{"Contact Our Team Label"}</p>
              </div>
            </div>
          </div>
          <div className={styles["equipment-feature-image"]} />
        </div>
        <div className={styles["facilities-intro"]}>
          <p className={styles["facilities-eyebrow"]}>{"Facilities Eyebrow"}</p>
          <p className={styles["facilities-title"]}>{"Facilities Title"}</p>
          <p className={styles["facilities-description"]}>{"Facilities Description"}</p>
        </div>
        <div className={styles["facilities-divider"]}>
          <div className={styles["facilities-divider-accent"]} />
        </div>
        <div className={styles["facilities-grid"]}>
          <div className={styles["laser-cutting-card"]} data-reveal="">
            <div className={styles["laser-cutting-image"]} />
            <div className={styles["laser-cutting-copy"]}>
              <p className={styles["laser-cutting-lab"]}>{"Laser Cutting Lab"}</p>
              <p className={styles["laser-cutting-title"]}>{"Laser Cutting Title"}</p>
              <p className={styles["laser-cutting-description"]}>{"Laser Cutting Description"}</p>
              <p className={styles["laser-cutting-link"]}>{"Laser Cutting Link"}</p>
            </div>
          </div>
          <div className={styles["sla-3d-printing-card"]} data-reveal="">
            <div className={styles["sla-3d-printing-image"]} />
            <div className={styles["sla-3d-printing-copy"]}>
              <p className={styles["sla-3d-printing-lab"]}>{"SLA 3D Printing Lab"}</p>
              <p className={styles["sla-3d-printing-title"]}>{"SLA 3D Printing Title"}</p>
              <p className={styles["sla-3d-printing-description"]}>{"SLA 3D Printing Description"}</p>
              <p className={styles["sla-3d-printing-link"]}>{"SLA 3D Printing Link"}</p>
            </div>
          </div>
          <div className={styles["fdm-3d-printing-card"]} data-reveal="">
            <div className={styles["fdm-3d-printing-image"]} />
            <div className={styles["fdm-3d-printing-copy"]}>
              <p className={styles["fdm-3d-printing-lab"]}>{"FDM 3D Printing Lab"}</p>
              <p className={styles["fdm-3d-printing-title"]}>{"FDM 3D Printing Title"}</p>
              <p className={styles["fdm-3d-printing-description"]}>{"FDM 3D Printing Description"}</p>
              <p className={styles["fdm-3d-printing-link"]}>{"FDM 3D Printing Link"}</p>
            </div>
          </div>
          <div className={styles["die-cutting-card"]} data-reveal="">
            <div className={styles["die-cutting-image"]} />
            <div className={styles["die-cutting-copy"]}>
              <p className={styles["die-cutting-lab"]}>{"Die Cutting Lab"}</p>
              <p className={styles["die-cutting-title"]}>{"Die Cutting Title"}</p>
              <p className={styles["die-cutting-description"]}>{"Die Cutting Description"}</p>
              <p className={styles["die-cutting-link"]}>{"Die Cutting Link"}</p>
            </div>
          </div>
          <div className={styles["electronics-card"]} data-reveal="">
            <div className={styles["electronics-image"]} />
            <div className={styles["electronics-copy"]}>
              <p className={styles["electronics-lab"]}>{"Electronics Lab"}</p>
              <p className={styles["electronics-title"]}>{"Electronics Title"}</p>
              <p className={styles["electronics-description"]}>{"Electronics Description"}</p>
              <p className={styles["electronics-link"]}>{"Electronics Link"}</p>
            </div>
          </div>
          <div className={styles["injection-moulding-card"]} data-reveal="">
            <div className={styles["injection-moulding-image"]} />
            <div className={styles["injection-moulding-copy"]}>
              <p className={styles["injection-moulding-lab"]}>{"Injection Moulding Lab"}</p>
              <p className={styles["injection-moulding-title"]}>{"Injection Moulding Title"}</p>
              <p className={styles["injection-moulding-description"]}>{"Injection Moulding Description"}</p>
              <p className={styles["injection-moulding-link"]}>{"Injection Moulding Link"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
