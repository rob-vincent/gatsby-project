import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

// for SASS, go to www.gatsby.com/plugins
export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, beatae."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
