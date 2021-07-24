import { graphql, useStaticQuery } from "gatsby"
import React from "react"

// TODO: one way of querying data (other is is RegularHeader.js)

const getStaticData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getStaticData)

  console.log(siteMetadata)
  return (
    <div>
      <h1>title:{siteMetadata.title}</h1>
      <h1>author: {siteMetadata.author}</h1>
    </div>
  )
}

export default Header
