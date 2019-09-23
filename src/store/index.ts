import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer } from "./reducers";
import { initialState } from "./initialState";
import * as t from "../types";
import * as c from "./constants";

/* const rootReducer = (state: t.AppState | undefined, action: t.ActionTypes) => {
  if (action.type === c.RESET_STORE) {
    storage.removeItem("persist:root");

    state = undefined;
  }
  return reducer(state, action);
}; */

const persistConfig = {
  key: "root",
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store: any = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
