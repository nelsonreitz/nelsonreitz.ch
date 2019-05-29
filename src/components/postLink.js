import React from "react"
import { Link } from "gatsby"
import styles from "../styles/postLink.module.css"

const PostLink = ({ to, title, date }) => (
  <Link
    to={to}
    className={styles.postLink}
  >
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.date}>{date}</p>
  </Link>
)

export default PostLink
