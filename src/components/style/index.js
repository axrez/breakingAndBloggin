import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
`

export const NavWrapper = styled.nav`
  background: teal;
  padding: 2rem;
  ${props =>
    props.frontpage &&
    css`
      background: transparent;
    `};
`
