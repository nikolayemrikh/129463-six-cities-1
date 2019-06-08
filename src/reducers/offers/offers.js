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
  offers: [],
  currentCity: ``
};

const Action = {
  LOAD_OFFERS: `load_offers`,
  CHANGE_CITY: `change_city`
};

// ф-ии создания action. action имеет type и payload
// action описывает то, что БЫЛО сделано.
// добавлен пост, изменен цвет, итд.
const ActionCreator = {
  [Action.LOAD_OFFERS]: (offers) => {
    return {
      type: Action.LOAD_OFFERS,
      payload: offers
    };
  },
  [Action.CHANGE_CITY]: (city) => {
    return {
      type: Action.CHANGE_CITY,
      payload: city
    };
  }
};

const Operation = {
  loadOffers: () => {
    return (dispatch, _getState, api) => {
      return api.get(`/hotels`)
        .then((res) => {
          dispatch(ActionCreator[Action.LOAD_OFFERS](res.data));
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
    case Action.LOAD_OFFERS:
      newState.offers = prepareOffers(payload);
      break;
    case Action.CHANGE_CITY:
      newState.currentCity = payload;
      break;
  }

  return Object.assign({}, state, newState);
};

export {Action, ActionCreator, Operation, reducer};
