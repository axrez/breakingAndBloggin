import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import ImageContainer from '../image'
import { Heading, Subheading } from '../style'

const Hero = () => {
  const { imageOfMe } = useStaticQuery(graphql`
    {
      imageOfMe: file(relativePath: { eq: "PicOfMe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <HeroHeader>
        <Heading hero="true">Hi, I'm Emil</Heading>
        <ImageContainer fluid={imageOfMe.childImageSharp.fluid} />
      </HeroHeader>
    </>
  )
}

export default Hero

const HeroHeader = styled.header`
  background: linear-gradient(180deg, var(--primary) 0%, var(--accent) 100%);
  padding: 8vh 1rem 0vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;

  ${Heading} {
    max-width: 28rem;
    font-size: 2.5rem;
    letter-spacing: -0.12rem;
    font-weight: 300;
    margin-left: 0;
    margin-bottom: 0;
  }
  ${Subheading} {
    max-width: 28rem;
    font-weight: 300;
  }

  ${ImageContainer} {
    width: 55%;
    max-width: 500px;
    border-radius: 50%;
    /* margin-top: -12vh; */
    box-shadow: var(--shadow);
    top: 4vh;
    position: absolute;
  }
`
