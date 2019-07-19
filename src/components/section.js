import React from "react"
import Container from "./container"
import styles from "../styles/section.module.css"

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <Container>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </Container>
  </section>
)

export default Section
