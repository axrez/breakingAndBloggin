import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav/Nav'
import Footer from './Footer'
import './style/layout.css'

const Layout = ({ children, frontpage }) => (
  <>
    <Nav frontpage={frontpage} />
    {children}
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
