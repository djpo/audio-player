import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <View>
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: song.cover }}
            resizeMode="cover"
            style={styles.cover}
          />
        </View>
        <View style={styles.heartContainer}>
          <FavoriteHeart
            isFavorite={song.isFavorite}
            size={50}
            handlePressFavorite={handlePressFavorite}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <AudioPlayer url={song.audio} />
        <RatingStars
          rating={song.rating}
          size={50}
          handlePressRating={handlePressRating}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: "rgb(220,220,220)",
    padding: 40,
  },
  coverContainer: {
    height: 300,
    alignItems: "center",
  },
  cover: {
    width: "100%",
    height: 300,
  },
  heartContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 8,
  },
  bottom: {
    alignItems: "center",
  },
});

export { SongScreen };
