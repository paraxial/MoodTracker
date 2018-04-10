import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../diary/components/Header';

describe('Header', () => {
  test('should match snapshot', () => {
    const describedClass = shallow(
        <Header>
          <div>Some child component</div>
        </Header>
      );

    expect(describedClass.html()).toMatchSnapshot();
  });
});
