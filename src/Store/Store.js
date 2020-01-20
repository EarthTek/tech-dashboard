import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  helloText: "hello world",
  site_information: [],
  repositories: [],
  devices: []
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export const Context = createContext(initialState);
export default Store;