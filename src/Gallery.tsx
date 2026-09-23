import { useEffect } from "react"
import styles from "./Gallery.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <>
    <div className={styles["gallery-content"]}>
      <div className={styles["gallery-cover"]}>
        <div className={styles["gallery-header"]} data-reveal="">
          <div className={styles["archive-header-copy"]}>
            <p className={styles["eyebrow"]}>{"Eyebrow"}</p>
            <p className={styles["title"]}>{"Title"}</p>
            <p className={styles["subtitle"]}>{"Subtitle"}</p>
          </div>
        </div>
        <div className={styles["archive-divider"]} data-reveal="">
          <div className={styles["warm-accent"]} />
        </div>
        <div className={styles["featured-archive"]} data-reveal="">
          <div className={styles["pattern-left"]} />
          <div className={styles["pattern-center"]} />
          <div className={styles["pattern-right"]} />
          {/* TODO: external Framer module "Slideshow" — reimplement or swap for an npm equivalent */}
        </div>
        <div className={styles["archive-caption"]} data-reveal="">
          <p className={styles["caption"]}>{"Caption"}</p>
        </div>
      </div>
    </div>
    <div className={styles["gallery-slide-1"]} />
    <div className={styles["gallery-slide-2"]} />
    <div className={styles["gallery-slide-3"]} />
    <div className={styles["gallery-slide-4"]} />
    <div className={styles["gallery-slide-5"]} />
    <div className={styles["gallery-slide-6"]} />
    </>
  )
}
