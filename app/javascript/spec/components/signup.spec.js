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

    expect(describedClass.state()).toEqual(expect.objectContaining(initialState));
    describedClass.instance().handleInputChange('email', newEmail);
    expect(describedClass.state('email')).toEqual(newEmail);
  });

  test('should validate fields on submission', () => {
    const invalidState = {
      email: "not an email",
      password: "no",
      confirmPassword: "not matching",
    };
    describedClass.setState(...invalidState);

    expect(describedClass.state('emailError')).toEqual(null);
    expect(describedClass.state('passwordError')).toEqual(null);
    expect(describedClass.state('confirmPasswordError')).toEqual(null);

    describedClass.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(describedClass.state('emailError')).toEqual('This is not a valid email');
    expect(describedClass.state('passwordError')).toEqual('Password must be 8-128 characters long');
    expect(describedClass.state('confirmPasswordError')).toEqual('Must match password');
  });
});
