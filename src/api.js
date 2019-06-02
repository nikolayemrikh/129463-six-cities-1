import axios from 'axios';
import {ActionCreators, Actions} from "./reducer";

export const getAxios = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });


  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionCreators[Actions.REQUIRE_AUTH](true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
