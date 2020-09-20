import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ProductCard from '..';

const buildProduct =
  (id, brand, description, price, image, priceHaveDiscount, priceWithOutDiscount) =>
  ({ id, brand, description, price, image, priceHaveDiscount, priceWithOutDiscount });

describe('<ProductCard/>', () => {
  describe('should be product card', () => {
    it('should have the same ui structure with one product', () => {
      const product =  buildProduct(1, 'coca cola', 'bebida', 10, 'uriimage', false, 0);
      const wrapper = shallow(<ProductCard {...product} />);
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
