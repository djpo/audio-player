import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { appReducer } from "./redux/reducer";
import { HomeScreen } from "./HomeScreen";

const App = (): JSX.Element => {
  const store = createStore(appReducer);

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export { App };
