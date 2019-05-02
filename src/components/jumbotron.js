import React from "react"
import styles from "./jumbotron.module.css"

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <div className="container">
      <h1>Hi! I am Nelson Reitz, a Swiss Front-end Developer</h1>
      <p>I build user interfaces for websites and apps. Currently based in Lausanne. Previously @ DevFactory.</p>

      <p><em>Now available for hire</em> <span className={styles.emoji} role="img" aria-label="Sun">☀️</span></p>
      <a className={styles.cta} href="mailto:nelson.reitz@gmail.com">Get in touch</a>
    </div>
  </div>
)

export default Jumbotron
