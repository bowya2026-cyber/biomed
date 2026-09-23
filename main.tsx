import { StrictMode, useEffect, useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import Home from "./Page"
import About from "./About"
import Products from "./Products"
import CustomOrders from "./CustomOrders"
import Facilities from "./Facilities"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Cart from "./Cart"
import Checkout from "./Checkout"
import OrderConfirmation from "./OrderConfirmation"
import EventsSlug from "./EventsSlug"
import ProductsSlug from "./ProductsSlug"
import Training from "./Training"
import Publications from "./Publications"
import Researchers from "./Researchers"
import BiomedShedNavigation from "./BiomedShedNavigation"
import { CMS } from "./cms"

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const page = useMemo(() => {
    const clean = path.replace(/\/+$/, "") || "/"
    if (clean === "/") return <Home />
    if (clean === "/about") return <About />
    if (clean === "/products") return <Products />
    if (clean === "/custom-orders") return <CustomOrders />
    if (clean === "/facilities") return <Facilities />
    if (clean === "/gallery") return <Gallery />
    if (clean === "/contact") return <Contact />
    if (clean === "/cart") return <Cart />
    if (clean === "/checkout") return <Checkout />
    if (clean === "/order-confirmation") return <OrderConfirmation />
    if (clean === "/training") return <Training />
    if (clean === "/publications") return <Publications />
    if (clean === "/researchers") return <Researchers />
    if (clean.startsWith("/products/")) {
      const slug = decodeURIComponent(clean.split("/").pop() || "")
      const item = CMS.Products.find((p) => p.slug === slug) || CMS.Products[0]
      return <ProductsSlug item={item} />
    }
    if (clean.startsWith("/events/")) {
      const slug = decodeURIComponent(clean.split("/").pop() || "")
      const item = CMS.Events.find((e) => e.slug === slug) || CMS.Events[0]
      return <EventsSlug item={item} />
    }
    return <Home />
  }, [path])

  return (
    <>
      <BiomedShedNavigation />
      {page}
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
