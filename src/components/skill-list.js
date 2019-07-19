import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mediaQueries } from "../tokens"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileCode, faUserFriends, faDesktop, faArrowsAltH, faSitemap,
  faAtom, faUniversalAccess, faMousePointer, faPalette, faFont, faPencilAlt
} from '@fortawesome/free-solid-svg-icons'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-bottom: -1rem;
  margin-left: -1rem;
  ${mediaQueries.sm} {
    margin-right: -1rem;
    margin-bottom: -2rem;
    margin-left: -1rem;
  }
  ${mediaQueries.lg} {
    margin-right: -2.5rem;
    margin-left: -2.5rem;
  }
`

const Col = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  ${mediaQueries.sm} {
    width: 50%;
    margin-bottom: 2rem;
  }
`

const SkillList = () => (
  <Row>
    <Col>
      <SkillCard title="Front-end Development"><FontAwesomeIcon icon="file-code" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="UX Design"><FontAwesomeIcon icon="user-friends" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="UI Design"><FontAwesomeIcon icon="desktop" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Responsive Design"><FontAwesomeIcon icon="arrows-alt-h" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Information Architecture"><FontAwesomeIcon icon="sitemap" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Design Systems"><FontAwesomeIcon icon="atom" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Accessibility"><FontAwesomeIcon icon="universal-access" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Interaction Design"><FontAwesomeIcon icon="mouse-pointer" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Brand Identity"><FontAwesomeIcon icon="palette" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Typography"><FontAwesomeIcon icon="font" /></SkillCard>
    </Col>

    <Col>
      <SkillCard title="Micro Copywriting"><FontAwesomeIcon icon="pencil-alt" /></SkillCard>
    </Col>
  </Row>
)

const skillCardStyles = css`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #f2f7fb;
  border-radius: 3px;
  ${mediaQueries.sm} {
    min-height: 5rem;
    padding: 1rem 1.5rem;
  }

  svg {
    width: 1.5rem;
    flex-shrink: 0;
    margin-right: 1rem;
    font-size: 1rem;
    color: ${colors.secondary};
    ${mediaQueries.sm} {
      font-size: 1.5rem;
    }
  }
`
const CardTitle = styled.h3`
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.125;
`

const SkillCard = ({ children, title }) => (
  <div css={skillCardStyles}>
    {children}
    <CardTitle>{title}</CardTitle>
  </div>
)

library.add(
  faFileCode, faUserFriends, faDesktop, faArrowsAltH, faSitemap,
  faAtom, faUniversalAccess, faMousePointer, faPalette, faFont, faPencilAlt
)

export default SkillList 
