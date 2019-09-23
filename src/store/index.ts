import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer } from "./reducers";
import { initialState } from "./initialState";
import * as t from "../types";
import * as c from "./constants";

const persistConfig = {
  key: "current",
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
