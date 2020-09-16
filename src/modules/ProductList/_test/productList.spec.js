import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ProductList from '..';

const buildProduct = (id, brand, description, price, image) =>
  ({ id, brand, description, price, image });

describe('<ProductList/>', () => {
  describe('should be list product', () => {
    it('should have the same ui structure with one product', () => {
      const products = [
        buildProduct(1, 'coca cola', 'bebida', '$10', 'uriimage'),
      ];

      const wrapper = shallow(<ProductList products={products} />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });

    it('should have the same ui structure with five product', () => {
      const products = [
        buildProduct(1, 'coca cola', 'bebida', '$10', 'uriimage'),
        buildProduct(2, 'pepsi', 'bebida', '$10', 'uriimage1'),
        buildProduct(3, 'fanta', 'bebida', '$10', 'uriimage2'),
        buildProduct(4, 'sprite', 'bebida', '$10', 'uriimage3'),
        buildProduct(5, 'bilz', 'bebida', '$10', 'uriimage4'),
      ];

      const wrapper = shallow(<ProductList products={products} />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
