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

  it('should render the Header, Search, Current, SevenHour, TenDay, and Footer component', () => {

    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Current').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);
  });

  it.skip('should have default stat of an empty array triviaList', () => {

    expect(wrapper.state().triviaList).toEqual([]);
  });

  it.skip('should update state', () => {
    expect(wrapper.state().triviaList).toEqual([]);

    wrapper.setState({ triviaList: mockData.results });

    expect(wrapper.state().triviaList).toEqual(mockData.results);
    expect(wrapper.state().triviaList.length).toEqual(10);
  });

});