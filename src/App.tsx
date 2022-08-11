import React from "react";
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
import { SongCard } from "./SongCard";

const App = (): JSX.Element => {
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
          style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}
        >
          <SongCard title="Song 1" />
          <SongCard title="Song 2" />
          <SongCard title="Song 3" />
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

export { App };
