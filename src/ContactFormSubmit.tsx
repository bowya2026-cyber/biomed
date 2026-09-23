import { useState } from "react"
import styles from "./ContactFormSubmit.module.css"

interface Props {
  variant?: "Default" | "Success"
}

export default function ContactFormSubmit({
  variant: variantProp,
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Success" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <p className={styles["label"]}>{"Label"}</p>
    </div>
  )
}
