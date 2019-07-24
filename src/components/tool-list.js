import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mediaQueries } from "../tokens"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5, faCss3Alt, faJs, faReact ,faVuejs, faBootstrap,
  faSass, faWordpressSimple, faGithub, faGit, faSketch,
  faInvision, faAdobe, faFigma
} from '@fortawesome/free-brands-svg-icons'
import GatsbyLogo from "../tools/logo-gatsby.svg"
import NetlifyLogo from "../tools/logo-netlify.svg"

const Title = styled.h3`
  padding-bottom: 1rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  font-weight: 400;
  border-bottom: 1px solid ${colors.primaryHighlight};
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -.5rem;
  margin-bottom: -3rem;
  margin-left: -.5rem;
  ${mediaQueries.sm} {
    margin-right: -1rem;
    margin-left: -1rem;
  }
`

const Col = styled.div`
  padding-right: .5rem;
  padding-left: .5rem;
  margin-bottom: 3rem;
  width: 33.33333%;
  ${mediaQueries.sm} {
    width: 25%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  ${mediaQueries.md} {
    width: 20%;
  }
  ${mediaQueries.lg} {
    width: 16.66667%;
  }
`

const ToolList = () => (
  <>
    <Title>Web Development</Title>
    <Row>
      <Col>
        <ToolCard title="HTML"><FontAwesomeIcon icon={[`fab`, `html5`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="CSS"><FontAwesomeIcon icon={[`fab`, `css3-alt`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="JavaScript"><FontAwesomeIcon icon={[`fab`, `js`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="React"><FontAwesomeIcon icon={[`fab`, `react`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Vue.js"><FontAwesomeIcon icon={[`fab`, `vuejs`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Gatsby"><GatsbyLogo /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Bootstrap"><FontAwesomeIcon icon={[`fab`, `bootstrap`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Sass"><FontAwesomeIcon icon={[`fab`, `sass`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="WordPress"><FontAwesomeIcon icon={[`fab`, `wordpress-simple`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Github"><FontAwesomeIcon icon={[`fab`, `github`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Git"><FontAwesomeIcon icon={[`fab`, `git`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Netlify"><NetlifyLogo /></ToolCard>
      </Col>
    </Row>

    <Title>Web Design</Title>
    <Row>
      <Col>
        <ToolCard title="Sketch"><FontAwesomeIcon icon={[`fab`, `sketch`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="InVision"><FontAwesomeIcon icon={[`fab`, `invision`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Adobe CC"><FontAwesomeIcon icon={[`fab`, `adobe`]} /></ToolCard>
      </Col>

      <Col>
        <ToolCard title="Figma"><FontAwesomeIcon icon={[`fab`, `figma`]} /></ToolCard>
      </Col>
    </Row>
  </>
)

const cardStyles = css`
  text-align: center;

  svg {
    width: 40px;
    height: 40px;
    margin-right: auto;
    margin-bottom: .5rem;
    margin-left: auto;
    font-size: 3rem;
    color: ${colors.secondary};
    fill: ${colors.secondary};

    path {
      fill: ${colors.secondary};
    }
  }
`

const CardTitle = styled.h4`
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125;
`

const ToolCard = ({ children, title }) => (
  <div css={cardStyles}>
    {children}
    <CardTitle>{title}</CardTitle>
  </div>
)

// Register FontAwesome icons
library.add(
  faHtml5, faCss3Alt, faJs, faReact, faVuejs, faBootstrap,
  faSass, faWordpressSimple, faGithub, faGit, faSketch,
  faInvision, faAdobe, faFigma
)

export default ToolList 
