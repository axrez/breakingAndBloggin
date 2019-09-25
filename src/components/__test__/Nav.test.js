import React from 'react'
import '../../../enzyme.config'
import { shallow } from 'enzyme'

import Nav from '../nav/Nav'

describe('rendering <Nav>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav frontpage={false} />)
  })
  it('should render a <NavWrapper />', () => {
    expect(wrapper.find({ testid: 'nav-wrapper' })).toHaveLength(1)
  })
  it('should render <NavWrapper frontpage=true /> when the frontpage prop is passed as true', () => {
    wrapper = shallow(<Nav frontpage />)
    expect(
      wrapper.find({ testid: 'nav-wrapper', frontpage: true })
    ).toHaveLength(1)
  })
  it('should not render <NavWrapper frontpage=true /> when the frontpage prop is passed as false', () => {
    expect(
      wrapper.find({ testid: 'nav-wrapper', frontpage: false })
    ).toHaveLength(1)
  })
  it('should render <NavWrapper /> when the frontpage prop is not passed', () => {
    wrapper = shallow(<Nav />)
    expect(
      wrapper.find({ testid: 'nav-wrapper', frontpage: true })
    ).toHaveLength(0)
  })
  it('should render a <MenuButton />', () => {
    expect(wrapper.find({ testid: 'menu-button' })).toHaveLength(1)
  })
  it('should render a <Heading nav />', () => {
    expect(wrapper.find({ testid: 'nav-heading', nav: true })).toHaveLength(1)
  })
  it('should render 2 <Link />', () => {
    expect(wrapper.find({ testid: 'nav-link' })).toHaveLength(2)
  })
})
