import {createSelector} from "reselect";

import {NameSpace} from "../namespaces";

const NAMESPACE = NameSpace.OFFERS;

export const getOffers = (state) => {
  return state[NAMESPACE].offers;
};

export const getCurrentCity = (state) => {
  return state[NAMESPACE].currentCity;
};

export const getCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((o) => o.city === city)
);

export const getFavoriteOffers = (state) => {
  return state[NAMESPACE].favoriteOffers;
};

export const getCitiesWithFavoriteOffers = createSelector(
    getFavoriteOffers,
    (favoriteOffers) => Object.values(favoriteOffers.reduce((acc, offer) => {
      const city = offer.city;
      if (!acc[city]) {
        acc[city] = {
          city,
          offers: []
        };
      }
      acc[city].offers.push(offer);
      return acc;
    }, {}))
);
