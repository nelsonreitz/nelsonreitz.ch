import React from "react"
import Button from "./button"
import styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <h2 className="sectionTitle">Contact</h2>
      <p>Feel free to contact me by email if you have questions or just want to discuss about front-end stuff. I am eager to share my passion for detailed, clean and user-centered products with you! You can also connect with me on <a href="https://ch.linkedin.com/in/nelsonreitz/en" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <Button to="mailto:nelson.reitz@gmail.com">Get in touch</Button>
    </div>
  </footer>
)

export default Footer