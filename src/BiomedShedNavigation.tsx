import { useEffect, useState } from "react"
import styles from "./BiomedShedNavigation.module.css"
import { cartCount } from "./cart"
import { go } from "./router"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone" | "Phone Open"
}

export default function BiomedShedNavigation({ variant = "Desktop" }: Props) {
  const [count, setCount] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sync = () => setCount(cartCount())
    sync()
    window.addEventListener("biomed-cart-updated", sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener("biomed-cart-updated", sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  const nav = (path: string) => () => go(path)

  return (
    <div className={styles["desktop"]} data-variant={mobileOpen ? "Phone Open" : variant}>
      <div className={styles["navigation-inner"]}>
        <div className={styles["brand-lockup"]} onClick={nav("/")} role="link" tabIndex={0}>
          <div className={styles["transparent-logo"]} />
          <p className={styles["biomed-shed-logo"]}>{"Biomed Shed Logo"}</p>
        </div>
        <div className={styles["navigation-links"]}>
          <p className={styles["home"]} onClick={nav("/")}>{"Home"}</p>
          <div className={styles["products-menu-trigger"]}>
            <p className={styles["products"]} onClick={nav("/products")}>{"Products"}</p>
            <div className={styles["products-dropdown"]}>
              <div className={styles["stack"]} onClick={nav("/products")}><p className={styles["off-the-shelf"]}>{"Off the Shelf"}</p></div>
              <div className={styles["stack2"]} onClick={nav("/custom-orders")}><p className={styles["custom-orders"]}>{"Custom Orders"}</p></div>
              <div className={styles["stack3"]} onClick={nav("/training")}><p className={styles["training"]}>{"Training"}</p></div>
            </div>
          </div>
          <p className={styles["facilities"]} onClick={nav("/facilities")}>{"Facilities"}</p>
          <p className={styles["gallery"]} onClick={nav("/gallery")}>{"Gallery"}</p>
          <p className={styles["publications"]} onClick={nav("/publications")}>{"Publications"}</p>
        </div>
        <div className={styles["navigation-actions"]}>
          <div className={styles["contact-cta"]} onClick={nav("/contact")}><p className={styles["contact"]}>{"Contact"}</p></div>
          <div className={styles["highlighted-cart"]} onClick={nav("/cart")} aria-label="Open cart" role="button" tabIndex={0}>
            <span aria-hidden="true">🛒</span>
            <p className={styles["n-0"]}>{count}</p>
          </div>
        </div>
        <div className={styles["phone-navigation-actions"]}>
          <div className={styles["phone-cart-button"]} onClick={nav("/cart")}>
            <span aria-hidden="true">🛒</span>
            <p className={styles["n-02"]}>{count}</p>
          </div>
          <div className={styles["hamburger-menu-button"]} onClick={() => setMobileOpen((v) => !v)}>
            <div className={styles["menu-line-top"]} />
            <div className={styles["menu-line-bottom"]} />
          </div>
        </div>
      </div>
      <div className={styles["mobile-navigation-drawer"]}>
        <p className={styles["menu-label"]}>{"Menu"}</p>
        <div className={styles["home-link"]} onClick={nav("/")}><p className={styles["home-label"]}>{"Home"}</p></div>
        <div className={styles["researchers-link"]} onClick={nav("/researchers")}><p className={styles["researchers-label"]}>{"Researchers"}</p></div>
        <div className={styles["products-link"]} onClick={nav("/products")}><p className={styles["products-label"]}>{"Products"}</p></div>
        <div className={styles["facilities-link"]} onClick={nav("/facilities")}><p className={styles["facilities-label"]}>{"Facilities"}</p></div>
        <div className={styles["gallery-link"]} onClick={nav("/gallery")}><p className={styles["gallery-label"]}>{"Gallery"}</p></div>
        <div className={styles["publications-link"]} onClick={nav("/publications")}><p className={styles["publications-label"]}>{"Publications"}</p></div>
        <div className={styles["contact-link"]} onClick={nav("/contact")}><p className={styles["contact-label"]}>{"Contact"}</p></div>
      </div>
    </div>
  )
}
