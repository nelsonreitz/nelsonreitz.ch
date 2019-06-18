import React from "react"
import { Link } from "gatsby"
import styles from "../styles/topbar.module.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Topbar = () => (
  <div className={styles.topbar}>
    <Link
      className={styles.siteTitle}
      to="/"
    >
      Nelson Reitz
    </Link>

    <a
      className={styles.socialLink}
      href="//github.com/nelsonreitz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={[`fab`, `github`]} />
      <span className={styles.label}>Github</span>
    </a>

    <a
      className={styles.socialLink}
      href="//twitter.com/nelsreitz"
      target="_blank" 
      rel="noopener noreferrer"
      >
      <FontAwesomeIcon icon={[`fab`, `twitter`]} />
      <span className={styles.label}>Twitter</span>
    </a>

    <a
      className={styles.socialLink}
      href="//linkedin.com/in/nelsonreitz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={[`fab`, `linkedin-in`]} />
      <span className={styles.label}>LinkedIn</span>
    </a>
  </div>
)

// Register FontAwesome icons
library.add(faGithub, faTwitter, faLinkedinIn)

export default Topbar
