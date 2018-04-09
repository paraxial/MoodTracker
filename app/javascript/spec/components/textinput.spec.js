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
});
