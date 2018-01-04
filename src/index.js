import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/App";
import "./index.css";

//custom middleware
import logger from "redux-logger";
import thunk from "redux-thunk";

//setting up the store
import starWars from "./reducers";

let store = createStore(starWars, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
