
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer, Operation, Actions, ActionCreators} from "./reducer";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {getAxios} from "./api";
import App from "./components/app.jsx";

// import offers from "./mocks/offers";


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

store.dispatch(Operation.loadOffers())
  .then(() => {
    const currentState = store.getState();
    const offer = getRandomItem(currentState.offers);

    if (offer) {
      store.dispatch(ActionCreators[Actions.CHANGE_CITY](offer.city));
    }
  });

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

