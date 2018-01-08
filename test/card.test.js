import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card.js';
import mockData from './testCleanMockData.js';
import mockIcons from './testIcons.js';

describe('Card', () => {
  let wrapperDay;
  let wrapperHour;

  beforeEach(() => {
    wrapperDay = shallow(<Card 
      key='0' 
      styleName='Day' 
      weekday={mockData.days[0].weekday} 
      month={mockData.days[0].month} 
      day={mockData.days[0].day} 
      weather={mockData.days[0].weather} 
      high={mockData.days[0].high} 
      low={mockData.days[0].low} 
      weatherCondition={mockData.days[0].weatherCondition} 
      icon={mockIcons} 
      />);

    wrapperHour = mount(<Card 
      key='0' 
      styleName='Hour'
      hour={mockData.hours[0].hour}
      weather={mockData.hours[0].weather}
      temp={mockData.hours[0].temp}
      weatherCondition={mockData.hours[0].weatherCondition}
      icon={mockIcons} 
      />);
  })

  it('should exist', () => {
    expect(wrapperDay).toBeDefined();
  });

  it('should start with props', () => {
    expect(wrapperDay.instance().props.styleName).toEqual('Day');
    expect(wrapperDay.instance().props.weekday).toEqual(mockData.days[0].weekday);
    expect(wrapperDay.instance().props.month).toEqual(mockData.days[0].month);
    expect(wrapperDay.instance().props.day).toEqual(mockData.days[0].day);
    expect(wrapperDay.instance().props.weather).toEqual(mockData.days[0].weather);
    expect(wrapperDay.instance().props.high).toEqual(mockData.days[0].high);
    expect(wrapperDay.instance().props.low).toEqual(mockData.days[0].low);
  });

  it('should return high and low temperature if Card is used in TenDay component', () => {
    expect(wrapperDay.instance().props.styleName).toEqual('Day');
    expect(wrapperDay.find('h4').length).toEqual(4);
    expect(wrapperDay.find('h4').first().text()).toEqual('HIGH');
    expect(wrapperDay.find('h4').last().text()).toEqual(mockData.days[0].low + ' °');
  });

  it('should return hour if Card is used in SevenHour component', () => {

  });
});