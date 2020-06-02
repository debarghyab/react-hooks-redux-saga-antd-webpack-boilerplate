import React from "react";
import { Provider } from "react-redux";
import store from "@store/root";

import AppRouter from "./AppRouter";
import sampleReducer from "@store/sampleReducer";

console.log("Running App", process.env.NODE_ENV);

const App = () => {
  return <AppRouter />;
};

const AppHoc = sampleReducer.connecter(App);

const StoreProvidedApp = () => (
  <Provider store={store}>
    <AppHoc />
  </Provider>
);

export default StoreProvidedApp;
