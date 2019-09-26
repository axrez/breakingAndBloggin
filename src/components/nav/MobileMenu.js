import React from 'react'
import { MenuWrapper, NavLink } from '../style'

const MobileMenu = () => (
  <MenuWrapper>
    <NavLink mobileMenuLink to="/">
      Home
    </NavLink>
    <NavLink mobileMenuLink to="/about">
      About
    </NavLink>
    <NavLink mobileMenuLink to="/blog">
      Blog
    </NavLink>
    <NavLink mobileMenuLink to="/contact">
      Contact
    </NavLink>
  </MenuWrapper>
)

export default MobileMenu
