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
