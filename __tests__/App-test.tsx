import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

import { renderWithProviders } from "../src/utils/test-utils";
import { App } from "../src/App";

it("renders correctly", () => {
  renderWithProviders(<App />);
});
