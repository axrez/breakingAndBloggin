import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/about/Hero'
import {
  Heading,
  ButtonLinkList,
  Content,
  BoxListItem,
} from '../components/style'

const About = () => (
  <Layout>
    <SEO
      meta="Want to learn more about me? This is the place to do it."
      title="Emil Østergaard"
    />
    <Hero />
    <Content about="true">
      I’m a front-end developer based out of Zealand, Denmark. I love learning,
      programming and being physically active. I’m currently looking into the
      following:
    </Content>
    <Heading overlay="true">On my mind</Heading>
    <ButtonLinkList>
      <BoxListItem secondary="true">Animations with react spring</BoxListItem>
      <BoxListItem secondary="true">Typescript</BoxListItem>
      <BoxListItem secondary="true">Gatsby, Gatsby, Gatsby</BoxListItem>
    </ButtonLinkList>
    <Content>
      Here is the longer version: <br /> I got my start in programming with c++
      and arduinos during the first year of high school. After about a year of
      c++ and microcontrollers I fell into the frontend world and I’ve been in
      love with React ever since.
    </Content>

    <Content about="true">
      I’ve since explored node.js, mongoDB and a lot of front-end, like next.js
      and Gatsby.
    </Content>

    <Content>
      When I’m not programming I like playing Magic the Gathering alongside
      running and bouldering. I also enjoy a good gin and tonic on fridays.
    </Content>
  </Layout>
)

export default About
