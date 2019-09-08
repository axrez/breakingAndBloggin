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
  it('should render a <Footer />', () => {
    expect(wrapper.find('Footer')).toHaveLength(1)
  })
  it('should render children', () => {
    expect(wrapper.find('p')).toHaveLength(1)
  })
})
