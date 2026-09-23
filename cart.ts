export const CART_KEY = "biomed-shed-cart"
export const LAST_REQUEST_KEY = "biomed-shed-last-request"

export interface CartItem {
  slug: string
  title: string
  category: string
  image: string
  price: number
  priceLabel?: string
  quantity: number
}

export function parsePrice(label?: string): number {
  if (!label) return 0
  const match = label.replace(/,/g, "").match(/£\s*([0-9]+(?:\.[0-9]+)?)/)
  return match ? Number(match[1]) : 0
}

export function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent("biomed-cart-updated"))
}

export function addToCart(item: CartItem) {
  const cart = readCart()
  const existing = cart.find((x) => x.slug === item.slug)
  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + item.quantity)
  } else {
    cart.push(item)
  }
  writeCart(cart)
}

export function updateQuantity(slug: string, quantity: number) {
  const cart = readCart()
    .map((item) => item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item)
  writeCart(cart)
}

export function removeFromCart(slug: string) {
  writeCart(readCart().filter((item) => item.slug !== slug))
}

export function cartCount(): number {
  return readCart().reduce((sum, item) => sum + item.quantity, 0)
}

export function cartSubtotal(items = readCart()): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function makeOrderReference(): string {
  const now = new Date()
  const stamp = now.toISOString().replace(/[-:TZ.]/g, "").slice(0, 12)
  return `BMS-${stamp}`
}
