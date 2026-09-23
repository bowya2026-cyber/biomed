import styles from "./ProductRecommendationCard.module.css"

interface Props {
  title?: string
  category?: string
  description?: string
  price?: string
  image?: string
  link?: string
}

export default function ProductRecommendationCard({
  title,
  category,
  description,
  price,
  image,
  link,
}: Props) {
  return (
    <div className={styles["recommendation-card"]}>
      <div className={styles["product-image"]} />
      <div className={styles["product-content"]}>
        <p className={styles["category"]}>{"Category"}</p>
        <p className={styles["title"]}>{"Title"}</p>
        <p className={styles["description"]}>{"Description"}</p>
        <div className={styles["card-footer"]}>
          <p className={styles["price"]}>{"Price"}</p>
          <div className={styles["view-product"]}>
            <p className={styles["view-product2"]}>{"View Product"}</p>
            {/* TODO: external Framer module "Arrow Right" — reimplement or swap for an npm equivalent */}
          </div>
        </div>
      </div>
    </div>
  )
}
