// eslint-env jest
import React from 'react'
import '../../../enzyme.config'
import { shallow } from 'enzyme'
import Index from '../index'

describe('/ rendering', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Index />)
  })
  it('should render a <Layout />', () => {
    expect(wrapper.find('Layout')).toHaveLength(1)
  })
  it('should render <Hero />', () => {
    expect(wrapper.find('Hero')).toHaveLength(1)
  })
})
