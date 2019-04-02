import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaSass,
  FaWordpressSimple,
  FaGithub,
} from 'react-icons/fa'
import {
  DiGit,
  DiBootstrap
} from 'react-icons/di'
import styles from "./toolList.module.css"

const ToolList = () => (
  <>
    <h3 className={styles.listTitle}>Web Development</h3>
    <div className={styles.row}>
      <div className={styles.col}>
        <ToolCard title="HTML"><FaHtml5 /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="CSS"><FaCss3Alt /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="JavaScript"><FaJs /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="React"><FaReact /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Vue.js"><FaVuejs /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Gatsby"></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Bootstrap"><DiBootstrap /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Sass"><FaSass /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="WordPress"><FaWordpressSimple /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Github"><FaGithub /></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Git"><DiGit /></ToolCard>
      </div>
    </div>

    <h3 className={styles.listTitle}>Web Design</h3>
    <div className={styles.row}>
      <div className={styles.col}>
        <ToolCard title="Sketch"></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="InVision"></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Adobe CC"></ToolCard>
      </div>

      <div className={styles.col}>
        <ToolCard title="Figma"></ToolCard>
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

export default ToolList 
