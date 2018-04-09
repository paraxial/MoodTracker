import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signup from '../../diary/components/Signup';

describe('Signup', () => {
  test('should match snapshot', () => {
    const renderer = new ShallowRenderer();
    const page = renderer
      .render(<Signup />);

    expect(page).toMatchSnapshot();
  });
});
