import React from 'react';
import renderer from 'react-test-renderer';

import PlacesList from './places-list.jsx';

const offers = [{
  id: 1,
  name: `Beautiful & luxurious apartment at great location`,
}, {
  id: 2,
  name: `Wood and stone place`
}, {
  id: 3,
  name: `Canal View Prinsengracht`
}, {
  id: 4,
  name: `Nice, cozy, warm big bed apartment`
}];

describe(`Main compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<PlacesList offers={offers}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
