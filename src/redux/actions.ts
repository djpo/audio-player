import { UPDATE_FAVORITE, UPDATE_RATING } from "./actionTypes";
import type { Action } from "./reducer";

export const updateFavorite = (id: number): Action => ({
  type: UPDATE_FAVORITE,
  payload: { id },
});

export const updateRating = (id: number, newRating: number): Action => ({
  type: UPDATE_RATING,
  payload: { id, newRating },
});
