import React from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, Text, View } from "react-native";

import { updateFavorite } from "./redux/actions";
import { RatingStars } from "./RatingStars";
import { FavoriteHeart } from "./FavoriteHeart";

interface Props {
  id: number;
  title: string;
  cover: string;
  rating: number;
  isFavorite: boolean;
}

const SongCard = ({
  id,
  title,
  cover,
  rating,
  isFavorite,
}: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handlePressFavorite = (): void => {
    dispatch(updateFavorite(id));
  };

  const handlePressRating = (newRating: number): void => {
    console.log(`songId: ${id}, newRating: ${newRating}`);

    // dispatch(updateRating(id, newRating));
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
        <Text style={styles.titleText}>{title}</Text>
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
