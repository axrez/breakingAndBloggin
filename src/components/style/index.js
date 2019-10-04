import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const mobileBreakpoint = 600

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin: 1rem;
  ${props =>
    props.nav &&
    css`
      font-size: 1.3rem;
      margin: 0 0.5rem;
      font-weight: 500;
    `}
`

export const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
`

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: #fff;
  color: var(--secondary);
  transition: box-shadow 200ms ease;

  ${props =>
    props.frontpage &&
    css`
      background: transparent;
    `};
  ${props =>
    !props.top &&
    css`
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.19),
        0px 4px 6px rgba(0, 0, 0, 0.19);
    `}
  @media screen and (min-width: ${mobileBreakpoint}px) {
    grid-template-columns: 1fr repeat(2, auto);
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
  ${props =>
    props.mobilemenulink &&
    css`
      font-size: 1.5rem;
      margin: 1rem 0;
      padding: 1rem;
    `}
`

export const MenuWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 5rem 0 3rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
`

export const MenuButton = styled.button`
  background-color: var(--primary);
  border: none;
  color: white;
  font-size: 1.2rem;
  height: 100%;
  padding: 1rem 1.2rem;
  margin-right: 1rem;
  z-index: 2;

  &:hover {
    background-color: var(--primary-lighter);
    cursor: pointer;
  }

  @media screen and (min-width: ${mobileBreakpoint}px) {
    display: none;
  }
`

export const BlogContent = styled.section`
  margin: 1.5rem;
`

export const Main = styled.main`
  display: grid;
  align-items: center;
  margin: 1rem;
  ${props =>
    !props.frontpage &&
    css`
      margin-top: 3.3rem;
    `}
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  box-shadow: var(--shadow);
  margin-top: -1.5rem;
  & svg {
    width: 20vw;
    height: 20vw;
    margin: 1rem;
  }
`

export const AsideWrapper = styled.div`
  display: grid;
  margin-right: 1rem;
  grid-template-columns: 1fr auto;
`
