import React from 'react'
import PropTypes from 'prop-types'
import { Heading, NavWrapper, NavLink, MenuButton } from '../style'

const Nav = ({ frontpage }) => (
  <NavWrapper testid="nav-wrapper" frontpage={frontpage}>
    <Heading testid="nav-heading" nav>
      <NavLink to="/">Emil Østergaard</NavLink>
    </Heading>
    <NavLink testid="nav-link" menulink="true" to="/">
      Home
    </NavLink>
    <NavLink testid="nav-link" menulink="true" to="/about">
      About
    </NavLink>
    <MenuButton testid="menu-button">Menu</MenuButton>
  </NavWrapper>
)

Nav.propTypes = {
  frontpage: PropTypes.bool,
}

export default Nav
