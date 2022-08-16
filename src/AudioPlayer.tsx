import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  url: string;
}

const AudioPlayer = ({ url }: Props): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <TouchableOpacity
      onPress={playPause}
      style={isPlaying ? styles.audioPlaying : styles.audioNotPlaying}
    >
      <Text style={styles.text}>{isPlaying ? "pause" : "play"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  audioNotPlaying: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  audioPlaying: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  text: {
    fontSize: 30,
  },
});

export { AudioPlayer };
