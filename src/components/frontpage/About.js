import React from 'react'
import styled from 'styled-components'
import { Aside, AsideWrapper, ButtonLink } from '../style'
import NextNavArrow from '../../svg/nextNavArrow'
import ReactLogo from '../../svg/reactLogo'
import NextLogo from '../../svg/nextJsLogo'
import GatsbyLogo from '../../svg/gatsbyLogo'

const AboutSection = () => (
  <AsideWrapper>
    <div>
      <AboutContent>
        Hi, I’m a frontend dev based out of Zealand, Denmark. I love
        technologies such as JavaScript, React, Gatsby, next.js and node.js
        <ButtonLink primary="true" to="/about">
          Read More
          <NextNavArrow />
        </ButtonLink>
      </AboutContent>
    </div>
    <Aside>
      <ReactLogo />
      <GatsbyLogo />
      <NextLogo />
    </Aside>
  </AsideWrapper>
)

const AboutContent = styled.p`
  font-size: 1.2rem;
  overflow-wrap: anywhere;
  color: var(--secondary);
  margin: 1.7rem 0.8rem;
`

export default AboutSection
