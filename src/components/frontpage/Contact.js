import React from 'react'
import styled from 'styled-components'
import { Heading, ButtonLink } from '../style'
import NextNavArrow from '../../svg/nextNavArrow'

const ContactSection = () => (
  <ContactSectionWrapper>
    <Heading overlay="true">Let's talk</Heading>
    <ButtonLink to="/contact" primary="true" contactsection="true">
      Get in touch
      <NextNavArrow />
    </ButtonLink>
  </ContactSectionWrapper>
)

const ContactSectionWrapper = styled.div`
  & a {
    margin-left: 7rem;
    margin-right: 2rem;
  }
  & h1 {
    top: 1.5rem;
  }
  margin-top: 2rem;
  margin-left: auto;
  margin-bottom: 4rem;
  margin-right: auto;
`

export default ContactSection
