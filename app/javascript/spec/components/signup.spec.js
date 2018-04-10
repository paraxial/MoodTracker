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
      user: {
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
    const newEmail = "anything@sample.com";

    expect(describedClass.state()).toEqual(expect.objectContaining(initialState));
    describedClass.instance().handleInputChange('email', newEmail);
    expect(describedClass.state().user.email).toEqual(newEmail);
  });

  test('should validate fields on submission', () => {

  });
});
