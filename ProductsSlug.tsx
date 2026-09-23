import { useEffect, useMemo, useState } from "react"
import { CMS } from "./cms"
import styles from "./ProductsSlug.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import QuantityStepper from "./QuantityStepper"
import { addToCart, parsePrice } from "./cart"
import { go } from "./router"

interface Props {
  item?: Record<string, string>
}

export const cmsCollection = "Products"

export default function Page({
  item = CMS["Products"][0],
}: Props) {
  useEffect(() => initReveal(), [])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const price = useMemo(() => parsePrice(item["Price"]), [item])

  const handleAdd = () => {
    addToCart({
      slug: String(item["slug"] ?? "product"),
      title: String(item["Title"] ?? "Product"),
      category: String(item["Category"] ?? ""),
      image: String(item["Image"] ?? ""),
      price,
      priceLabel: String(item["Price"] ?? ""),
      quantity,
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className={styles["desktop"]}>
      <div className={styles["product-detail-content"]}>
        <div className={styles["product-detail-back-home"]} />
        <div className={styles["breadcrumb-navigation"]} data-reveal="">
          <div className={styles["back-to-products"]} onClick={() => go("/products")} role="link" tabIndex={0}>
            {/* TODO: external Framer module "Arrow Left" — reimplement or swap for an npm equivalent */}
            <p className={styles["back-to-products2"]}>{"Back to Products"}</p>
          </div>
          <p className={styles["item"]}>{"/"}</p>
          <p className={styles["category"]}>{String(item["Category"] ?? "Category")}</p>
        </div>
        <div className={styles["product-detail-hero"]} data-reveal="">
          <div className={styles["product-gallery"]}>
            <div className={styles["primary-product-image"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className={styles["product-thumbnails"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className={styles["product-thumbnail-1"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className={styles["product-thumbnail-2"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className={styles["product-thumbnail-3"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
          <div className={styles["purchase-panel"]}>
            <div className={styles["product-badges"]}>
              <div className={styles["category-badge"]}>
                <p className={styles["custom-orders"]}>{"Custom Orders"}</p>
              </div>
              <div className={styles["availability"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* TODO: external Framer module "Circle Check Big" — reimplement or swap for an npm equivalent */}
                <p className={styles["available-to-order"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }}>{"Available to order"}</p>
              </div>
            </div>
            <p className={styles["title"]}>{String(item["Title"] ?? "Title")}</p>
            <p className={styles["description"]}>{String(item["Description"] ?? "Description")}</p>
            <div className={styles["product-meta"]}>
              <div className={styles["price-and-reference"]}>
                <p className={styles["investment-label"]}>{"Starting price"}</p>
                <p className={styles["product-price"]}>{String(item["Price"] ?? "Price on request")}</p>
              </div>
              <div className={styles["product-category"]}>
                <p className={styles["category2"]}>{String(item["Category"] ?? "CATEGORY")}</p>
                <p className={styles["category3"]}>{String(item["Category"] ?? "Category")}</p>
              </div>
            </div>
            <div className={styles["quantity-row"]}>
              <p className={styles["quantity"]}>{"Quantity"}</p>
              <QuantityStepper value={quantity} onChange={setQuantity} />
            </div>
            <div className={styles["add-to-basket"]} onClick={handleAdd} role="button" tabIndex={0}>
              <span aria-hidden="true">🛒</span>
              <p className={styles["add-to-cart"]}>{added ? "Added to Cart ✓" : "Add to Cart"}</p>
            </div>
            <div className={styles["save-for-later"]}>
              {/* TODO: external Framer module "Bookmark" — reimplement or swap for an npm equivalent */}
              <p className={styles["save-for-later2"]}>{"Save for Later"}</p>
            </div>
            <div className={styles["request-technical-support"]}>
              {/* TODO: external Framer module "Life Buoy" — reimplement or swap for an npm equivalent */}
              <p className={styles["support-label"]} onClick={() => go("/contact")}>{"Request technical support"}</p>
            </div>
          </div>
        </div>
        <div className={styles["product-information"]} data-reveal="">
          <div className={styles["detailed-description"]}>
            <p className={styles["product-information2"]}>{"PRODUCT INFORMATION"}</p>
            <p className={styles["text"]}>{"Built for confident biomedical work."}</p>
            <p className={styles["description2"]}>{String(item["Description"] ?? "Description")}</p>
            <p className={styles["key-features"]}>{"Key features"}</p>
            <p className={styles["text2"]}>{"Modular components · Sterile-ready materials"}</p>
          </div>
        </div>
        <div className={styles["related-products"]} />
      </div>
    </div>
  )
}
