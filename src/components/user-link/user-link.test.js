import React from 'react';
import renderer from 'react-test-renderer';

import UserLink from './user-link.jsx';

const mock = {
  email: `mock@mock.com`,
  avatarSrc: `src`,
};

describe(`UserLink compontent`, () => {
  it(`should render correctly with email and avatar if user prop presented`, () => {
    const tree = renderer
      .create(<UserLink user={mock}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly with sign in button if user prop not presented`, () => {
    const tree = renderer
      .create(<UserLink/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
