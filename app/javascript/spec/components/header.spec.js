import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../diary/components/Header';

describe('Header', () => {
  test('should match snapshot', () => {
    const renderer = new ShallowRenderer();
    const page = renderer
      .render(
        <Header>
          <div>Some child component</div>
        </Header>
      );

    expect(page).toMatchSnapshot();
  });
});
