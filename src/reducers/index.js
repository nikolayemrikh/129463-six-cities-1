import {combineReducers} from "redux";
import {reducer as offers} from "./offers/offers";
import {reducer as user} from "./user/user";

import {NameSpace} from "./namespaces";

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user
});
