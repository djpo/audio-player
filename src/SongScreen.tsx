import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SongScreen = ({ route }): JSX.Element => (
  <View style={{ borderWidth: 1, borderColor: "red", margin: 10 }}>
    <Text>SONG SCREEN</Text>
    <Text>route.params.name: {route.params.name || "none"}</Text>
  </View>
);

const styles = StyleSheet.create({});

export { SongScreen };
