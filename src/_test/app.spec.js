import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from 'App';

describe('<App/>', () => {
  it('should have the same ui structure', () => {
    const wrapper = shallow(<App loading />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
