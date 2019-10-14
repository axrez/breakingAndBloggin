import React from 'react'
import Layout from '../components/Layout'
import { Heading, BlogContent } from '../components/style'

const About = () => (
  <Layout>
    <Heading>Hi, I'm Emil</Heading>
    <BlogContent>
      <p>
        My name is Emil. I'm 20 years old and live in the town of Slagelse. I've
        finished high school this year (the summer of 2019) and will be taking a
        year or two off before university. I would describe myself as engaged,
        curious, responsible, and with a drive to learn. I spend my free time
        running, programming, climbing and playing Magic the Gathering (an
        awesome trading card game).
      </p>
      <p>
        My interest in programming was sparked during my time in high school and
        especially in web-development. React has occupied my attention since in
        the forms of create-react-app, Gatsby and next.js. I've also dabbled in
        the realm of node.js and NoSQL databases such as mongoDB. Lastly, I’ve
        done some IoT stuff with ESP8266 and ESP32 chips in different school
        projects.
      </p>
      <p>Curently interested in:</p>
      <ul>
        <li>Gatsby</li>
        <li>Next.js</li>
        <li>React Spring</li>
        <li>Svelte</li>
      </ul>
    </BlogContent>
  </Layout>
)

export default About
