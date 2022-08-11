import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import { SongCard } from "../src/SongCard";

it("renders correctly", () => {
  renderer.create(<SongCard title="Song 123" />);
});
