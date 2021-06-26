import { graphql, StaticQuery } from "gatsby"
import React from "react"

// TODO: one way of querying data (other is is Header.js)
// TODO: querying data in Header.js is a much preferred way
// TODO: page query is on video 44

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)

        return (
          <div>
            <h2>title: {data.site.siteMetadata.title}</h2>
            <h4>author: {data.site.siteMetadata.author}</h4>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
