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
      productService.findProductBySearch = jest.fn();
    });

    it('should calling product service', async () => {
      await onChange('111', jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalled();
    });

    it('should calling product service when use ñ character', async () => {
      await onChange('ñ', jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalled();
    });

    it('should not calling product service when search contains not alphanumeric characters', async () => {
      await onChange('21-', jest.fn());
      expect(productService.findProductBySearch).not.toHaveBeenCalled();
    });

    it('should calling product service with lower case character', async () => {
      await onChange('AAA', jest.fn());
      expect(productService.findProductBySearch).toHaveBeenCalledWith('aaa');
    });
  });
});
