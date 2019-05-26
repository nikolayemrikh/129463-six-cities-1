
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

import offers from "./mocks/offers";


let params = [reducer];
if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
  params.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(...params);

import App from "./components/app.jsx";

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers}/>
    </Provider>,
    document.querySelector(`#root`)
);
