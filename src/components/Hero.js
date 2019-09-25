import React from 'react'
import styled from 'styled-components'
import { Heading, Subheading } from './style'

const Hero = () => (
  <>
    <HeroHeader>
      <Heading testid="hero-header">Hi, I'm Emil Østergaard</Heading>
      <Subheading testid="hero-subheading">
        I'm a webdeveloper based out of Zealand, Denmark.
      </Subheading>
      <Wedge>></Wedge>
    </HeroHeader>
  </>
)

const HeroHeader = styled.header`
  background-color: #121335;
  padding: 13rem 1rem 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    max-width: 28rem;
  }
  ${Subheading} {
    max-width: 28rem;
  }
`

const Wedge = styled.p`
  font-size: 1.5rem;
  margin-top: 15vh;
  transform: rotate(90deg);
`

export default Hero
