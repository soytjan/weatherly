import { shallow, mount } from 'enzyme';
import Footer from '../lib/Footer.js';
import React from 'react';

describe.only('Footer', () => {
  let wrapper = shallow(<Footer />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have 1 <div>', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should have 1 <p></p>', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });

  it('should render <p> © 2018 Amanda Tjan & Jeff Goodall</p>', () => {
    expect(wrapper.find('p').node).toEqual(<p> © 2018 Amanda Tjan & Jeff Goodall</p>);
  });

  it('should have className="footer"', () => {
    expect(wrapper.node).toEqual(<div className="Footer"><p> © 2018 Amanda Tjan & Jeff Goodall</p></div>);
  });
});