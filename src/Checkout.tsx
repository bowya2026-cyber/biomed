import { FormEvent, useMemo, useState } from "react"
import styles from "./Checkout.module.css"
import "./theme.css"
import { CART_KEY, LAST_REQUEST_KEY, cartSubtotal, makeOrderReference, readCart } from "./cart"
import { go } from "./router"

export default function Page() {
  const items = useMemo(() => readCart(), [])
  const subtotal = cartSubtotal(items)
  const vat = subtotal * 0.2
  const shipping = items.length ? 25 : 0
  const total = subtotal + vat + shipping
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!items.length) { setError("Your cart is empty."); return }
    const form = new FormData(e.currentTarget)
    if (form.get("terms") !== "on" || form.get("licence") !== "on") {
      setError("Please accept both the Terms & Conditions and Licensing Agreement.")
      return
    }
    setSaving(true); setError("")
    const order = {
      orderReference: makeOrderReference(),
      submittedAt: new Date().toISOString(),
      customer: {
        name: form.get("name"), email: form.get("email"), phone: form.get("phone"),
        organisation: form.get("organisation"), address: form.get("address"), notes: form.get("notes")
      },
      items,
      subtotal, vat, shipping, total,
      termsAccepted: true,
      licensingAccepted: true,
    }

    try {
      const webhook = (import.meta.env.VITE_ORDER_WEBHOOK_URL || "").trim()
      if (webhook) {
        const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(order) })
        if (!response.ok) throw new Error("Order service returned an error")
      }
      localStorage.setItem(LAST_REQUEST_KEY, JSON.stringify(order))
      localStorage.removeItem(CART_KEY)
      window.dispatchEvent(new CustomEvent("biomed-cart-updated"))
      go("/order-confirmation")
    } catch {
      setError("We could not submit the order request. Please try again or contact Biomed SHED.")
      setSaving(false)
    }
  }

  return (
    <main className={styles["checkout-content"]}>
      <section className={styles.panel}>
        <p className={styles.eyebrow}>ORDER REQUEST</p>
        <h1>Checkout</h1>
        <p className={styles.intro}>No payment will be taken online. Submit your details and the Biomed SHED team will review your request.</p>
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={submit}>
            <h2>Contact & delivery details</h2>
            <label>Full name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" /></label>
            <label>Organisation<input name="organisation" /></label>
            <label>Delivery address<textarea name="address" rows={4} required /></label>
            <label>Order notes<textarea name="notes" rows={4} /></label>
            <label className={styles.check}><input type="checkbox" name="terms" required /> <span>I have read and agree to the University Terms & Conditions.</span></label>
            <label className={styles.check}><input type="checkbox" name="licence" required /> <span>I have read and agree to the applicable Licensing Agreement.</span></label>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.primary} type="submit" disabled={saving}>{saving ? "Submitting…" : "Submit Order Request"}</button>
          </form>
          <aside className={styles.summary}>
            <h2>Your request</h2>
            {items.map((item) => <div className={styles.orderItem} key={item.slug}><span>{item.title} × {item.quantity}</span><strong>£{(item.price * item.quantity).toFixed(2)}</strong></div>)}
            <div><span>Subtotal</span><strong>£{subtotal.toFixed(2)}</strong></div>
            <div><span>VAT</span><strong>£{vat.toFixed(2)}</strong></div>
            <div><span>Shipping</span><strong>£{shipping.toFixed(2)}</strong></div>
            <div className={styles.total}><span>Total</span><strong>£{total.toFixed(2)}</strong></div>
            <button className={styles.secondary} type="button" onClick={() => go("/cart")}>Back to cart</button>
          </aside>
        </div>
      </section>
    </main>
  )
}
