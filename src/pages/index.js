import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"
import SkillCard from "../components/skillCard"
import { FaFileCode, FaUserFriends, FaDesktop, FaArrowsAltH, FaSitemap, FaAtom, FaUniversalAccess, FaMousePointer, FaPalette, FaFont, FaPencilAlt } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end Design and Development" keywords={[`gatsby`, `application`, `react`]} />
    <Jumbotron />

    <Section title="My work">
      <SkillCard title="Front-end Development"><FaFileCode /></SkillCard>
      <SkillCard title="UX Design"><FaUserFriends /></SkillCard>
      <SkillCard title="UI Design"><FaDesktop /></SkillCard>
      <SkillCard title="Responsive Design"><FaArrowsAltH/></SkillCard>
      <SkillCard title="Information Architecture"><FaSitemap /></SkillCard>
      <SkillCard title="Design Systems"><FaAtom /></SkillCard>
      <SkillCard title="Accessibility"><FaUniversalAccess /></SkillCard>
      <SkillCard title="Interaction Design"><FaMousePointer /></SkillCard>
      <SkillCard title="Brand Identity"><FaPalette /></SkillCard>
      <SkillCard title="Typography"><FaFont /></SkillCard>
      <SkillCard title="Micro Copywriting"><FaPencilAlt /></SkillCard>
    </Section>

    <Section title="The tools I use">
      Tools content
    </Section>
  </Layout>
)

export default IndexPage
