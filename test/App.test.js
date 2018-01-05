import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';

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
    
    expect(wrapper.find('Search').length).toEqual(0);
    expect(wrapper.find('Welcome').length).toEqual(0);
    expect(wrapper.find('Current').length).toEqual(0);
    expect(wrapper.find('SevenHour').length).toEqual(0);
    expect(wrapper.find('TenDay').length).toEqual(0);
  });

  it.skip('should have default state of an empty array triviaList', () => {

    expect(wrapper.state().triviaList).toEqual([]);
  });

  it.skip('should update state', () => {
    expect(wrapper.state().triviaList).toEqual([]);

    wrapper.setState({ triviaList: mockData.results });

    expect(wrapper.state().triviaList).toEqual(mockData.results);
    expect(wrapper.state().triviaList.length).toEqual(10);
  });

});