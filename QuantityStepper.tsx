import styles from "./QuantityStepper.module.css"

interface Props {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
}

export default function QuantityStepper({ value = 1, onChange, min = 1, max = 5 }: Props) {
  const set = (next: number) => onChange?.(Math.min(max, Math.max(min, next)))
  return (
    <div className={styles["quantity-1"]} data-variant={`Quantity ${value}`}>
      <button type="button" className={styles["decrease-quantity"]} onClick={() => set(value - 1)} aria-label="Decrease quantity">−</button>
      <p className={styles["quantity"]}>{value}</p>
      <button type="button" className={styles["increase-quantity"]} onClick={() => set(value + 1)} aria-label="Increase quantity">+</button>
    </div>
  )
}
