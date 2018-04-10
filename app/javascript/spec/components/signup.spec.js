import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../diary/components/Signup';

describe('Signup', () => {
  let describedClass;

  beforeEach(() => {
    describedClass = shallow(<Signup />);
  });

  test('should match snapshot', () => {
    expect(describedClass.html()).toMatchSnapshot();
  });

  test('should change state in response to callback', () => {
    const initialState = {
      email: null,
      password: null,
      confirmPassword: null,
    };
    const newEmail = "anything@sample.com";

    expect(describedClass.state()).toEqual(initialState);
    describedClass.instance().handleInputChange('email', newEmail);
    expect(describedClass.state('email')).toEqual(newEmail);
  });
});
