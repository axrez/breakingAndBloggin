import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Image = props => <Img {...props} />

const ImageContainer = styled(Image)`
  max-height: 20vh;
`

export default ImageContainer
