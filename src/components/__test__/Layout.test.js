import React from 'react'
import '../../../enzyme.config'
import { shallow } from 'enzyme'

import Layout from '../Layout'

describe('rendering <Layout />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Layout>
        <p>child</p>
      </Layout>
    )
  })
  it('should render a <Nav />', () => {
    expect(wrapper.find('Nav')).toHaveLength(1)
  })
  it('should pass the frontpage prop to <Nav />', () => {
    expect(wrapper.find('Nav').props().frontpage).toBeDefined()
  })
  it('should pass frontpage=false by default', () => {
    expect(wrapper.find('Nav').props().frontpage).toBeFalsy()
  })
  it('should pass frontpage=true by if its passed to layout', () => {
    wrapper = shallow(
      <Layout frontpage>
        <p>child</p>
      </Layout>
    )
    expect(wrapper.find('Nav').props().frontpage).toBeTruthy()
  })
  it('should render a <Footer />', () => {
    expect(wrapper.find('Footer')).toHaveLength(1)
  })
  it('should render children', () => {
    expect(wrapper.find('p')).toHaveLength(1)
  })
  it('should render a main wrapper around its children', () => {
    expect(wrapper.find({ testid: 'main-wrapper' })).toHaveLength(1)
  })
})
