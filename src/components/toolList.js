import React from "react"
import styles from "../styles/toolList.module.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5, faCss3Alt, faJs, faReact ,faVuejs, faBootstrap,
  faSass, faWordpressSimple, faGithub, faGit, faSketch,
  faInvision, faAdobe, faFigma
} from '@fortawesome/free-brands-svg-icons'

import GatsbyLogo from "../tools/logo-gatsby.svg"
import NetlifyLogo from "../tools/logo-netlify.svg"

const ToolList = () => (
  <>
    <h3 className={styles.listTitle}>Web Development</h3>
    <div className={styles.row}>
      <div className={styles.col}>
        <ToolCard title="HTML"><FontAwesomeIcon icon={[`fab`, `html5`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="CSS"><FontAwesomeIcon icon={[`fab`, `css3-alt`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="JavaScript"><FontAwesomeIcon icon={[`fab`, `js`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="React"><FontAwesomeIcon icon={[`fab`, `react`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Vue.js"><FontAwesomeIcon icon={[`fab`, `vuejs`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Gatsby"><GatsbyLogo /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Bootstrap"><FontAwesomeIcon icon={[`fab`, `bootstrap`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Sass"><FontAwesomeIcon icon={[`fab`, `sass`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="WordPress"><FontAwesomeIcon icon={[`fab`, `wordpress-simple`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Github"><FontAwesomeIcon icon={[`fab`, `github`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Git"><FontAwesomeIcon icon={[`fab`, `git`]} /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Netlify"><NetlifyLogo /></ToolCard>
      </div>
    </div>

    <h3 className={styles.listTitle}>Web Design</h3>
    <div className={styles.row}>
      <div className={styles.col}>
        <ToolCard title="Sketch"><FontAwesomeIcon icon={[`fab`, `sketch`]}  /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="InVision"><FontAwesomeIcon icon={[`fab`, `invision`]}  /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Adobe CC"><FontAwesomeIcon icon={[`fab`, `adobe`]}  /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Figma"><FontAwesomeIcon icon={[`fab`, `figma`]}  /></ToolCard>
      </div>
    </div>
  </>
)

const ToolCard = ({ children, title }) => (
  <div className={styles.toolCard}>
    {children}
    <h4 className={styles.title}>{title}</h4>
  </div>
)

// Register FontAwesome icons
library.add(
  faHtml5, faCss3Alt, faJs, faReact, faVuejs, faBootstrap,
  faSass, faWordpressSimple, faGithub, faGit, faSketch,
  faInvision, faAdobe, faFigma
)

export default ToolList 
