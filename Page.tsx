import { useEffect } from "react"
import styles from "./Page.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import ProductEnquirySubmit from "./ProductEnquirySubmit"
import { go } from "./router"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["opening-commerce-panel"]} data-reveal="">
        <div className={styles["opening-content"]}>
          <div className={styles["opening-copy"]}>
            <p className={styles["from-idea-to-prototype"]}>{"FROM IDEA TO PROTOTYPE"}</p>
            <p className={styles["text"]}>{"Where Biomedical Innovation Gets Built​"}</p>
            <p className={styles["text2"]}>{"Explore trusted biomedical products, custom manufacturing, and practical training from the Biomed Shed team."}</p>
            <div className={styles["opening-actions"]}>
              <div className={styles["shop-products"]} onClick={() => go("/products")} role="link" tabIndex={0}>
                <p className={styles["shop-products2"]}>{"Shop products"}</p>
              </div>
              <div className={styles["custom-orders"]} onClick={() => go("/custom-orders")} role="link" tabIndex={0}>
                <p className={styles["custom-orders2"]}>{"Custom orders"}</p>
              </div>
            </div>
          </div>
          <div className={styles["opening-visual"]} />
        </div>
      </div>
      <div className={styles["section-gap-above-learn"]} />
      <div className={styles["learn-about-biomed-shed"]} data-reveal="">
        <div className={styles["learn-about-copy"]}>
          <p className={styles["about-biomed-shed"]}>{"ABOUT BIOMED SHED"}</p>
          <p className={styles["learn-about-biomed-shed2"]}>{"Learn about Biomed Shed"}</p>
          <p className={styles["text3"]}>{"Explore our facilities, biomedical manufacturing capabilities and collaborative approach to turning research into practical technology."}</p>
        </div>
        <div className={styles["learn-about-actions"]}>
          <div className={styles["learn-about-cta"]}>
            <p className={styles["learn-more"]}>{"Learn more"}</p>
          </div>
          <div className={styles["linkedin-cta"]}>
            {/* TODO: external Framer module "Linkedin" — reimplement or swap for an npm equivalent */}
            <p className={styles["linkedin"]}>{"LinkedIn"}</p>
          </div>
        </div>
      </div>
      <div className={styles["featured-products-intro"]} data-reveal="">
        <div className={styles["products-heading"]}>
          <p className={styles["popular-products"]}>{"POPULAR PRODUCTS"}</p>
          <p className={styles["text4"]}>{"Popular products for microfluidic work."}</p>
        </div>
        <p className={styles["all-products"]} onClick={() => go("/products")} role="link" tabIndex={0}>{"All products →"}</p>
      </div>
      <div className={styles["popular-products-editable"]} data-reveal="">
        <div className={styles["product-card"]}>
          <div className={styles["product-image"]} />
          <div className={styles["product-meta"]}>
            <p className={styles["custom-orders3"]}>{"CUSTOM ORDERS"}</p>
            <p className={styles["sensor-connectors"]}>{"Sensor Connectors"}</p>
            <p className={styles["text5"]}>{"Fully customisable 3D printed electrode connectors for biosensor and electrochemical sensing workflows."}</p>
          </div>
          <div className={styles["product-footer"]}>
            <p className={styles["starting-at-24-99"]}>{"Starting at £24.99"}</p>
            <div className={styles["view-product-cta"]} onClick={() => go("/products/custom-3d-printed-connectors")} role="link" tabIndex={0}>
              <p className={styles["view-product"]}>{"View product →"}</p>
            </div>
          </div>
        </div>
        <div className={styles["product-card2"]}>
          <div className={styles["product-image2"]} />
          <div className={styles["product-meta2"]}>
            <p className={styles["custom-orders4"]}>{"CUSTOM ORDERS"}</p>
            <p className={styles["text6"]}>{"Custom Flow Cells - Fully Assembled"}</p>
            <p className={styles["text7"]}>{"Fully assembled custom flow cell design and manufacture for microfluidic and electrochemical sensing applications."}</p>
          </div>
          <div className={styles["product-footer2"]}>
            <p className={styles["starting-at-18"]}>{"Starting at £18"}</p>
            <div className={styles["view-product-cta2"]} onClick={() => go("/products/custom-design-flow-cell")} role="link" tabIndex={0}>
              <p className={styles["view-product2"]}>{"View product →"}</p>
            </div>
          </div>
        </div>
        <div className={styles["product-card3"]}>
          <div className={styles["product-image3"]} />
          <div className={styles["product-meta3"]}>
            <p className={styles["custom-orders5"]}>{"CUSTOM ORDERS"}</p>
            <p className={styles["text8"]}>{"DIY Custom Flow Cell Layers"}</p>
            <p className={styles["text9"]}>{"DIY custom flow cell layers supplied without assembly for flexible project integration."}</p>
          </div>
          <div className={styles["product-footer3"]}>
            <p className={styles["starting-at-7"]}>{"Starting at £7"}</p>
            <div className={styles["view-product-cta3"]} onClick={() => go("/products/custom-design-flow-cell-(no-assembly)")} role="link" tabIndex={0}>
              <p className={styles["view-product3"]}>{"View product →"}</p>
            </div>
          </div>
        </div>
        <div className={styles["product-card4"]}>
          <div className={styles["product-image4"]} />
          <div className={styles["product-meta4"]}>
            <p className={styles["custom-orders6"]}>{"CUSTOM ORDERS"}</p>
            <p className={styles["text10"]}>{"Custom 3D Print Design and Manufacture"}</p>
            <p className={styles["text11"]}>{"Design and manufacture support for custom biomedical and biosensing components."}</p>
          </div>
          <div className={styles["product-footer4"]}>
            <p className={styles["starting-at-400"]}>{"Starting at £400"}</p>
            <div className={styles["view-product-cta4"]} onClick={() => go("/products/custom-3d-print-design-and-manufacture")} role="link" tabIndex={0}>
              <p className={styles["view-product4"]}>{"View product →"}</p>
            </div>
          </div>
        </div>
        <div className={styles["product-card5"]}>
          <div className={styles["product-image5"]} />
          <div className={styles["product-meta5"]}>
            <p className={styles["custom-orders7"]}>{"CUSTOM ORDERS"}</p>
            <p className={styles["custom-sensor-manufacture"]}>{"Custom Sensor Manufacture"}</p>
            <p className={styles["text12"]}>{"Custom sensor manufacture for research and development programmes."}</p>
          </div>
          <div className={styles["product-footer5"]}>
            <p className={styles["text13"]}>{"Starting at - to be confirmed"}</p>
            <div className={styles["view-product-cta5"]} onClick={() => go("/products/custom-sensor-manufacture")} role="link" tabIndex={0}>
              <p className={styles["view-product5"]}>{"View product →"}</p>
            </div>
          </div>
        </div>
        <div className={styles["product-card6"]}>
          <div className={styles["product-image6"]} />
          <div className={styles["product-meta6"]}>
            <p className={styles["custom-orders8"]}>{"CUSTOM ORDERS"}</p>
            <p className={styles["custom-biosensor-manufacture"]}>{"Custom Biosensor Manufacture"}</p>
            <p className={styles["text14"]}>{"Custom biosensor manufacture for research and development programmes."}</p>
          </div>
          <div className={styles["product-footer6"]}>
            <p className={styles["starting-at-1000"]}>{"Starting at £1000"}</p>
            <div className={styles["view-product-cta6"]} onClick={() => go("/products/custom-biosensor-manufacture")} role="link" tabIndex={0}>
              <p className={styles["view-product6"]}>{"View product →"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["technology-researchers"]} data-reveal="">
        <p className={styles["text15"]}>{"Meet the Technology Researchers."}</p>
        <div className={styles["editable-researcher-profiles"]}>
          <div className={styles["researcher-card"]}>
            <div className={styles["researcher-photo"]} />
            <p className={styles["dr-alexandra-dobrea"]}>{"Dr Alexandra Dobrea"}</p>
            <p className={styles["founder-and-cto"]}>{"Founder and CTO"}</p>
            <p className={styles["visit-profile"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card2"]}>
            <div className={styles["researcher-photo2"]} />
            <p className={styles["alisdair-gordon"]}>{"Alisdair Gordon"}</p>
            <p className={styles["founder-and-cso"]}>{"Founder and CSO"}</p>
            <p className={styles["visit-profile2"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card3"]}>
            <div className={styles["researcher-photo3"]} />
            <p className={styles["dr-jessie-howell"]}>{"Dr Jessie Howell"}</p>
            <p className={styles["founder-and-ceo"]}>{"Founder and CEO"}</p>
            <p className={styles["visit-profile3"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card4"]}>
            <div className={styles["researcher-photo4"]} />
            <p className={styles["oscar-weipers"]}>{"Oscar Weipers"}</p>
            <p className={styles["development-engineer"]}>{"Development Engineer"}</p>
            <p className={styles["visit-profile4"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card5"]}>
            <div className={styles["researcher-photo5"]} />
            <p className={styles["lilian-collins"]}>{"Lilian Collins"}</p>
            <p className={styles["chemist-and-production-associate"]}>{"Chemist and Production Associate"}</p>
            <p className={styles["visit-profile5"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card6"]}>
            <div className={styles["researcher-photo6"]} />
            <p className={styles["prof-damion-corrigan"]}>{"Prof Damion Corrigan"}</p>
            <p className={styles["scientific-advisor"]}>{"Scientific Advisor"}</p>
            <p className={styles["visit-profile6"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["researcher-card7"]}>
            <div className={styles["researcher-photo7"]} />
            <p className={styles["dr-melanie-jimenez"]}>{"Dr Melanie Jimenez"}</p>
            <p className={styles["scientific-advisor2"]}>{"Scientific Advisor"}</p>
            <p className={styles["visit-profile7"]}>{"Visit profile"}</p>
          </div>
          <div className={styles["new-researcher-card"]}>
            <div className={styles["researcher-photo8"]} />
            <p className={styles["bowya-subramanian"]}>{"Bowya Subramanian"}</p>
            <p className={styles["web-designer"]}>{"Web Designer"}</p>
            <p className={styles["visit-profile8"]}>{"visit profile"}</p>
          </div>
        </div>
      </div>
      <div className={styles["work-with-us"]} data-reveal="">
        <div className={styles["work-with-us-copy"]}>
          <p className={styles["let-s-work-together"]}>{"LET’S WORK TOGETHER"}</p>
          <p className={styles["text16"]}>{"Turn a promising idea into something real."}</p>
          <p className={styles["text17"]}>{"Whether you need a prototype, specialist manufacturing, a training programme, or access to facilities, we can help shape the next step."}</p>
        </div>
        <div className={styles["enquiry-form"]}>
          <div className={styles["name-field"]}>
            <p className={styles["name"]}>{"Name"}</p>
            <input className={styles["form-input"]} type="text" name="name" aria-label={"Name"} />
          </div>
          <div className={styles["email-field"]}>
            <p className={styles["email"]}>{"Email"}</p>
            <input className={styles["form-input"]} type="email" name="email" aria-label={"Email"} />
          </div>
          <div className={styles["message-field"]}>
            <p className={styles["text18"]}>{"How can we help?"}</p>
            <input className={styles["form-input"]} type="text" name="how-can-we-help-" aria-label={"How can we help?"} />
          </div>
          <ProductEnquirySubmit />
        </div>
      </div>
      <div className={styles["upcoming-events"]} data-reveal="">
        <p className={styles["upcoming-events2"]}>{"UPCOMING EVENTS"}</p>
        <p className={styles["upcoming-events3"]}>{"Upcoming events"}</p>
        <div className={styles["editable-events-grid"]}>
          <div className={styles["biomedeng26"]}>
            <div className={styles["event-date"]}>
              <p className={styles["upcoming"]}>{"Upcoming"}</p>
            </div>
            <div className={styles["event-copy"]}>
              <p className={styles["biomedeng262"]}>{"BioMedEng26"}</p>
              <p className={styles["text19"]}>{"Come meet the team at the BioMedEng26 conference in Liverpool (3–4 September)!"}</p>
              <p className={styles["text20"]}>{"The Spine, Paddington Village, Liverpool"}</p>
            </div>
            <div className={styles["event-page-cta"]}>
              <p className={styles["event-page"]}>{"Event page"}</p>
            </div>
          </div>
          <div className={styles["microfluidics-research-open-lab"]}>
            <div className={styles["event-date2"]}>
              <p className={styles["upcoming2"]}>{"Upcoming"}</p>
            </div>
            <div className={styles["event-copy2"]}>
              <p className={styles["manufacturing-open-lab"]}>{"Manufacturing Open Lab​"}</p>
              <p className={styles["text21"]}>{"Meet the team, explore ourmanufacturing capabilities and discussopportunities for collaboration.​"}</p>
              <p className={styles["text22"]}>{"BioMed Shed, University of Strathclyde​"}</p>
            </div>
            <div className={styles["event-page-cta2"]}>
              <p className={styles["event-page2"]}>{"Event page"}</p>
            </div>
          </div>
          <div className={styles["custom-manufacturing-clinic"]}>
            <div className={styles["event-date3"]}>
              <p className={styles["upcoming3"]}>{"Upcoming"}</p>
            </div>
            <div className={styles["event-copy3"]}>
              <p className={styles["custom-design-clinic"]}>{"Custom Design Clinic​"}</p>
              <p className={styles["text23"]}>{"Bring a design challenge and getpractical guidance on how youmight implement it.​"}</p>
              <p className={styles["biomed-shed-university-ofstrathclyde"]}>{"BioMed Shed, University ofStrathclyde​​"}</p>
            </div>
            <div className={styles["event-page-cta3"]}>
              <p className={styles["event-page3"]}>{"Event page"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["faq"]} data-reveal="">
        <p className={styles["faq2"]}>{"FAQ"}</p>
        <p className={styles["text24"]}>{"Good questions make better projects."}</p>
        <div className={styles["faq-list"]}>
          <div className={styles["faq-card"]}>
            <p className={styles["text25"]}>{"Who do we work with?​"}</p>
            <p className={styles["text26"]}>{"We work with academic researchers, students, clinical collaborators and industrial partners across the biomedical engineering community."}</p>
          </div>
        </div>
      </div>
      <div className={styles["trust-and-capabilities"]} data-reveal="">
        <p className={styles["text27"]}>{"One team, from prototype to practice."}</p>
        <div className={styles["capabilities-grid"]}>
          <div className={styles["manufacturing-capability"]}>
            <p className={styles["custom-manufacturing"]}>{"Custom manufacturing"}</p>
            <p className={styles["from-ideas-toearly-prototypes"]}>{"From ideas toearly prototypes​"}</p>
          </div>
          <div className={styles["training-capability"]}>
            <p className={styles["practical-training"]}>{"Practical training"}</p>
            <p className={styles["text28"]}>{"Build confidence with hands-on  learning."}</p>
          </div>
          <div className={styles["facilities-capability"]}>
            <p className={styles["specialist-facilities"]}>{"Specialist facilities"}</p>
            <p className={styles["text29"]}>{"Laser cutting and engraving ,SLA and FDM 3D printing, plotter cutters and electronics workshop.​"}</p>
          </div>
          <div className={styles["support-capability"]}>
            <p className={styles["expert-support"]}>{"Expert support"}</p>
            <p className={styles["text30"]}>{"Our team has decades of experience in electrochemical sensing and microfluidics.​"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
