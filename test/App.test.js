import { mount, shallow } from 'enzyme';
import mockData from './mockData.js';
import App from '../lib/App.js';
import React from 'react';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the Header and Footer component', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);
  });
  
  it('should render the Welcome, Search, Current, SevenHour and TenDay component', () => {
    //setstate to true for welcome.
    expect(wrapper.find('Search').length).toEqual(0);
    expect(wrapper.find('Welcome').length).toEqual(0);
    expect(wrapper.find('Current').length).toEqual(0);
    expect(wrapper.find('SevenHour').length).toEqual(0);
    expect(wrapper.find('TenDay').length).toEqual(0);
  });

  it('should have default state undefined for state.data', () => {

    expect(wrapper.state().data).toEqual(undefined);
  });

  it('should update state', () => {
    expect(wrapper.state().data).toEqual(undefined);

    wrapper.setState({ data: mockData });

    expect(wrapper.state().data).toEqual(mockData);
    console.log(wrapper.state().data)
    expect(wrapper.state().data.response.features).toEqual({
      conditions: 1,
      hourly: 1,
      forecast10day: 1,
    })
  });

});