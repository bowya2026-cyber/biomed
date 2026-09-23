# Biomed SHED React export – fixed test build

Changes added:
- Client-side routing for all exported routes.
- Dynamic `/products/:slug` and `/events/:slug` routes backed by the exported CMS data.
- Working localStorage cart under `biomed-shed-cart`.
- Product detail quantity controls and Add to Cart.
- Cart quantity/remove/subtotal/VAT/shipping calculations.
- Checkout form with required Terms & Conditions and Licensing Agreement acceptance.
- Order confirmation reference stored under `biomed-shed-last-request`.
- Optional webhook support via `VITE_ORDER_WEBHOOK_URL` for the later Excel/email automation.
- Cloudflare Pages SPA fallback in `public/_redirects`.

## Cloudflare Pages deployment
Recommended Git deployment settings:
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

The current checkout works without a webhook by saving the request locally and showing confirmation. To send real orders later, configure `VITE_ORDER_WEBHOOK_URL` in Cloudflare environment variables.
