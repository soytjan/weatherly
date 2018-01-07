import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import mockData from './testCleanMockData.js';
import mockIcons from './testIcons.js';

// How do we test the props.icons??
describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay days={mockData.days} icon={mockIcons} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with props', () => {
    expect(wrapper.instance().props.days).toEqual(mockData.days);
    expect(wrapper.instance().props.icon).toEqual(mockIcons);
    expect(wrapper.instance().props.days.length).toEqual(10);
  })

  it('should render 10 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  })

  it('should mount 10 Card components', () => {
    wrapper = mount(<TenDay days={mockData.days} icon={mockIcons} />);
    // console.log('mount', wrapper.debug());

    // find 10 h4s
    // find that the first h4 has text matching the expected info from our mock data
    expect(wrapper.find('h2').length).toEqual(10);
    expect(wrapper.find('h2').first().text()).toEqual('Wednesday');
  })

});