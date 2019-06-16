import React from 'react';
import renderer from 'react-test-renderer';

import PlacesList from './places-list.jsx';

const offers = [{
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
}, {
  id: 2,
  title: `Wood and stone place`
}, {
  id: 3,
  title: `Canal View Prinsengracht`
}, {
  id: 4,
  title: `Nice, cozy, warm big bed apartment`
}];

describe(`Main compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<PlacesList className="some-class-name" offers={offers}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
