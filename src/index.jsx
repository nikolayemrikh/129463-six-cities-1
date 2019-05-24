
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

import offers from "./mocks/offers";

const store = createStore(reducer);

import App from "./components/app.jsx";

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers}/>
    </Provider>,
    document.querySelector(`#root`)
);
