import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

// fluid image must be passed on the "img" prop
// need to query from graphql
// see documentation https://www.gatsbyjs.com/plugins/gatsby-background-image/?=gatsby-background
const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

// this used the other way of using styled-components so we can use the BackgroundImage plugin
export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important; // to see the linear-gradient in the background
  display: flex;
  justify-content: center;
  align-items: center;
`
