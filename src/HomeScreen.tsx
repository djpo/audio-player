import React from "react";
import { useSelector } from "react-redux";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { selectSongs } from "./redux/selectors";
import { SongCard } from "./SongCard";
import type { Song } from "./types";

const HomeScreen = ({ navigation }): JSX.Element => {
  const songs = useSelector(selectSongs);

  const handlePressSong = (screenHeader: string, id: number) => {
    navigation.navigate("Song", { screenHeader, id });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {songs.map(({ id, title, cover, rating, isFavorite }: Song) => (
            <SongCard
              key={id.toString()}
              id={id}
              title={title}
              cover={cover}
              rating={rating}
              isFavorite={isFavorite}
              handlePressSong={() => handlePressSong(title, id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: "rgb(220,220,220)",
  },
});

export { HomeScreen };
