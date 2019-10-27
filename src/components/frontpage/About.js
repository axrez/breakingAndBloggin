import React from 'react'
import { Aside, AsideWrapper, ButtonLink, Content } from '../style'
import NextNavArrow from '../../svg/nextNavArrow'
import ReactLogo from '../../svg/reactLogo'
import NextLogo from '../../svg/nextJsLogo'
import GatsbyLogo from '../../svg/gatsbyLogo'

const AboutSection = () => (
  <AsideWrapper>
    <div>
      <Content>
        Hi, I’m a frontend dev based out of Zealand, Denmark. I love
        technologies such as JavaScript, React, Gatsby, next.js and node.js
        <ButtonLink primary="true" to="/about">
          Read More
          <NextNavArrow />
        </ButtonLink>
      </Content>
    </div>
    <Aside>
      <ReactLogo />
      <GatsbyLogo />
      <NextLogo />
    </Aside>
  </AsideWrapper>
)

export default AboutSection
