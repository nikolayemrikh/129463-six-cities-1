import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const offers = [{
  id: 1,
  name: `Очень дёшево, но есть тараканы`,
  type: `apartment`,
  image: `img/room.jpg`,
  rating: 4,
  price: 730,
  premiun: false
}];

describe(`App compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App offers={offers}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
