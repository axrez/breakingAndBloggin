import React from 'react'
import styled from 'styled-components'
import { Heading, Subheading } from '../style'

const Hero = () => (
  <>
    <HeroHeader>
      <Heading testid="hero-header">Hi, I'm Emil Østergaard</Heading>
      <Subheading testid="hero-subheading">
        I'm a webdeveloper based out of Zealand, Denmark.
      </Subheading>
    </HeroHeader>
  </>
)

const HeroHeader = styled.header`
  background: linear-gradient(180deg, var(--primary) 0%, var(--accent) 100%);
  padding: 20vh 1rem 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    max-width: 28rem;
    font-size: 2.5rem;
    letter-spacing: -0.12rem;
    font-weight: 300;
    margin-left: 0;
  }
  ${Subheading} {
    max-width: 28rem;
    font-weight: 300;
  }
`

export default Hero
