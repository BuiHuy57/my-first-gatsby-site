import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="A wallpaper of my favourite game, Outer Wilds"
          src="../images/outer-wilds.jpg"
        />
      </Layout>
  )
}

export default IndexPage