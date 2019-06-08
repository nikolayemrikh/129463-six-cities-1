import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const offers = [{
  id: 1,
  title: `Очень дёшево, но есть тараканы`,
  type: `apartment`,
  image: `img/room.jpg`,
  rating: 4,
  price: 730,
  premium: false,
  location: [52.391789775177074, 4.858054348748566],
  city: `Paris`
}, {
  id: 2,
  title: `Очень дорого, но ты бедный`,
  type: `house`,
  image: `img/room.jpg`,
  rating: 4.7,
  price: 5530,
  premium: false,
  location: [52.36340140048887, 4.84802729159623],
  city: `Paris`
}, {
  id: 3,
  title: `Комната в общаге с китайцами на этаже`,
  type: `room`,
  image: `img/room.jpg`,
  rating: 3.2,
  price: 530,
  premium: false,
  location: [52.39248682791474, 4.932903183126761],
  city: `Paris`
}, {
  id: 5,
  title: `Комната в общаге с китайцами на этаже`,
  type: `room`,
  image: `img/room.jpg`,
  rating: 3.2,
  price: 530,
  premium: false,
  location: [52.38480050611764, 4.929180601803028],
  city: `Cologne`
}, {
  id: 9,
  title: `Очень дёшево, но есть тараканы`,
  type: `apartment`,
  image: `img/room.jpg`,
  rating: 4,
  price: 730,
  premium: false,
  location: [52.38275304815197, 4.84936832406623],
  city: `Brussels`
}, {
  id: 11,
  title: `Комната в общаге с китайцами на этаже`,
  type: `room`,
  image: `img/room.jpg`,
  rating: 3.2,
  price: 530,
  premium: false,
  location: [52.38822134229224, 4.922760641276128],
  city: `Brussels`
}, {
  id: 12,
  title: `Комната в общаге с китайцами на этаже`,
  type: `room`,
  image: `img/room.jpg`,
  rating: 3.2,
  price: 530,
  premium: false,
  location: [52.38488263027435, 4.920502790795433],
  city: `Amsterdam`
}, {
  id: 14,
  title: `Очень дёшево, но есть тараканы`,
  type: `apartment`,
  image: `img/room.jpg`,
  rating: 4,
  price: 730,
  premium: false,
  location: [52.39013208104149, 4.844964566994002],
  city: `Amsterdam`
}, {
  id: 15,
  title: `Очень дорого, но ты бедный`,
  type: `house`,
  image: `img/room.jpg`,
  rating: 4.7,
  price: 5530,
  premium: false,
  location: [52.372242048458645, 4.861497590473565],
  city: `Amsterdam`
}, {
  id: 19,
  title: `Комната в общаге с китайцами на этаже`,
  type: `room`,
  image: `img/room.jpg`,
  rating: 3.2,
  price: 530,
  premium: false,
  location: [52.390821518291446, 4.926776088852645],
  city: `Hamburg`
}, {
  id: 20,
  title: `Отель как отель. Норм.`,
  type: `hotel`,
  image: `img/room.jpg`,
  rating: 5,
  price: 830,
  premium: true,
  location: [52.37321914416751, 4.938915068988036],
  city: `Hamburg`
}, {
  id: 24,
  title: `Отель как отель. Норм.`,
  type: `hotel`,
  image: `img/room.jpg`,
  rating: 5,
  price: 830,
  premium: true,
  location: [52.38057542108448, 4.934734751323372],
  city: `Dusseldorf`
}];

const cityOffers = [{
  id: 21,
  title: `Очень дёшево, но есть тараканы`,
  type: `apartment`,
  image: `img/room.jpg`,
  rating: 4,
  price: 730,
  premium: false,
  location: [52.38774212252154, 4.847432434231717],
  city: `Dusseldorf`
}, {
  id: 22,
  title: `Очень дорого, но ты бедный`,
  type: `house`,
  image: `img/room.jpg`,
  rating: 4.7,
  price: 5530,
  premium: false,
  location: [52.37612854836747, 4.861351603419635],
  city: `Dusseldorf`
}, {
  id: 23,
  title: `Комната в общаге с китайцами на этаже`,
  type: `room`,
  image: `img/room.jpg`,
  rating: 3.2,
  price: 530,
  premium: false,
  location: [52.393946496720595, 4.931404544812371],
  city: `Dusseldorf`
}, {
  id: 24,
  title: `Отель как отель. Норм.`,
  type: `hotel`,
  image: `img/room.jpg`,
  rating: 5,
  price: 830,
  premium: true,
  location: [52.38057542108448, 4.934734751323372],
  city: `Dusseldorf`
}];

const mock = {
  currentCity: offers[2].city,
  cityOffers,
  offers,
  changeCity: () => {}
};

describe(`App compontent`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App {...mock}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
