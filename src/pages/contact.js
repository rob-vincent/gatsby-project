import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.default.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    default: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
