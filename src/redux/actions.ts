import { UPDATE_FAVORITE, UPDATE_RATING } from "./actionTypes";

export const updateFavorite = (id: number) => ({
  type: UPDATE_FAVORITE,
  payload: { id },
});

export const updateRating = (id: number, newRating: number) => ({
  type: UPDATE_RATING,
  payload: { id, newRating },
});
