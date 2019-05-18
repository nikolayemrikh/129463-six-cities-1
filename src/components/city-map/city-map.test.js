import React from 'react';
import renderer from 'react-test-renderer';

import CityMap from './city-map.jsx';

const offers = [{
  location: [52.3909553943508, 4.85309666406198]
}, {
  location: [52.369553943508, 4.85309666406198]
}, {
  location: [52.3909553943508, 4.929309666406198]
}, {
  location: [52.3809553943508, 4.939309666406198]
}];

describe(`CityMap compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<CityMap offers={offers}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
