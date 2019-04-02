import React from "react"
import { 
  FaFileCode,
  FaUserFriends,
  FaDesktop,
  FaArrowsAltH,
  FaSitemap,
  FaAtom,
  FaUniversalAccess,
  FaMousePointer,
  FaPalette,
  FaFont,
  FaPencilAlt
} from 'react-icons/fa'
import styles from "./skillList.module.css"

const SkillList = () => (
  <div className={styles.row}>
    <div className={styles.col}>
      <SkillCard title="Front-end Development"><FaFileCode /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="UX Design"><FaUserFriends /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="UI Design"><FaDesktop /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Responsive Design"><FaArrowsAltH/></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Information Architecture"><FaSitemap /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Design Systems"><FaAtom /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Accessibility"><FaUniversalAccess /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Interaction Design"><FaMousePointer /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Brand Identity"><FaPalette /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Typography"><FaFont /></SkillCard>
    </div>

    <div className={styles.col}>
      <SkillCard title="Micro Copywriting"><FaPencilAlt /></SkillCard>
    </div>
  </div>
)

const SkillCard = ({ children, title }) => (
  <div className={styles.skillCard}>
    {children}
    <h3 className={styles.title}>{title}</h3>
  </div>
)

export default SkillList 
