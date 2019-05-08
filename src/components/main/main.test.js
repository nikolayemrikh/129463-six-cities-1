import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

const places = [{
  name: `Beautiful & luxurious apartment at great location`,
}, {
  name: `Wood and stone place`
}, {
  name: `Canal View Prinsengracht`
}, {
  name: `Nice, cozy, warm big bed apartment`
}, {
  name: `Wood and stone place`
}];

describe(`Main compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<Main places={places}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
