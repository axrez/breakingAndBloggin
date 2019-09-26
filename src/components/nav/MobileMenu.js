import React from 'react'
import { MenuWrapper, NavLink } from '../style'

const MobileMenu = () => (
  <MenuWrapper>
    <NavLink mobilemenulink="true" to="/">
      Home
    </NavLink>
    <NavLink mobilemenulink="true" to="/about">
      About
    </NavLink>
    <NavLink mobilemenulink="true" to="/blog">
      Blog
    </NavLink>
    <NavLink mobilemenulink="true" to="/contact">
      Contact
    </NavLink>
  </MenuWrapper>
)

export default MobileMenu
