import { mount, shallow } from 'enzyme';
import mockData from './testCleanMockData.js';
import App from '../lib/App.js';
import React from 'react';

// global.localStorage = {
//   getState: ,
//   setState: 
// }
// SEE SEARCH TEST

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

  it('should have default data state of undefined', () => {
    expect(wrapper.state().data).toEqual(undefined);
  });
  
  it('should render the Welcome, Header, and Footer component when data state is undefined', () => {
    expect(wrapper.state().data).toEqual(undefined);

    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);
  });

  it('should render Header, Search, Current, SevenHour, TenDay, Footer components when data state is updated', () => {
    wrapper.setState({data: mockData})

    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Current').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  })

  it('should update state', () => {
    expect(wrapper.state().data).toEqual(undefined);

    wrapper.setState({ data: mockData });

    expect(wrapper.state().data).toEqual(mockData);
  });

  // it('should store data in local storage', () => {

  // })

});