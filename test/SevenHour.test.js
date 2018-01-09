import mockData from './testCleanMockData.js';
import SevenHour from '../lib/SevenHour.js';
import { shallow, mount } from 'enzyme';
import mockIcons from './testIcons.js';
import React from 'react';

// How do we test the props.icons??
describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour 
      forecast={mockData.hours} 
      icon={mockIcons} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with props', () => {
    expect(wrapper.instance().props.forecast).toEqual(mockData.hours);
    expect(wrapper.instance().props.icon).toEqual(mockIcons);
    expect(wrapper.instance().props.forecast.length).toEqual(7);
  })

  it('should render 7 Card components', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  })

  it('should mount 7 Card components', () => {
    wrapper = mount(<SevenHour
      forecast={mockData.hours}
      icon={mockIcons} />);

    expect(wrapper.find('p').length).toEqual(14);
    expect(wrapper.find('p').first().text()).toEqual("12:00 PM");
  })

});