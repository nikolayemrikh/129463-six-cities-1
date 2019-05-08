import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './place-card.jsx';

const mock = {
  name: `some name`
};

describe(`PlaceCard compontent`, () => {
  it(`should render correctly`, () => {
    const {name} = mock;
    const tree = renderer
      .create(<PlaceCard name={name}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
