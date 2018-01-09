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
      weather={mockData.days[0].conditions}
      weekday={mockData.days[0].weekday}
      month={mockData.days[0].month}
      day={mockData.days[0].day}
      high={mockData.days[0].high}
      low={mockData.days[0].low}
      weatherCondition={mockData.days[0].weatherCondition}
      summary={mockData.current.summary} 
      current={mockData.current.current}
      icon={mockIcons}
      city={mockData.current.city}
      />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with testing all props', () => {
    expect(wrapper.instance().props.city).toEqual(mockData.current.city);
    expect(wrapper.instance().props.weather).toEqual(mockData.days[0].conditions);
    expect(wrapper.instance().props.weekday).toEqual(mockData.days[0].weekday);
    expect(wrapper.instance().props.month).toEqual(mockData.days[0].month);
    expect(wrapper.instance().props.day).toEqual(mockData.days[0].day);
    expect(wrapper.instance().props.high).toEqual(mockData.days[0].high);
    expect(wrapper.instance().props.low).toEqual(mockData.days[0].low);
    expect(wrapper.instance().props.weatherCondition).toEqual(mockData.days[0].weatherCondition);
    expect(wrapper.instance().props.summary).toEqual(mockData.current.summary);
    expect(wrapper.instance().props.current).toEqual(mockData.current.current);
  })

  it('should have 6 <div></div>', () => {
    expect(wrapper.find('div').length).toEqual(6);
  });

  it('should have 1 <h2></h2>', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should have 3 <h4></h4>', () => {
    expect(wrapper.find('h4').length).toEqual(3);
  });

  it('should have 2 <p></p>', () => {
    expect(wrapper.find('p').length).toEqual(2);
  });

  it('should have 2 <h3></h3>', () => {
    expect(wrapper.find('h3').length).toEqual(2);
  });

  it('should have 2 <span></span>', () => {
    expect(wrapper.find('span').length).toEqual(2);
  });

  it('should have 1 <h5></h5>', () => {
    expect(wrapper.find('h5').length).toEqual(1);
  });

  it('should have the first h2 equal to "Louisville, KY"', () => {
    expect(wrapper.find('h2').first().text()).toEqual("Louisville, KY");
  });

  it('should have the first h4 equal to and h4 last ', () => {
    expect(wrapper.find('h4').first().text()).toEqual("Wednesday");
    expect(wrapper.find('h4').last().text()).toEqual("LOW32°F");
  });

});