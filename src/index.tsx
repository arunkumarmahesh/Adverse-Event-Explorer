import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { AdverseExplorer } from "./adverseExplorer";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <AdverseExplorer />
  </Provider>,
  document.getElementById("root")
);
