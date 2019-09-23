import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Select, Icon } from "semantic-ui-react";
import {
  resetStore,
  setStoreNames,
  setStoreSelection
} from "../../../store/actions";
import { AppState } from "../../../types";

export const StoreManager = () => {
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState<string>("");
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const errorMsg = "This name already exists";

  const storeNames = useSelector((state: AppState) => state.storeNames);
  const store = useSelector((state: AppState) => state);
  const [selectedStoreName, setSelectedStoreName] = useState<string>();

  const handleResetStore = () => {
    dispatch(resetStore());
    setSelectedStoreName("");
  };

  const handleSelectionNameChange = (e: any, { value }: any) => {
    value.length > 0 && setDisabled(false);
    if (storeNames.includes(value)) {
      setDisabled(true);
      setShowErrorMsg(true);
    } else {
      setDisabled(false);
      setShowErrorMsg(false);
    }
    setStoreName(value);
  };

  const saveStoreSelection = () => {
    try {
      localStorage.setItem(storeName, JSON.stringify(store));
    } catch {
      return undefined;
    }
    dispatch(setStoreNames(storeName));
    setStoreName("");
  };

  const generatSelectOptions = (storeNames: string[]) => {
    let options: any = [];
    storeNames.forEach((value: string) => {
      options.push({
        key: value,
        value: value,
        text: value
      });
    });
    return options;
  };

  const handleStoreSelectionChange = (e: any, { value }: any) => {
    try {
      const serializedStore = localStorage.getItem(value);
      if (serializedStore === null) {
        return undefined;
      }
      setSelectedStoreName(value);
      dispatch(setStoreSelection(JSON.parse(serializedStore)));
    } catch (err) {
      return undefined;
    }
  };

  const deleteStoreSelection = () => {
    try {
      localStorage.removeItem(selectedStoreName!);
    } catch {
      return undefined;
    }

    dispatch(setStoreNames(selectedStoreName!));
    dispatch(resetStore());
  };

  return (
    <div>
      <Button onClick={handleResetStore}>Reset Selection</Button>
      <Input
        action={{
          icon: "save",
          onClick: saveStoreSelection,
          disabled
        }}
        onChange={handleSelectionNameChange}
        placeholder="Save Selection..."
        value={storeName}
      />
      {showErrorMsg && <p>{errorMsg}</p>}
      {storeNames.length > 0 && (
        <>
          <Select
            placeholder="Select Selection"
            options={generatSelectOptions(storeNames)}
            onChange={handleStoreSelectionChange}
            value={selectedStoreName}
          />
          {selectedStoreName && (
            <Button onClick={deleteStoreSelection}>Delete Selection</Button>
          )}
        </>
      )}
    </div>
  );
};
