import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  isFavorite: boolean;
  handlePressFavorite: () => void;
}

const FavoriteHeart = ({
  isFavorite,
  handlePressFavorite,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePressFavorite}>
      {isFavorite ? (
        <Image
          source={require("./assets/heart-filled-black.png")}
          style={styles.heart}
        />
      ) : (
        <Image
          source={require("./assets/heart-line-black.png")}
          style={styles.heart}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heart: {
    marginTop: 6,
    width: 24,
    height: 24,
  },
});

export { FavoriteHeart };
