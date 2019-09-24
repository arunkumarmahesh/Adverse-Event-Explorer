import React, { useState } from "react";
import { Button, Input, Select } from "semantic-ui-react";

export interface Props<T> {
  /**
   * Names of the saved store presets.
   * @default []
   */
  storeNames: string[];
  /**
   * Current store object.
   * @default initialState
   */
  store: T;
  /**
   * Action to reset store to initialState.
   */
  resetStore: () => void;
  /**
   * Action to add and delete saved store presets.
   */
  setStoreNames: (storeName: string) => void;
  /**
   * Action to switch to chosen saved store presets.
   */
  setStoreSelection: (store: T) => void;
  /**
   * Redux dispatch function
   */
  dispatch: Function;
}

export function StoreManager<T>({
  storeNames,
  store,
  resetStore,
  setStoreNames,
  setStoreSelection,
  dispatch
}: Props<T>) {
  const [storeName, setStoreName] = useState<string>("");
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const errorMsg = "This name already exists";

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
}
