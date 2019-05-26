import offers from "./mocks/offers";

const getCityOffers = (city, offers1) => offers1.filter((o) => o.city === city);

const currentCity = offers[0].city;
const initialState = {
  currentCity,
  cityOffers: getCityOffers(currentCity, offers)
};

const Actions = {
  CHANGE_CITY: `change_city`,
  CHANGE_CITY_OFFERS: `get_city_offers`
};

// ф-ии создания actions. action имеет type и payload
const ActionCreators = {
  [Actions.CHANGE_CITY]: (city) => {
    return {
      type: Actions.CHANGE_CITY,
      payload: city
    };
  },
  [Actions.CHANGE_CITY_OFFERS]: (city) => {
    return {
      type: Actions.CHANGE_CITY_OFFERS,
      payload: getCityOffers(city, offers)
    };
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const newState = {};
  switch (type) {
    case Actions.CHANGE_CITY:
      newState.currentCity = payload;
      break;
    case Actions.CHANGE_CITY_OFFERS:
      newState.cityOffers = payload;
      break;
  }

  return Object.assign({}, state, newState);
};

export {Actions, ActionCreators, reducer};
