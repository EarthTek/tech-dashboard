import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  loggedIn: false,
  site_information: [],
  repositories: [],
  devices: [],
  psaForms: [],
  psassgForms: [],
  userRole: "default",
  userInfo: {}
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export const Context = createContext(initialState);
export default Store;
