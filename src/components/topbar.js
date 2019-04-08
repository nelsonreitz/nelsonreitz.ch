import React from "react"

import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import styles from "./topbar.module.css"

const Topbar = () => (
  <div className={styles.topbar}>
    <a
      className={styles.socialLink}
      href="//github.com/nelsonreitz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
      <span className={styles.label}>Github</span>
    </a>

    <a
      className={styles.socialLink}
      href="//twitter.com/nelsreitz"
      target="_blank" 
      rel="noopener noreferrer"
      >
      <FaTwitter />
      <span className={styles.label}>Twitter</span>
    </a>

    <a
      className={styles.socialLink}
      href="//linkedin.com/nelsonreitz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
      <span className={styles.label}>LinkedIn</span>
    </a>
  </div>
)

export default Topbar
