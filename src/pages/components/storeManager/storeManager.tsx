import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Select, Icon } from "semantic-ui-react";
import { resetStore, setStoreNames } from "../../../store/actions";
import { AppState } from "../../../types";

export const StoreManager = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const errorMsg = "This name already exists";

  const storeNames = useSelector((state: AppState) => state.storeNames);
  const [selectedStore, setSelectedStore] = useState<string>();

  const handleChange = (e: any, { value }: any) => {
    value.length > 0 && setDisabled(false);
    if (storeNames.includes(value)) {
      setDisabled(true);
      setShowErrorMsg(true);
    } else {
      setDisabled(false);
      setShowErrorMsg(false);
    }
    setName(value);
  };

  const saveStoreName = () => {
    dispatch(setStoreNames(name));
    setName("");
  };

  const deleteStoreName = () => {
    dispatch(setStoreNames(name));
    dispatch(resetStore());
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

  const handleSelectChange = (e: any, { value }: any) => {
    setSelectedStore(value);
  };

  return (
    <div>
      <Button onClick={() => dispatch(resetStore())}>Reset Selection</Button>
      <Input
        action={{
          icon: "save",
          onClick: saveStoreName,
          disabled
        }}
        onChange={handleChange}
        placeholder="Save Selection..."
        value={name}
      />
      {showErrorMsg && <p>{errorMsg}</p>}
      {storeNames.length > 0 && (
        <>
          <Select
            placeholder="Select Selection"
            options={generatSelectOptions(storeNames)}
            onChange={handleSelectChange}
            value={selectedStore}
          />
          {selectedStore && (
            <Button onClick={deleteStoreName}>Delete Selection</Button>
          )}
        </>
      )}
    </div>
  );
};
