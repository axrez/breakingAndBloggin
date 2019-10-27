import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './nav/Nav'
import Footer from './Footer'
import './style/layout.css'
import { Main } from './style'
import { useScrollPosition } from '../utils/useScrollPosition'

const Layout = ({ children, frontpage }) => {
  const [top, setTop] = useState(true)
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y === 0 && !top) {
        setTop(true)
      }
      if (currPos.y !== 0 && top) {
        setTop(false)
      }
    },
    [top],
    null,
    false,
    50
  )

  return (
    <>
      <Nav frontpage={frontpage} top={top} />
      <Main testid="main-wrapper" frontpage={frontpage}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  frontpage: PropTypes.bool,
}

Layout.defaultProps = {
  frontpage: false,
}

export default Layout
