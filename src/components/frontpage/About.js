import React from 'react'
import { Aside, AsideWrapper, Heading } from '../style'
import ReactLogo from '../../svg/reactLogo'
import NextLogo from '../../svg/nextJsLogo'
import GatsbyLogo from '../../svg/gatsbyLogo'

const AboutSection = () => (
  <AsideWrapper>
    <Heading>Dette er about</Heading>
    <Aside>
      <ReactLogo />
      <GatsbyLogo />
      <NextLogo />
    </Aside>
  </AsideWrapper>
)

export default AboutSection
