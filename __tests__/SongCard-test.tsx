import "react-native";
import React from "react";

import { renderWithProviders } from "../src/utils/test-utils";
import { SongCard } from "../src/SongCard";

it("renders correctly", () => {
  renderWithProviders(
    <SongCard
      id={1}
      title="Oceansound"
      cover="https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.png"
      rating={3}
      isFavorite={false}
    />
  );
});
