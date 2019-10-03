import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = props => <Img {...props} />

const ImageContainer = styled(Image)`
  width: calc(100vw - 2rem);
  justify-self: center;
  max-height: 60vw;
  max-width: 960px;
  margin: 0 1rem;
`

export default ImageContainer
