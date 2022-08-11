import type { RootState } from "./reducer";
import type { Song } from "../types";

export const selectSongs = (state: RootState): Song[] => state.songs;
