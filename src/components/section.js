import React from "react"
import styles from "./section.module.css"

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
)

export default Section
