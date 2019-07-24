import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mediaQueries } from "../tokens"

const linkStyles = css`
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${colors.text};
  text-decoration: none;
  border-radius: 3px;
  background-color: ${colors.white};
  transition: background-color .05s ease-in-out;
  ${mediaQueries.sm} {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  &:hover {
    background-color: #f2f7fb;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const imgStyles = css`
  display: none;
  margin-right: 1.5rem;
  ${mediaQueries.sm} {
    display: none;
  }
`

const Title = styled.h3`
  margin-bottom: 0;
  font-size: 1.75rem;
  font-weight: 300;
`

const Date = styled.p`
  margin-bottom: 0;
  color: ${colors.mutedText};
`

const PostLink = ({ to, img, title, date }) => (
  <Link
    css={linkStyles}
    to={to}
  >
    <Img
      fixed={img}
      alt={title}
      css={imgStyles}
      imgStyle={{
        borderRadius: `50%`,
      }}
    />
    <div>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </div>
  </Link>
)

export default PostLink
