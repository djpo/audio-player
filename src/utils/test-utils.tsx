import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { appReducer } from "../redux/reducer";

const store = createStore(appReducer);

const AllTheProviders = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

const renderWithProviders = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { renderWithProviders };
