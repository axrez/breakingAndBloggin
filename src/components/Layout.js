import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav/Nav'
import Footer from './Footer'
import './style/layout.css'
import { Main } from './style'

const Layout = ({ children, frontpage }) => (
  <>
    <Nav frontpage={frontpage} />
    <Main testid="main-wrapper" frontpage={frontpage}>
      {children}
    </Main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  frontpage: PropTypes.bool,
}

Layout.defaultProps = {
  frontpage: false,
}

export default Layout
