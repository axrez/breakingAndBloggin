import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const mobileBreakpoint = 600

export const Heading = styled.h1`
  font-size: 2rem;
  width: 100%;
  ${props =>
    props.nav &&
    css`
      font-size: 1.3rem;
      margin: 0 1rem;
      font-weight: 500;
    `}
`

export const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
`

export const NavWrapper = styled.nav`
  background: teal;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #121335;
  color: var(--primary);
  ${props =>
    props.frontpage &&
    css`
      background: transparent;
    `};
  @media screen and (min-width: ${mobileBreakpoint}px) {
    grid-template-columns: 1fr repeat(2, auto);
    padding: 2rem 0;
  }
`

export const NavLink = styled(Link)`
  color: inherit;
  padding: 1rem;
  text-decoration: none;

  ${props =>
    props.menulink &&
    css`
      font-size: 1rem;
      @media screen and (max-width: ${mobileBreakpoint - 1}px) {
        display: none;
        font-size: 1.2rem;
      }
    `}
`

export const MenuButton = styled.button`
  background: none;
  background-color: #ffffff00;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  padding: 0.5rem;

  &:hover {
    background-color: #ffffff33;
    cursor: pointer;
  }

  @media screen and (min-width: ${mobileBreakpoint}px) {
    display: none;
  }
`

export const Main = styled.main`
  display: grid;
  ${props =>
    !props.frontpage &&
    css`
      padding-top: 7rem;
    `}
`
