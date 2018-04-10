import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextInput from '../../diary/components/TextInput';

describe('Signup', () => {
  test('should match snapshot', () => {
    const renderer = new ShallowRenderer();
    const page = renderer
      .render(
        <TextInput
          label="password"
          name="password-input"
          type="password"
          value="some value"
          callback={() => (null)}
        />
      );

    expect(page).toMatchSnapshot();
  });

  test('should append focus class on focus', () => {

  });

  test('should remove focus class on blur when value is empty', () => {

  });

  test('should not remove focus class on blur when value is present', () => {

  });

  test('should call callback function with field and value on change', () => {

  });
});
