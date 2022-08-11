import { UPDATE_FAVORITE } from "./actionTypes";

export const updateFavorite = (id: number) => ({
  type: UPDATE_FAVORITE,
  payload: { id },
});
