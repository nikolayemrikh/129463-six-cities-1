import {Action, reducer} from "./user";

describe(`called without known action`, () => {
  it(`should return initial state by default`, () => {
    expect(reducer(void 0, {})).toHaveProperty(`authRequired`, false);
  });
});

describe(`require auth action`, () => {
  it(`should return correct state object`, () => {
    let state = reducer(void 0, {
      payload: true,
      type: Action.REQUIRE_AUTH
    });
    expect(state).toHaveProperty(`authRequired`, true);

    state = reducer(state, {
      payload: false,
      type: Action.REQUIRE_AUTH
    });
    expect(state).toHaveProperty(`authRequired`, false);
  });
});

