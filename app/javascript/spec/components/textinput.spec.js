import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../../diary/components/TextInput';

describe('TextInput', () => {
  let describedClass;

  beforeEach(() => {
    describedClass = shallow(
        <TextInput
          label="password"
          name="password-input"
          type="password"
          value="some value"
          error=""
          callback={() => (null)}
        />
      );
  });

  test('should match snapshot', () => {
    expect(describedClass.html()).toMatchSnapshot();
  });

  test('should append focus class on focus', () => {
    describedClass.find('.text-input').first().simulate('focus');

    expect(describedClass.find('.focus')).toHaveLength(2);
  });

  test('should remove focus class on blur when value is empty', () => {
    describedClass.setProps({ value: '' });
    describedClass.find('.text-input').first().simulate('blur');

    expect(describedClass.find('.focus')).toHaveLength(0);
  });

  test('should not remove focus class on blur when value is present', () => {
    describedClass.setProps({ value: 'present' });
    describedClass.find('.text-input').first().simulate('blur');

    expect(describedClass.find('.focus')).toHaveLength(2);
  });

  test('should call callback function with field and value on change', () => {
    const field = 'simulatedField';
    const value = 'simulatedValue';
    const simulatedChange = { target: { id: field, value: value }}
    const mockedCallback = jest.fn();

    describedClass.setProps({ callback: mockedCallback });
    describedClass.find('.text-input').first().simulate('change', simulatedChange);

    expect(mockedCallback).toBeCalledWith(field, value);
  });

  test('should not render error display when no error provided', () => {
    describedClass.setProps({ error: '' });

    expect(describedClass.find(".error-text")).toHaveLength(0);
  });

  test('should render error display when error provided', () => {
    const errorText = 'some error text';
    describedClass.setProps({ error: errorText });

    const errorNodes = describedClass.find(".error-text")

    expect(errorNodes).toHaveLength(1);
    expect(errorNodes.first().text()).toEqual(errorText);
  });
});
