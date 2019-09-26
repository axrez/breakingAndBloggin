import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MobileMenu from './MobileMenu'
import { Heading, NavWrapper, NavLink, MenuButton } from '../style'

const Nav = ({ frontpage }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
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
      <MenuButton testid="menu-button" onClick={handleMenuToggle}>
        {!showMobileMenu ? 'Menu' : 'Close'}
      </MenuButton>
      {showMobileMenu ? <MobileMenu testid="mobile-menu" /> : null}
    </NavWrapper>
  )
}

Nav.propTypes = {
  frontpage: PropTypes.bool,
}

export default Nav
