import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"


const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.default.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  {
    default: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
