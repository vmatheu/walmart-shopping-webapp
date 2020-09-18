import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { SearchProduct } from 'components/SearchProduct';
import ProductList from 'components/ProductList';
import Loading from 'components/Loading';

describe('SearchProduct Component', () => {
  it('should have SearchProduct descendantes', () => {
    const searchProduct = mount(<SearchProduct />);
    expect(searchProduct).to.have.descendants(ProductList);
    expect(searchProduct).to.have.descendants(Loading);
  });
});
