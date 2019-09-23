import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { AdverseExplorer } from "./adverseExplorer";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    {/*   <PersistGate persistor={persistor}> */}
    <AdverseExplorer />
    {/*   </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
