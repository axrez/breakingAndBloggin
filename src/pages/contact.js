import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Heading } from '../components/style'
import EmailLogo from '../svg/emailLogo'
import GithubLogo from '../svg/githubLogo'
import FacebookIcon from '../svg/facebookLogo'

const Contact = () => (
  <Layout>
    <ContactWrapper>
      <Heading hero="true">Get in touch</Heading>
      <a href="mailto:emoestergaard@gmail.com">
        <EmailLogo />
      </a>
      <a href="https://github.com/axrez">
        <GithubLogo />
      </a>
      <a href="https://facebook.com/e.eastergaard">
        <FacebookIcon />
      </a>
    </ContactWrapper>
  </Layout>
)

export default Contact

const ContactWrapper = styled.div`
  background: var(--vertical-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.5rem - 2.2rem);
  justify-content: space-evenly;

  ${Heading} {
    font-weight: 500;
  }

  & svg {
    width: 20vw;
    max-width: 8rem;
  }
`
