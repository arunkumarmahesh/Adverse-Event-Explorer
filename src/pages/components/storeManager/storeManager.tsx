import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { resetStore } from "../../../store/actions";

export const StoreManager = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(resetStore())}>Reset Selections</Button>
  );
};
