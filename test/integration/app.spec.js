import React from 'react';
import { mount } from 'enzyme';
import App from 'App';
import { expect } from 'chai';
import { SearchProduct } from 'components/SearchProduct';

describe('App Component', () => {
  it('should have SearchProduct descendantes', () => {
    const app = mount(<App />);
    expect(app).to.have.descendants(SearchProduct);
  });
});
