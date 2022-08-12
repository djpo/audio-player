import "react-native";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";

import { appReducer } from "../src/redux/reducer";
import { SongCard } from "../src/SongCard";

const store = createStore(appReducer);

it("renders correctly", () => {
  render(
    <Provider store={store}>
      <SongCard
        id={1}
        title="Oceansound"
        cover="https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.png"
        rating={3}
        isFavorite={false}
      />
    </Provider>
  );
});
