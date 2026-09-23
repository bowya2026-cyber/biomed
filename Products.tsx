import { useEffect } from "react"
import styles from "./Products.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import JoinNowSubmitButton from "./JoinNowSubmitButton"
import { go } from "./router"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["products-hero"]}>
        <div className={styles["hero-blue-organic-shape"]} />
        <div className={styles["hero-copy"]}>
          <div className={styles["products-back-home"]} data-reveal="">
            <div className={styles["back-home-button"]} onClick={() => go("/")} role="link" tabIndex={0}>
              {/* TODO: external Framer module "Arrow Left" — reimplement or swap for an npm equivalent */}
              <p className={styles["back-home-label"]}>{"Back Home Label"}</p>
            </div>
          </div>
          <p className={styles["hero-eyebrow"]}>{"Hero Eyebrow"}</p>
          <p className={styles["hero-headline"]}>{"Hero Headline"}</p>
          <p className={styles["hero-description"]}>{"Hero Description"}</p>
          <div className={styles["hero-actions"]} data-reveal="">
            <div className={styles["browse-products"]}>
              <p className={styles["browse-products-label"]}>{"Browse Products Label"}</p>
            </div>
          </div>
          <div className={styles["hero-feature-points"]} data-reveal="">
            <div className={styles["research-quality"]}>
              <div className={styles["research-quality-icon"]}>
                {/* TODO: external Framer module "Badge Check" — reimplement or swap for an npm equivalent */}
              </div>
              <p className={styles["research-quality-label"]}>{"Research Quality Label"}</p>
            </div>
            <div className={styles["trusted-equipment"]}>
              <div className={styles["trusted-equipment-icon"]}>
                {/* TODO: external Framer module "Shield Check" — reimplement or swap for an npm equivalent */}
              </div>
              <p className={styles["trusted-equipment-label"]}>{"Trusted Equipment Label"}</p>
            </div>
            <div className={styles["expert-technical-support"]}>
              <div className={styles["expert-support-icon"]}>
                {/* TODO: external Framer module "Briefcase Medical" — reimplement or swap for an npm equivalent */}
              </div>
              <p className={styles["expert-support-label"]}>{"Expert Support Label"}</p>
            </div>
          </div>
        </div>
        <div className={styles["hero-laboratory-visual"]}>
          <div className={styles["biomedical-laboratory-image"]} />
          <div className={styles["research-ready-badge"]} data-reveal="">
            <p className={styles["research-ready-title"]}>{"Research Ready Title"}</p>
            <p className={styles["research-ready-subtitle"]}>{"Research Ready Subtitle"}</p>
          </div>
          <div className={styles["microscope-floating-card"]} data-reveal="">
            <p className={styles["microscope-product-name"]}>{"Microscope Product Name"}</p>
            <p className={styles["microscope-availability"]}>{"Microscope Availability"}</p>
          </div>
        </div>
      </div>
      <div className={styles["benefits-strip"]}>
        <div className={styles["fast-equipment-requests"]}>
          <div className={styles["fast-requests-icon"]} data-reveal="">
            {/* TODO: external Framer module "Arrow Right" — reimplement or swap for an npm equivalent */}
          </div>
          <p className={styles["fast-requests-label"]}>{"Fast Requests Label"}</p>
        </div>
        <div className={styles["expert-technical-support2"]}>
          <div className={styles["technical-support-icon"]} data-reveal="">
            {/* TODO: external Framer module "Briefcase Medical" — reimplement or swap for an npm equivalent */}
          </div>
          <p className={styles["technical-support-label"]}>{"Technical Support Label"}</p>
        </div>
        <div className={styles["research-collaboration"]}>
          <div className={styles["research-collaboration-icon"]} data-reveal="">
            {/* TODO: external Framer module "Atom" — reimplement or swap for an npm equivalent */}
          </div>
          <p className={styles["research-collaboration-label"]}>{"Research Collaboration Label"}</p>
        </div>
      </div>
      <div className={styles["featured-equipment-section"]}>
        <div className={styles["featured-equipment-header"]}>
          <div className={styles["featured-equipment-heading"]} data-reveal="">
            <p className={styles["featured-equipment-eyebrow"]}>{"Featured Equipment Eyebrow"}</p>
            <p className={styles["featured-equipment-title"]}>{"Featured Equipment Title"}</p>
          </div>
        </div>
        <div className={styles["featured-equipment-canvas-grid"]}>
          <div className={styles["biomedical-making-fundamentals-card"]} data-reveal="">
            <div className={styles["equipment-image"]} />
            <div className={styles["equipment-meta"]}>
              <p className={styles["equipment-category"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row"]}>
                <p className={styles["equipment-price"]}>{"Equipment Price"}</p>
                <div className={styles["view-details"]} onClick={() => go("/products/custom-3d-print-design-and-manufacture")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["sensor-connectors-card"]} data-reveal="">
            <div className={styles["equipment-image2"]} />
            <div className={styles["equipment-meta2"]}>
              <p className={styles["equipment-category2"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title2"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description2"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row2"]}>
                <p className={styles["equipment-price2"]}>{"Equipment Price"}</p>
                <div className={styles["view-details2"]} onClick={() => go("/products/custom-3d-printed-connectors")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label2"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["custom-flow-cells-card"]} data-reveal="">
            <div className={styles["equipment-image3"]} />
            <div className={styles["equipment-meta3"]}>
              <p className={styles["equipment-category3"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title3"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description3"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row3"]}>
                <p className={styles["equipment-price3"]}>{"Equipment Price"}</p>
                <div className={styles["view-details3"]} onClick={() => go("/products/custom-design-flow-cell")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label3"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["text"]} data-reveal="">
            <div className={styles["equipment-image4"]} />
            <div className={styles["equipment-meta4"]}>
              <p className={styles["equipment-category4"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title4"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description4"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row4"]}>
                <p className={styles["equipment-price4"]}>{"Equipment Price"}</p>
                <div className={styles["view-details4"]} onClick={() => go("/products/custom-design-flow-cell-(no-assembly)")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label4"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["text2"]} data-reveal="">
            <div className={styles["equipment-image5"]} />
            <div className={styles["equipment-meta5"]}>
              <p className={styles["equipment-category5"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title5"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description5"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row5"]}>
                <p className={styles["equipment-price5"]}>{"Equipment Price"}</p>
                <div className={styles["view-details5"]} onClick={() => go("/products/custom-sensor-manufacture")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label5"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["custom-sensor-manufacture-card"]} data-reveal="">
            <div className={styles["equipment-image6"]} />
            <div className={styles["equipment-meta6"]}>
              <p className={styles["equipment-category6"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title6"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description6"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row6"]}>
                <p className={styles["equipment-price6"]}>{"Equipment Price"}</p>
                <div className={styles["view-details6"]} onClick={() => go("/products/custom-sensor-manufacture")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label6"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["custom-biosensor-manufacture-card"]} data-reveal="">
            <div className={styles["equipment-image7"]} />
            <div className={styles["equipment-meta7"]}>
              <p className={styles["equipment-category7"]}>{"Equipment Category"}</p>
              <p className={styles["equipment-title7"]}>{"Equipment Title"}</p>
              <p className={styles["equipment-description7"]}>{"Equipment Description"}</p>
              <div className={styles["price-and-cta-row7"]}>
                <p className={styles["equipment-price7"]}>{"Equipment Price"}</p>
                <div className={styles["view-details7"]} onClick={() => go("/products/custom-biosensor-manufacture")} role="link" tabIndex={0}>
                  <p className={styles["view-details-label7"]}>{"View Details Label"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["community-section"]}>
        <div className={styles["community-signup-panel"]}>
          <div className={styles["community-signup-copy"]} data-reveal="">
            <p className={styles["community-eyebrow"]}>{"Community Eyebrow"}</p>
            <p className={styles["community-title"]}>{"Community Title"}</p>
            <p className={styles["community-description"]}>{"Community Description"}</p>
            <div className={styles["community-signup-form"]}>
              <div className={styles["email-field-label"]}>
                <p className={styles["email-label-text"]}>{"Email Label Text"}</p>
                <input className={styles["form-input"]} type="email" name="email-label-text" aria-label={"Email Label Text"} />
              </div>
              <JoinNowSubmitButton />
            </div>
          </div>
          <div className={styles["community-quote-card"]} data-reveal="">
            <div className={styles["quote-mark"]}>
              <p className={styles["quote-mark-text"]}>{"Quote Mark Text"}</p>
            </div>
            <p className={styles["community-quote"]}>{"Community Quote"}</p>
            <p className={styles["community-quote-caption"]}>{"Community Quote Caption"}</p>
          </div>
        </div>
      </div>
      <div className={styles["trust-and-values-section"]}>
        <div className={styles["trust-and-values-header"]}>
          <p className={styles["values-eyebrow"]}>{"Values Eyebrow"}</p>
          <p className={styles["values-title"]}>{"Values Title"}</p>
        </div>
        <div className={styles["trust-values-grid"]}>
          <div className={styles["research-quality-value"]} data-reveal="">
            <div className={styles["research-quality-value-icon"]}>
              {/* TODO: external Framer module "Badge Check" — reimplement or swap for an npm equivalent */}
            </div>
            <p className={styles["research-quality-value-title"]}>{"Research Quality Value Title"}</p>
            <p className={styles["research-quality-value-copy"]}>{"Research Quality Value Copy"}</p>
          </div>
          <div className={styles["sustainable-innovation-value"]} data-reveal="">
            <div className={styles["sustainable-innovation-value-icon"]}>
              {/* TODO: external Framer module "Atom" — reimplement or swap for an npm equivalent */}
            </div>
            <p className={styles["sustainable-innovation-value-title"]}>{"Sustainable Innovation Value Title"}</p>
            <p className={styles["sustainable-innovation-value-copy"]}>{"Sustainable Innovation Value Copy"}</p>
          </div>
          <div className={styles["positive-research-impact-value"]} data-reveal="">
            <div className={styles["text3"]}>
              {/* TODO: external Framer module "Heart Handshake" — reimplement or swap for an npm equivalent */}
            </div>
            <p className={styles["text4"]}>{"Positive Research Impact Value Title"}</p>
            <p className={styles["text5"]}>{"Positive Research Impact Value Copy"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
