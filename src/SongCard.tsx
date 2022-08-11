import React from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { updateFavorite } from "./redux/actions";

interface Props {
  title: string;
  cover: string;
  rating: number;
  isFavorite: boolean;
}

const SongCard = ({ title, cover, rating, isFavorite }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handlePressFavorite = (): void => {
    dispatch(updateFavorite());
  };

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.ratingText}>{`⭐️ x ${rating}`}</Text>
        <View style={styles.coverContainer}>
          <Image source={{ uri: cover }} style={styles.cover} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity onPress={() => handlePressFavorite()}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  top: {},
  ratingText: {
    fontSize: 24,
    color: "white",
  },
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
  heart: {
    marginTop: 6,
    width: 24,
    height: 24,
  },
});

export { SongCard };
