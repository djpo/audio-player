import React from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { updateFavorite, updateRating } from "./redux/actions";
import { RatingStars } from "./RatingStars";
import { FavoriteHeart } from "./FavoriteHeart";

interface Props {
  id: number;
  title: string;
  cover: string;
  rating: number;
  isFavorite: boolean;
  handlePressSong: () => void;
}

const SongCard = ({
  id,
  title,
  cover,
  rating,
  isFavorite,
  handlePressSong,
}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const handlePressFavorite = (): void => {
    dispatch(updateFavorite(id));
  };
  const handlePressRating = (newRating: number): void => {
    dispatch(updateRating(id, newRating));
  };

  return (
    <TouchableOpacity onPress={handlePressSong} style={styles.card}>
      <View style={styles.top}>
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: cover }}
            resizeMode="cover"
            style={styles.cover}
          />
        </View>
        <View style={styles.starsContainer}>
          <RatingStars rating={rating} handlePressRating={handlePressRating} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.heartContainer}>
          <FavoriteHeart
            isFavorite={isFavorite}
            handlePressFavorite={handlePressFavorite}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "black",
    margin: 20,
    marginBottom: 0,
  },
  top: {},
  starsContainer: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 8,
  },
  coverContainer: {
    alignItems: "center",
  },
  cover: {
    width: "100%",
    height: 150,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  titleText: {
    fontSize: 30,
    color: "black",
  },
  heartContainer: {
    position: "absolute",
    right: 5,
    padding: 5,
  },
});

export { SongCard };
