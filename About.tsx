import { useEffect } from "react"
import styles from "./About.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["about-content"]}>
      <div className={styles["space-below-navigation"]} />
      <p className={styles["biomedshed"]}>{"BioMedShed"}</p>
      <p className={styles["text"]}>{"BioMedShed offer cost-effective solutions for electrochemical and microfluidic-based sensing. Please see below for more details."}</p>
      <div className={styles["biomedshed-mark"]} />
      <p className={styles["technology-profile"]}>{"TECHNOLOGY PROFILE"}</p>
      <div className={styles["profile-carousel-shell"]} data-reveal="">
        <div className={styles["abstract-card"]}>
          <p className={styles["abstract"]}>{"Abstract"}</p>
          <p className={styles["text2"]}>{"As a part of Strathclyde University, BioMed Shed aims to assist customers with their electrochemical and microfluidic-based sensing needs. We offer off-the-shelf components made in house, manufacturing of custom designed electrodes, fluidics and 3D printed accessories, as well as expertise for the design process. As our manufacturing is done in small batches, we are able to provide a cost-effective platform for rapid prototyping and an iterative design process.​​"}</p>
        </div>
        <div className={styles["offerings-card"]}>
          <p className={styles["offerings"]}>{"Offerings"}</p>
          <div className={styles["offerings-carousel"]}>
            <div className={styles["offering-connectors"]}>
              <p className={styles["n-3d-printed-connectors"]}>{"3D printed connectors"}</p>
              <p className={styles["text3"]}>{"Custom electrode connectors for biosensor workflows."}</p>
            </div>
            <div className={styles["offering-flow-cells"]}>
              <p className={styles["custom-flow-cells"]}>{"Custom flow cells"}</p>
              <p className={styles["text4"]}>{"Designed for microfluidic sensing and prototyping."}</p>
            </div>
            <div className={styles["offering-print-design"]}>
              <p className={styles["n-3d-print-design"]}>{"3D print design"}</p>
              <p className={styles["text5"]}>{"From concept development to manufacture support."}</p>
            </div>
            <div className={styles["offering-biosensors"]}>
              <p className={styles["biosensor-manufacture"]}>{"Biosensor manufacture"}</p>
              <p className={styles["text6"]}>{"Adaptable components for research and development."}</p>
            </div>
            <div className={styles["offering-gold-electrodes"]}>
              <p className={styles["laser-ablated-gold"]}>{"Laser-ablated gold"}</p>
              <p className={styles["coming-soon"]}>{"coming soon"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
