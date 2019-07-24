import React from "react"
import { css } from "@emotion/core"
import { colors, mediaQueries } from "../tokens"
import { Link } from "gatsby"
import SocialLink from "./social-link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const styles = css`
  display: flex;
  padding-right: .5rem;
  padding-left: .5rem;
  ${mediaQueries.sm} {
    justify-content: flex-end;
  }

  a {
    padding: 1rem .5rem;
    color: ${colors.text};
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: ${colors.white};
      text-decoration: underline;
    }
    ${mediaQueries.sm} {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }
  }
`

const Topbar = () => (
  <div css={styles}>
    <Link
      css={{
        marginRight: `auto`,
        textTransform: `uppercase`,
      }}
      to="/"
    >
      Nelson Reitz
    </Link>

    <SocialLink
      socialNetwork="Github"
      href="//github.com/nelsonreitz"
    >
      <FontAwesomeIcon icon={[`fab`, `github`]} />
    </SocialLink>

    <SocialLink
      socialNetwork="Twitter"
      href="//twitter.com/nelsreitz"
    >
      <FontAwesomeIcon icon={[`fab`, `twitter`]} />
    </SocialLink>

    <SocialLink
      socialNetwork="Linkedin"
      href="//linkedin.com/in/nelsonreitz"
    >
      <FontAwesomeIcon icon={[`fab`, `linkedin-in`]} />
    </SocialLink>
  </div>
)

// Register FontAwesome icons
library.add(faGithub, faTwitter, faLinkedinIn)

export default Topbar
