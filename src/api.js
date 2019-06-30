import axios from 'axios';
import {BASE_URL} from "./enums";

export const getAxios = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (res) => res;
  const onFail = (err) => {
    if (!err.request.responseURL.includes(`/login`) && err.response.status === 403) {
      history.pushState(null, null, `/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
