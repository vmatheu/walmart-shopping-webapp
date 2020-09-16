import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SearchProduct from '..';

describe('<SearchProduct/>', () => {
    describe('With search product by id', () => {
      it('should have the same ui structure', () => {
        const wrapper = shallow(<SearchProduct />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
      });
    });
  });
  