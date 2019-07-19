import React from "react"
import Container from "./container"
import styles from "../styles/jumbotron.module.css"

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <Container>
      <h1>Hi! I am Nelson Reitz, a Swiss Front-end Developer</h1>
      <p>I build user interfaces for websites and apps. Currently based in Lausanne. Previously @ DevFactory.</p>
      <p className={styles.accent}><em>Now available for hire</em> <span className={styles.emoji} role="img" aria-label="Sparkles">✨</span></p>
      <a className={styles.cta} href="mailto:nelson.reitz@gmail.com">Get in touch</a>
    </Container>
  </div>
)

export default Jumbotron
