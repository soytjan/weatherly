import mockData from './testCleanMockData.js';
import { shallow, mount } from 'enzyme';
import mockIcons from './testIcons.js';
import Current from '../lib/Current.js';
import React from 'react';

// How do we test the props.icons??
describe('Current', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Current 
      city={mockData.current.city}
      weather={mockData.days[0].conditions}
      weekday={mockData.days[0].weekday}
      month={mockData.days[0].month}
      day={mockData.days[0].day}
      current={mockData.current.current}
      high={mockData.days[0].high}
      low={mockData.days[0].low}
      icon={mockIcons}
      weatherCondition={mockData.days[0].weatherCondition}
      summary={mockData.current.summary} 
      />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  // it('should start with props', () => {
  //   expect(wrapper.instance().props.days).toEqual(mockData.days);
  //   expect(wrapper.instance().props.icon).toEqual(mockIcons);
  //   expect(wrapper.instance().props.days.length).toEqual(10);
  // })

  // it('should render7 Card components', () => {
  //   expect(wrapper.find('Card').length).toEqual(7);
  // })

  // it('should mount 7 Card components', () => {
  //   wrapper = mount(<Current days={mockData.days} icon={mockIcons} />);

  //   expect(wrapper.find('h2').length).toEqual(7);
  //   expect(wrapper.find('h2').first().text()).toEqual('Wednesday');
  // })

});