import React from "react"
import styles from "../styles/skillList.module.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileCode, faUserFriends, faDesktop, faArrowsAltH, faSitemap,
  faAtom, faUniversalAccess, faMousePointer, faPalette, faFont, faPencilAlt
} from '@fortawesome/free-solid-svg-icons'

const SkillList = () => (
  <div className={styles.row}>
    <div className={styles.col}>
      <SkillCard title="Front-end Development"><FontAwesomeIcon icon="file-code" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="UX Design"><FontAwesomeIcon icon="user-friends" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="UI Design"><FontAwesomeIcon icon="desktop" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Responsive Design"><FontAwesomeIcon icon="arrows-alt-h" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Information Architecture"><FontAwesomeIcon icon="sitemap" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Design Systems"><FontAwesomeIcon icon="atom" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Accessibility"><FontAwesomeIcon icon="universal-access" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Interaction Design"><FontAwesomeIcon icon="mouse-pointer" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Brand Identity"><FontAwesomeIcon icon="palette" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Typography"><FontAwesomeIcon icon="font" /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Micro Copywriting"><FontAwesomeIcon icon="pencil-alt" /></SkillCard>
    </div>
  </div>
)

const SkillCard = ({ children, title }) => (
  <div className={styles.skillCard}>
    {children}
    <h3 className={styles.title}>{title}</h3>
  </div>
)

library.add(
  faFileCode, faUserFriends, faDesktop, faArrowsAltH, faSitemap,
  faAtom, faUniversalAccess, faMousePointer, faPalette, faFont, faPencilAlt
)

export default SkillList 
