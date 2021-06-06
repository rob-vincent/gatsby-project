import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      Hello from Blog Page....
      <Link to="/">home page</Link>
    </Layout>
  )
}

export default blog
