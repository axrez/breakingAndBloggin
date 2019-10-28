import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterText>{`Emil Østergaard © ${new Date().getFullYear()} Hosted with ♥ by netlify`}</FooterText>
)

const FooterText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  text-align: center;
  color: #676767;
`

export default Footer
