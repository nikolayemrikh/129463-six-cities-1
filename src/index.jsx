
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter} from "react-router-dom";
import {getOffers} from "./reducers/offers/selectors";
import reducer from "./reducers/index";
import {Operation as OffersOperation, Action as OffersAction, ActionCreator as OffersActionCreator} from "./reducers/offers/offers";
import {Operation as UserOperation} from "./reducers/user/user";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {getAxios} from "./api";
import App from "./components/app.jsx";

const api = getAxios((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const getRandomItem = (items) => {
  const min = 0;
  const max = Math.floor(items.length);
  return items[Math.floor(Math.random() * (max - min)) + min];
};

store.dispatch(OffersOperation.loadOffers())
  .then(() => {
    // TODO добавить селектор для получения рандомного города в reducers/offers/selectors
    const currentState = store.getState();
    const offer = getRandomItem(getOffers(currentState));

    if (offer) {
      store.dispatch(OffersActionCreator[OffersAction.CHANGE_CITY](offer.city));
    }
  });

store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);

