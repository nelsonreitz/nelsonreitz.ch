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
      <FaGithub /> Github
    </a>

    <a
      className={styles.socialLink}
      href="//twitter.com/nelsreitz"
      target="_blank" 
      rel="noopener noreferrer"
      >
      <FaTwitter /> Twitter
    </a>

    <a
      className={styles.socialLink}
      href="//linkedin.com/nelsonreitz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn /> LinkedIn
    </a>
  </div>
)

export default Topbar
