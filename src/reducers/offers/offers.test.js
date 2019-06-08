import AxiosMockAdapter from "axios-mock-adapter";

import {Action, Operation, reducer} from "./offers";
import {getAxios} from "../../api";

describe(`called without known action`, () => {
  const mock = {
    currentCity: ``,
    offers: []
  };

  it(`should return initial state by default`, () => {
    expect(reducer(void 0, {})).toEqual(mock);
  });
});

describe(`change city action`, () => {
  it(`should return correct state object`, () => {
    let state = reducer(void 0, {
      payload: `Brussels`,
      type: Action.CHANGE_CITY
    });
    expect(state).toHaveProperty(`currentCity`, `Brussels`);

    state = reducer(state, {
      payload: `Dusseldorf`,
      type: Action.CHANGE_CITY
    });
    expect(state).toHaveProperty(`currentCity`, `Dusseldorf`);
  });
});

describe(`load offers operation`, () => {
  it(`should make a correct API call`, () => {
    const dispatch = jest.fn();
    const api = getAxios(dispatch);
    const apiMock = new AxiosMockAdapter(api);

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);


    return Operation.loadOffers()(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: Action.LOAD_OFFERS,
        payload: [{fake: true}]
      });
    });
  });
});
