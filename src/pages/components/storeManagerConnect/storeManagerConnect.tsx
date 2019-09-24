import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetStore,
  setStoreNames,
  setStoreSelection
} from "../../../store/actions";
import { AppState } from "../../../types";
import { StoreManager } from "../../../components/utils/storeManager/storeManager";

export const StoreManagerConnect = () => {
  const dispatch = useDispatch();
  const storeNames = useSelector((state: AppState) => state.storeNames);
  const store = useSelector((state: AppState) => state);

  return (
    <StoreManager
      storeNames={storeNames}
      store={store}
      resetStore={resetStore}
      setStoreNames={setStoreNames}
      setStoreSelection={setStoreSelection}
      dispatch={dispatch}
    />
  );
};
