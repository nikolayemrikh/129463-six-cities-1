import {Actions, reducer} from "./reducer";


describe(`Reducer test`, () => {
  it(`should return initial state by default`, () => {
    const cityOffers = [{
      id: 1,
      name: `Очень дёшево, но есть тараканы`,
      type: `apartment`,
      image: `img/room.jpg`,
      rating: 4,
      price: 730,
      premium: false,
      location: [52.391789775177074, 4.858054348748566],
      city: `Paris`
    }, {
      id: 2,
      name: `Очень дорого, но ты бедный`,
      type: `house`,
      image: `img/room.jpg`,
      rating: 4.7,
      price: 5530,
      premium: false,
      location: [52.36340140048887, 4.84802729159623],
      city: `Paris`
    }, {
      id: 3,
      name: `Комната в общаге с китайцами на этаже`,
      type: `room`,
      image: `img/room.jpg`,
      rating: 3.2,
      price: 530,
      premium: false,
      location: [52.39248682791474, 4.932903183126761],
      city: `Paris`
    }, {
      id: 4,
      name: `Отель как отель. Норм.`,
      type: `hotel`,
      image: `img/room.jpg`,
      rating: 5,
      price: 830,
      premium: true,
      location: [52.37148098403658, 4.9364705189891485],
      city: `Paris`
    }];

    const mock = {
      currentCity: `Paris`,
      cityOffers
    };
    expect(reducer(void 0, {})).toEqual(mock);
  });

  describe(`Change city action test`, () => {
    it(`should return correct new state object`, () => {
      expect(reducer(void 0, {
        payload: `Brussels`,
        type: Actions.CHANGE_CITY
      })).toHaveProperty(`currentCity`, `Brussels`);

      expect(reducer(void 0, {
        payload: `Dusseldorf`,
        type: Actions.CHANGE_CITY
      })).toHaveProperty(`currentCity`, `Dusseldorf`);
    });
  });

  describe(`Get offers by city action test`, () => {
    it(`should return correct new state object`, () => {
      const amsterOffers = [{
        id: 12,
        name: `Комната в общаге с китайцами на этаже`,
        type: `room`,
        image: `img/room.jpg`,
        rating: 3.2,
        price: 530,
        premium: false,
        location: [52.38488263027435, 4.920502790795433],
        city: `Amsterdam`
      }, {
        id: 14,
        name: `Очень дёшево, но есть тараканы`,
        type: `apartment`,
        image: `img/room.jpg`,
        rating: 4,
        price: 730,
        premium: false,
        location: [52.39013208104149, 4.844964566994002],
        city: `Amsterdam`
      }, {
        id: 15,
        name: `Очень дорого, но ты бедный`,
        type: `house`,
        image: `img/room.jpg`,
        rating: 4.7,
        price: 5530,
        premium: false,
        location: [52.372242048458645, 4.861497590473565],
        city: `Amsterdam`
      }, {
        id: 16,
        name: `Отель как отель. Норм.`,
        type: `hotel`,
        image: `img/room.jpg`,
        rating: 5,
        price: 830,
        premium: true,
        location: [52.38802290190164, 4.946111365139352],
        city: `Amsterdam`
      }];

      expect(reducer(void 0, {
        payload: `Amsterdam`,
        type: Actions.GET_CITY_OFFERS
      })).toHaveProperty(`cityOffers`, amsterOffers);

      const hamburgOffers = [{
        id: 17,
        name: `Очень дёшево, но есть тараканы`,
        type: `apartment`,
        image: `img/room.jpg`,
        rating: 4,
        price: 730,
        premium: false,
        location: [52.39394524048382, 4.862008963869003],
        city: `Hamburg`
      }, {
        id: 18,
        name: `Очень дорого, но ты бедный`,
        type: `house`,
        image: `img/room.jpg`,
        rating: 4.7,
        price: 5530,
        premium: false,
        location: [52.3652527539493, 4.845413450778779],
        city: `Hamburg`
      }, {
        id: 19,
        name: `Комната в общаге с китайцами на этаже`,
        type: `room`,
        image: `img/room.jpg`,
        rating: 3.2,
        price: 530,
        premium: false,
        location: [52.390821518291446, 4.926776088852645],
        city: `Hamburg`
      }, {
        id: 20,
        name: `Отель как отель. Норм.`,
        type: `hotel`,
        image: `img/room.jpg`,
        rating: 5,
        price: 830,
        premium: true,
        location: [52.37321914416751, 4.938915068988036],
        city: `Hamburg`
      }];

      expect(reducer(void 0, {
        payload: `Hamburg`,
        type: Actions.GET_CITY_OFFERS
      })).toHaveProperty(`cityOffers`, hamburgOffers);
    });
  });
});
