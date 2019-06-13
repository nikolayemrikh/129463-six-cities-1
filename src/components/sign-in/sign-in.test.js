import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in.jsx';

describe(`SignIn compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<SignIn logIn={jest.fn()}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
