import {NameSpace} from "../namespaces";

const NAMESPACE = NameSpace.USER;

export const getIsAuthRequired = (state) => {
  return state[NAMESPACE].authRequired;
};

export const getUser = (state) => {
  return state[NAMESPACE].user;
};
