import axios from 'axios';
import {BASE_URL} from "./enums";
import {ActionCreator as UserActionCreator, Action as UserAction} from "./reducers/user/user";

export const getAxios = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });


  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      history.pushState(null, null, `/login`);
      // dispatch(UserActionCreator[UserAction.REQUIRE_AUTH](true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
