import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { selectSongs } from "./redux/selectors";
import { updateFavorite, updateRating } from "./redux/actions";
import { AudioPlayer } from "./AudioPlayer";
import { FavoriteHeart } from "./FavoriteHeart";
import { RatingStars } from "./RatingStars";
import type { Song } from "./types";

interface Props {
  id: number;
}

const SongScreen = ({ route }: Props): JSX.Element => {
  const songs: Song[] = useSelector(selectSongs);
  const song: Song = songs.find((song) => song.id === route.params.id);

  const dispatch = useDispatch();
  const handlePressFavorite = (): void => {
    dispatch(updateFavorite(song.id));
  };
  const handlePressRating = (newRating: number): void => {
    dispatch(updateRating(song.id, newRating));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <View style={styles.coverContainer}>
          <Image source={{ uri: song.cover }} style={styles.cover} />
        </View>
        <FavoriteHeart
          isFavorite={song.isFavorite}
          handlePressFavorite={handlePressFavorite}
        />
      </View>
      <View style={styles.bottom}>
        <AudioPlayer url={song.audio} />
        <RatingStars
          rating={song.rating}
          handlePressRating={handlePressRating}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  top: {},
  coverContainer: {
    height: 100,
  },
  cover: {
    width: 200,
    height: 100,
  },
  bottom: {
    alignItems: "center",
  },
});

export { SongScreen };
