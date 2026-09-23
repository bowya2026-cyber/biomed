import { useEffect } from "react"
import styles from "./Researchers.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["technology-researchers"]}>
        <p className={styles["text"]}>{"Meet the Technology Researchers."}</p>
        <div className={styles["editable-researcher-profiles"]}>
          <div className={styles["researcher-card"]} data-reveal="">
            <div className={styles["researcher-photo"]} />
            <p className={styles["dr-alexandra-dobrea"]}>{"Dr Alexandra Dobrea"}</p>
            <p className={styles["founder-and-cto"]}>{"Founder and CTO"}</p>
            <p className={styles["visit-profile"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card2"]} data-reveal="">
            <div className={styles["researcher-photo2"]} />
            <p className={styles["alisdair-gordon"]}>{"Alisdair Gordon"}</p>
            <p className={styles["founder-and-cso"]}>{"Founder and CSO"}</p>
            <p className={styles["visit-profile2"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card3"]} data-reveal="">
            <div className={styles["researcher-photo3"]} />
            <p className={styles["dr-jessie-howell"]}>{"Dr Jessie Howell"}</p>
            <p className={styles["founder-and-ceo"]}>{"Founder and CEO"}</p>
            <p className={styles["visit-profile3"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card4"]} data-reveal="">
            <div className={styles["researcher-photo4"]} />
            <p className={styles["oscar-weipers"]}>{"Oscar Weipers"}</p>
            <p className={styles["development-engineer"]}>{"Development Engineer"}</p>
            <p className={styles["visit-profile4"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card5"]} data-reveal="">
            <div className={styles["researcher-photo5"]} />
            <p className={styles["lilian-collins"]}>{"Lilian Collins"}</p>
            <p className={styles["chemist-and-production-associate"]}>{"Chemist and Production Associate"}</p>
            <p className={styles["visit-profile5"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card6"]} data-reveal="">
            <div className={styles["researcher-photo6"]} />
            <p className={styles["prof-damion-corrigan"]}>{"Prof Damion Corrigan"}</p>
            <p className={styles["scientific-advisor"]}>{"Scientific Advisor"}</p>
            <p className={styles["visit-profile6"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card7"]} data-reveal="">
            <div className={styles["researcher-photo7"]} />
            <p className={styles["dr-melanie-jimenez"]}>{"Dr Melanie Jimenez"}</p>
            <p className={styles["scientific-advisor2"]}>{"Scientific Advisor"}</p>
            <p className={styles["visit-profile7"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["bowya-subramanian-profile"]} data-reveal="">
            <div className={styles["researcher-photo8"]} />
            <p className={styles["bowya-subramanian"]}>{"Bowya Subramanian"}</p>
            <p className={styles["web-designer"]}>{"Web designer"}</p>
            <p className={styles["add-profile-link"]}>{"Add profile link"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
