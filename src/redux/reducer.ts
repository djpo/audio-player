import { UPDATE_FAVORITE, UPDATE_RATING } from "./actionTypes";
import { DEFAULT_STATE } from "./defaultState";
import type { Song } from "../types";

export interface RootState {
  songs: Song[];
}

export interface Action {
  type: string;
  payload: any;
}

const INITIAL_STATE = DEFAULT_STATE;

const appReducer = (state = INITIAL_STATE, action: Action): RootState => {
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
