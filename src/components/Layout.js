import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './nav/Nav'
import Footer from './Footer'
import './style/layout.css'
import { Main } from './style'

const Layout = ({ children, frontpage }) => {
  const [top, setTop] = useState(true)
  const onScroll = useCallback(
    e => {
      if (e.target.scrollTop !== 0 && top) {
        setTop(false)
      } else if (e.target.scrollTop === 0) {
        setTop(true)
      }
    },
    [top]
  )
  return (
    <div
      onScroll={onScroll}
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      <Nav frontpage={frontpage} top={top} />
      <Main testid="main-wrapper" frontpage={frontpage}>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  frontpage: PropTypes.bool,
}

Layout.defaultProps = {
  frontpage: false,
}

export default Layout
