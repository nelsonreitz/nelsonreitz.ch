import React from "react"

const Section = ({ title, children }) => (
  <section>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
)

export default Section
