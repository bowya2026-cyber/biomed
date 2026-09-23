import { useEffect, useState } from "react"
import styles from "./Cart.module.css"
import "./theme.css"
import { CartItem, cartSubtotal, readCart, removeFromCart, updateQuantity } from "./cart"
import { go } from "./router"

export default function Page() {
  const [items, setItems] = useState<CartItem[]>([])
  const sync = () => setItems(readCart())

  useEffect(() => {
    sync()
    window.addEventListener("biomed-cart-updated", sync)
    return () => window.removeEventListener("biomed-cart-updated", sync)
  }, [])

  const subtotal = cartSubtotal(items)
  const vat = subtotal * 0.2
  const shipping = items.length ? 25 : 0
  const total = subtotal + vat + shipping

  return (
    <main className={styles["cart-content"]}>
      <section className={styles.panel}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.eyebrow}>YOUR REQUEST</p>
            <h1>Your basket</h1>
            <p>Review products and quantities before continuing to checkout.</p>
          </div>
          <button className={styles.secondary} onClick={() => go("/products")}>Continue browsing</button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <h2>Your cart is empty</h2>
            <p>Add a product to begin an order request.</p>
            <button className={styles.primary} onClick={() => go("/products")}>Browse products</button>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.items}>
              {items.map((item) => (
                <article className={styles.item} key={item.slug}>
                  <img src={item.image} alt="" className={styles.image} />
                  <div className={styles.itemInfo}>
                    <span className={styles.category}>{item.category}</span>
                    <h2>{item.title}</h2>
                    <p>{item.priceLabel || (item.price ? `£${item.price.toFixed(2)}` : "Price on request")}</p>
                    <div className={styles.controls}>
                      <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                      <strong>{item.quantity}</strong>
                      <button onClick={() => updateQuantity(item.slug, item.quantity + 1)}>+</button>
                      <button className={styles.remove} onClick={() => removeFromCart(item.slug)}>Remove</button>
                    </div>
                  </div>
                  <strong className={styles.lineTotal}>£{(item.price * item.quantity).toFixed(2)}</strong>
                </article>
              ))}
            </div>
            <aside className={styles.summary}>
              <h2>Order summary</h2>
              <div><span>Subtotal</span><strong>£{subtotal.toFixed(2)}</strong></div>
              <div><span>VAT (20%)</span><strong>£{vat.toFixed(2)}</strong></div>
              <div><span>Shipping</span><strong>£{shipping.toFixed(2)}</strong></div>
              <div className={styles.total}><span>Total</span><strong>£{total.toFixed(2)}</strong></div>
              <p className={styles.note}>No online payment will be taken. This submits an order request for review.</p>
              <button className={styles.primary} onClick={() => go("/checkout")}>Continue to checkout</button>
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}
