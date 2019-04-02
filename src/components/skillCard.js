import React from "react"
import styles from "./skillCard.module.css"

const SkillCard = ({ children, title }) => (
  <div className={styles.skillCard}>
    {children}
    <h3 className={styles.title}>{title}</h3>
  </div>
)

export default SkillCard
