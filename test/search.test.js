import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';
import React from 'react';

describe('Search', () => {
  const mockFn = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search getWeatherData={mockFn} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have an input and button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should start with a city state of an empty string and a suggestedCities state of an empty array', () => {
    expect(wrapper.state()).toEqual({ city: '', suggestedCities: [] })
  }); 

  it('should start with props', () => {
    expect(wrapper.instance().props.getWeatherData).toEqual(mockFn);
  });

  it('should update city state on change', () => {
    expect(wrapper.state()).toEqual({ city: '', suggestedCities: [] });
    wrapper.find('input').simulate('change', { target: { value: 'd' } });
    expect(wrapper.state()).toEqual({ city: 'd', suggestedCities: [] });
  });

  it('should update suggestedCities state with a suggestion array on change', () => {
    expect(wrapper.state()).toEqual({ city: '', suggestedCities: [] });
    
    wrapper.find('input').simulate('change', { target: { value: 'den' } });
    
    expect(wrapper.state()).toEqual({ city: 'den', suggestedCities: ['denver, co', 'denton, tx'] });
  });

  it('should suggest cities after input is >= 3', () => {
    expect(wrapper.state()).toEqual({ city: '', suggestedCities: [] });

    wrapper.find('input').simulate('change', { target: { value: 'de' } });

    expect(wrapper.state()).toEqual({ city: 'de', suggestedCities: [] });

    wrapper.find('input').simulate('change', { target: { value: 'den' } });

    expect(wrapper.state()).toEqual({ city: 'den', suggestedCities: ['denver, co', 'denton, tx'] });        
  });

  it('should not make suggestions when input is a zip code and should automatically push target value to array', () => {
    expect(wrapper.state()).toEqual({ city: '', suggestedCities: [] });

    wrapper.find('input').simulate('change', { target: { value: '92620' } });

    expect(wrapper.state()).toEqual({ city: '92620', suggestedCities: ['92620'] });
  });

});