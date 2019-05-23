import React from "react"
import styles from "../styles/button.module.css"

const Button = ({ to, children }) => (
  <a className={styles.btn} href={to}>{children}</a>
)

export default Button
