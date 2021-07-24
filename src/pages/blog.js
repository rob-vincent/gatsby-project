import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.default.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  {
    default: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default blog
