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
    <View style={styles.card}>
      <View style={styles.top}>
        <RatingStars rating={rating} handlePressRating={handlePressRating} />
        <View style={styles.coverContainer}>
          <Image source={{ uri: cover }} style={styles.cover} />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handlePressSong}>
          <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
        <FavoriteHeart
          isFavorite={isFavorite}
          handlePressFavorite={handlePressFavorite}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  top: {},
  coverContainer: {
    marginTop: 6,
    height: 100,
  },
  cover: {
    width: 200,
    height: 100,
  },
  bottom: {
    paddingTop: 6,
  },
  titleText: {
    fontSize: 28,
    color: "white",
  },
});

export { SongCard };
