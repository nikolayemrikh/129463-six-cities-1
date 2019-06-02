import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './place-card.jsx';

const mock = {
  title: `some name`
};

describe(`PlaceCard compontent`, () => {
  it(`should render correctly`, () => {
    const {title} = mock;
    const tree = renderer
      .create(<PlaceCard title={title}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
