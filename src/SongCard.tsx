import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
}

const SongCard = ({ title }: Props): JSX.Element => {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text>⭐️⭐️⭐️⭐️⭐️</Text>
        <Text>img</Text>
      </View>
      <View style={styles.bottom}>
        <Text>{title}</Text>
        <Text>❤️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    boderColor: "red",
    padding: 10,
  },
  top: {
    borderWidth: 2,
    boderColor: "blue",
  },
  bottom: {
    borderWidth: 2,
    boderColor: "green",
  },
});

export { SongCard };
