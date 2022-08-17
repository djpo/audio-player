import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface Props {
  isFavorite: boolean;
  size?: number;
  handlePressFavorite: () => void;
}

const FavoriteHeart = ({
  isFavorite,
  size = 24,
  handlePressFavorite,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePressFavorite}>
      {isFavorite ? (
        <Image
          source={require("./assets/heart-filled-black.png")}
          style={{ height: size, width: size }}
        />
      ) : (
        <Image
          source={require("./assets/heart-line-black.png")}
          style={{ height: size, width: size }}
        />
      )}
    </TouchableOpacity>
  );
};

export { FavoriteHeart };
