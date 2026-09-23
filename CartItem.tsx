import { useState } from "react"
import styles from "./CartItem.module.css"
import QuantityStepper from "./QuantityStepper"

interface Props {
  variant?: "Cart Item" | "Removed"
  itemTitle?: string
  itemCategory?: string
  availability?: string
  unitPrice?: string
  totalPrice?: string
  itemDescription?: string
  itemImage?: string
}

export default function CartItem({
  variant: variantProp,
  itemTitle,
  itemCategory,
  availability,
  unitPrice,
  totalPrice,
  itemDescription,
  itemImage,
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Removed" : (variantProp ?? "Cart Item")

  return (
    <div className={styles["cart-item"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["equipment-image"]} />
      <div className={styles["product-details"]}>
        <p className={styles["product-name"]}>{"Product Name"}</p>
        <p className={styles["product-description"]}>{"Product Description"}</p>
        <div className={styles["product-meta"]}>
          <p className={styles["product-category"]}>{"Product Category"}</p>
          <div className={styles["availability-badge"]}>
            <p className={styles["availability"]}>{"Availability"}</p>
          </div>
        </div>
      </div>
      <div className={styles["unit-price"]}>
        <p className={styles["unit-label"]}>{"Unit Label"}</p>
        <p className={styles["unit-value"]}>{"Unit Value"}</p>
      </div>
      <QuantityStepper variant="Quantity 1" />
      <div className={styles["total"]}>
        <p className={styles["total-label"]}>{"Total Label"}</p>
        <p className={styles["total-value"]}>{"Total Value"}</p>
      </div>
      <div className={styles["remove"]}>
        <p className={styles["remove-label"]}>{"Remove Label"}</p>
      </div>
    </div>
  )
}
