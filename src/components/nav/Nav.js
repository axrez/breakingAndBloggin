import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Title, NavWrapper } from '../style'

const Nav = ({ frontpage }) => (
  <NavWrapper testid="nav-wrapper" frontpage={frontpage}>
    <Title testid="nav-title">Test</Title>
    <Link testid="nav-link">test2</Link>
    <Link testid="nav-link">test2</Link>
  </NavWrapper>
)

Nav.propTypes = {
  frontpage: PropTypes.bool,
}

export default Nav
