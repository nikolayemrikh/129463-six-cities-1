const prepareUser = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatarSrc: user.avatar_url,
    isPremium: user.is_pro
  };
};

const initialState = {
  authRequired: true,
  user: null
};

const Action = {
  REQUIRE_AUTH: `require_auth`,
  LOG_IN: `log_in`
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
  },
  [Action.LOG_IN]: (data) => {
    return {
      type: Action.LOG_IN,
      payload: data
    };
  }
};

const Operation = {
  logIn: (credentials) => {
    return (dispatch, _getState, api) => {
      return api
        .post(`/login`, credentials)
        .then((res) => {
          if (res.status === 200) {
            dispatch(ActionCreator[Action.REQUIRE_AUTH](false));
            dispatch(ActionCreator[Action.LOG_IN](res.data));
          }
        });
    };
  },
  checkAuth: () => {
    return (dispatch, _getState, api) => {
      return api
        .get(`/login`)
        .then((res) => {
          if (res.status === 200) {
            dispatch(ActionCreator[Action.REQUIRE_AUTH](false));
            dispatch(ActionCreator[Action.LOG_IN](res.data));
          }
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
    case Action.REQUIRE_AUTH:
      newState.authRequired = payload;
      break;
    case Action.LOG_IN:
      newState.user = prepareUser(payload);
      break;
  }

  return Object.assign({}, state, newState);
};

export {Action, ActionCreator, Operation, reducer};
