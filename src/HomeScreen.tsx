import React from "react";
import { useSelector } from "react-redux";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { selectSongs } from "./redux/selectors";
import { SongCard } from "./SongCard";
import type { Song } from "./types";

const HomeScreen = (): JSX.Element => {
  const songs = useSelector(selectSongs);

  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitle}>Skoovin'</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          {songs.map(({ id, title, cover, rating, isFavorite }: Song) => (
            <SongCard
              key={id.toString()}
              id={id}
              title={title}
              cover={cover}
              rating={rating}
              isFavorite={isFavorite}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appTitleContainer: {
    alignItems: "center",
    padding: 10,
  },
  appTitle: {
    fontSize: 20,
  },
});

export { HomeScreen };
