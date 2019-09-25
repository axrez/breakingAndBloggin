import React from 'react'
import '../../../enzyme.config'
import { shallow } from 'enzyme'

import Hero from '../Hero'

describe('rendering <Hero />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Hero />)
  })

  it('should render styled.header', () => {
    expect(wrapper.find({ testid: 'hero-header' })).toHaveLength(1)
  })
  it('should render a <Subheading />', () => {
    expect(wrapper.find({ testid: 'hero-subheading' })).toHaveLength(1)
  })
})
