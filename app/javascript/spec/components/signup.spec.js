import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../diary/components/Signup';

describe('Signup', () => {
  test('should match snapshot', () => {
    const page = shallow(<Signup />);

    expect(page.html()).toMatchSnapshot();
  });
});
