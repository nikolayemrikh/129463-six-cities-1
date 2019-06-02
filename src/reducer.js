// import offers from "./mocks/offers";

const getCityOffers = (city, offers1) => offers1.filter((o) => o.city === city);

const prepareOffers = (offers) => offers.map((offer) => {
  const {
    preview_image: image,
    is_favorite: isFavorite,
    is_premium: isPremium,
    max_adults: maxAdults,
    location,
    city,
    images,
    title,
    rating,
    type,
    bedrooms,
    price,
    goods,
    host,
    description,
    id
  } = offer;

  return {
    id,
    description,
    type,
    image,
    rating,
    price,
    location,
    city: city.name,
    cityLocation: city.location,
    title,
    images,
    bedrooms,
    host,
    goods,
    maxAdults,
    isFavorite,
    isPremium
  };
});


const initialState = {
  currentCity: ``,
  cityOffers: [],
  offers: [],
  authRequired: false
};

const Actions = {
  CHANGE_CITY: `change_city`,
  LOAD_OFFERS: `load_offers`,
  REQUIRE_AUTH: `require_auth`
};

// ф-ии создания actions. action имеет type и payload
// action описывает то, что БЫЛО сделано.
// добавлен пост, изменен цвет, итд.
const ActionCreators = {
  [Actions.CHANGE_CITY]: (city) => {
    return {
      type: Actions.CHANGE_CITY,
      payload: city
    };
  },
  [Actions.LOAD_OFFERS]: (offers) => {
    return {
      type: Actions.LOAD_OFFERS,
      payload: offers
    };
  },
  [Actions.REQUIRE_AUTH]: (status) => {
    return {
      type: Actions.REQUIRE_AUTH,
      payload: status
    };
  }
};

const Operation = {
  loadOffers: () => {
    return (dispatch, _getState, api) => {
      return api.get(`/hotels`)
        .then((res) => {
          dispatch(ActionCreators[Actions.LOAD_OFFERS](res.data));
        });
    };
  }
};

// store вызывает reducer
// reducer должен быть чистой ф-ией
const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const newState = {};
  switch (type) {
    case Actions.CHANGE_CITY:
      newState.currentCity = payload;
      newState.cityOffers = getCityOffers(payload, state.offers);
      break;
    case Actions.LOAD_OFFERS:
      newState.offers = prepareOffers(payload);
      break;
    case Actions.REQUIRE_AUTH:
      newState.authRequired = payload;
  }

  return Object.assign({}, state, newState);
};

export {Actions, ActionCreators, Operation, reducer};
