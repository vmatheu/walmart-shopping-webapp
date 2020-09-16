import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import productService from '../services/productService';
import { SearchProduct, onChange } from '..';

jest.mock('../services/productService');

describe('<SearchProduct/>', () => {

  describe('With search product by id', () => {
    it('should have the same ui structure', () => {
      const wrapper = shallow(<SearchProduct />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Onchange action', () => {
    beforeEach(() => {
      productService.getProductById = jest.fn();
    });

    it('should calling product service', () => {      
      onChange("221");
      expect(productService.getProductById).toHaveBeenCalled();
    });

    it('should not calling product service when search contains not alphanumeric characters', () => {      
      onChange("21-");
      expect(productService.getProductById).not.toHaveBeenCalled();
    });
  });

});
