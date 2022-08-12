import { UPDATE_FAVORITE, UPDATE_RATING } from "./actionTypes";
import type { Song } from "../types";

export interface RootState {
  songs: Song[];
}

const INITIAL_STATE: RootState = {
  songs: [
    {
      id: 1,
      title: "Oceansound",
      audio:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.mp3",
      cover:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.png",
      totalDurationMs: 14448,
      rating: 3,
      isFavorite: false,
    },
    {
      id: 2,
      title: "Nightlife",
      audio:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Nightlife.mp3",
      cover:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Nightlife.png",
      totalDurationMs: 15696,
      rating: 5,
      isFavorite: true,
    },
    {
      id: 3,
      title: "Waking Me",
      audio:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Waking_Me.mp3",
      cover:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Waking_Me.png",
      totalDurationMs: 13776,
      rating: 0,
      isFavorite: false,
    },
  ],
};

const appReducer = (state = INITIAL_STATE, action): RootState => {
  switch (action.type) {
    case UPDATE_FAVORITE: {
      return {
        songs: state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return {
              ...song,
              isFavorite: !song.isFavorite,
            };
          }
          return {
            ...song,
            isFavorite: false,
          };
        }),
      };
    }
    case UPDATE_RATING: {
      return {
        songs: state.songs.map((song) => {
          if (song.id === action.payload.id) {
            return {
              ...song,
              rating: action.payload.newRating,
            };
          }
          return song;
        }),
      };
    }
    default:
      return state;
  }
};

export { appReducer };
