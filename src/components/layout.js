import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav/Nav'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
