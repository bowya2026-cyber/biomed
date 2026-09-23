import { useEffect } from "react"
import { CMS } from "./cms"
import styles from "./EventsSlug.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

interface Props {
  item?: Record<string, string>
}

export const cmsCollection = "Events"

export default function Page({
  item = CMS["Events"][0],
}: Props) {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["event-detail-content"]}>
        <p className={styles["upcoming-event"]}>{"UPCOMING EVENT"}</p>
        <p className={styles["title"]}>{String(item["Title"] ?? "Title")}</p>
        <p className={styles["content"]}>{"Content"}</p>
        <div className={styles["event-banner"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <p className={styles["description"]}>{String(item["Description"] ?? "Description")}</p>
        <p className={styles["location"]}>{String(item["Location"] ?? "Location")}</p>
        <div className={styles["event-actions"]} data-reveal="">
          <div className={styles["register-cta"]}>
            <p className={styles["register-for-this-event"]}>{"Register for this event"}</p>
          </div>
          <div className={styles["contact-cta"]}>
            <p className={styles["ask-a-question"]}>{"Ask a question"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
