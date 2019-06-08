const initialState = {
  authRequired: false
};

const Action = {
  REQUIRE_AUTH: `require_auth`
};

// ф-ии создания action. action имеет type и payload
// action описывает то, что БЫЛО сделано.
// добавлен пост, изменен цвет, итд.
const ActionCreator = {
  [Action.REQUIRE_AUTH]: (status) => {
    return {
      type: Action.REQUIRE_AUTH,
      payload: status
    };
  }
};

// store вызывает reducer
// reducer должен быть чистой ф-ией
const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const newState = {};
  switch (type) {
    case Action.REQUIRE_AUTH:
      newState.authRequired = payload;
  }

  return Object.assign({}, state, newState);
};

export {Action, ActionCreator, reducer};
