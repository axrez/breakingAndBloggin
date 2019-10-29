import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const mobileBreakpoint = 600

export const Heading = styled.h1`
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: 500;
  color: var(--secondary);
  ${props =>
    props.hero &&
    css`
      color: #fff;
    `}
  ${props =>
    props.nav &&
    css`
      font-size: 1.3rem;
      color: var(--secondary);
      margin: 0 0.5rem;
      @media screen and (min-width: 600px) {
        grid-column: 2/3;
      }
    `}
  ${props =>
    props.overlay &&
    css`
      position: relative;
      top: 0.9rem;
      color: var(--secondary);
      background: #fff;
      box-shadow: var(--shadow);
      padding: 0.5rem 1rem;
      margin: 2.5rem 0 0 1rem;
      width: fit-content;
    `};
  ${props =>
    props.inlineOverlay &&
    css`
      margin-top: 0;
    `}
  ${props =>
    props.inline &&
    css`
      margin: 2.5rem 0.5rem 0.7rem 0.5rem;
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
  position: sticky;
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
      box-shadow: var(--shadow);
      /* 0px 2px 2px rgba(0, 0, 0, 0.19),
        0px 4px 6px rgba(0, 0, 0, 0.19); */
    `}
  @media screen and (min-width: ${mobileBreakpoint}px) {
    grid-template-columns: 
      calc((100vw - 960px) / 2) 
      1fr repeat(3, auto) 
      calc((100vw - 960px) / 2);
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
      ${props.cta &&
        css`
          color: #fff;
          background: var(--primary);
          margin-right: 1rem;
        `}
      @media screen and (min-width: 960px) {
        margin-right: 0;
      }
    `}
  ${props =>
    props.mobilemenulink &&
    css`
      font-size: 1.5rem;
      margin: 1rem 0;
      padding: 1rem;
      color: #fff;
      border-radius: 5px;
      & : hover {
        background-color: #0002;
      }
    `}
`

export const MenuWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 2rem);
  margin: 0 1rem;
  padding: 5rem 0 3rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--vertical-gradient);
  box-shadow: var(--shadow);
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
  margin: 0.5rem;
  margin-top: -0.2rem;
  font-size: 1.05rem;

  p {
    color: #222;
    line-height: 1.5rem;
  }

  ${props =>
    props.blogFront &&
    css`
      p {
        line-height: 1.5rem;
        font-size: 1.1rem;
        margin: 0;
      }
    `}

  h2 {
    color: var(--secondary);
  }
  h3 {
    color: var(--secondary);
  }
`

export const Content = styled.p`
  font-size: 1.2rem;
  overflow-wrap: anywhere;
  color: var(--secondary);
  margin: 1.7rem 0.8rem;

  ${props =>
    props.about &&
    css`
      margin: 0.3rem 0.8rem 0rem;
    `}

  @media screen and (min-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const DateLine = styled.h6`
  margin: 0;
  font-weight: 400;
  color: #676767;
`

export const Main = styled.main`
  display: grid;
  align-items: center;
  margin: 0 1rem 1rem 1rem;
  max-width: 960px;
  @media screen and (min-width: 960px) {
    margin: 0 auto 1rem auto;
  }
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  margin-right: -0.5rem;
  background: #fff;
  box-shadow: var(--shadow);
  margin-top: -1.5rem;
  & svg {
    width: 17vw;
    height: 17vw;
    max-width: 5rem;
    max-height: 5rem;
    margin: 1rem;
    filter: grayscale(1) contrast(0.5);
  }
  @media screen and (min-width: 550px) {
    flex-direction: row;
    grid-row: 1/2;
    margin-right: 0;
  }
`

export const AsideWrapper = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  margin-right: 1rem;
  grid-template-columns: 1fr auto;
  max-width: 600px;

  @media screen and (min-width: 550px) {
    grid-template-columns: 1fr;
    margin: 0 1rem;
    font-size: 1.3rem;
  }

  @media screen and (min-width: 630px) {
    margin: 0 auto;
  }
`

export const ButtonLink = styled(Link)`
  box-shadow: var(--shadow);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  margin: 1rem 0;
  font-size: 1.3rem;
  ${props =>
    props.primary &&
    css`
      background: var(--gradient);
      color: #fff;
      max-width: 20rem;
      & svg {
        fill: #fff;
      }
      ${props.aboutsection &&
        css`
          @media screen and (min-width: 550px) {
            width: 50%;
            margin-top: 2rem;
          }
        `}
      ${props.contactsection &&
        css`
          @media screen and (min-width: 550px) {
            width: 15rem;
          }
        `}
    `}
  ${props =>
    props.secondary &&
    css`
      background: #fff;
      color: var(--secondary);
      & svg {
        fill: var(--secondary);
      }
    `}
`

export const BoxListItem = styled.p`
  box-shadow: var(--shadow);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  margin: 1rem 0;
  font-size: 1.3rem;
  list-style: none;
  ${props =>
    props.primary &&
    css`
      background: var(--gradient);
      color: #fff;
      & svg {
        fill: #fff;
      }
    `}
  ${props =>
    props.secondary &&
    css`
      background: #fff;
      color: var(--secondary);
      & svg {
        fill: var(--secondary);
      }
    `}
`

export const ButtonLinkList = styled.div`
  background: var(--gradient);
  padding: 1rem 1rem 0.85rem;
`
