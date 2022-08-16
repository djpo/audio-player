import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Sound from "react-native-sound";

Sound.setCategory("Playback");

interface Props {
  url: string;
}

const AudioPlayer = ({ url }: Props): JSX.Element => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // initialize audio
    const newAudio = new Sound(url, null, (error) => {
      if (error) {
        console.log("error loading sound:", error);
        return;
      }
    });

    setAudio(newAudio);

    // clean up audio
    return () => newAudio.release();
  }, []);

  const playPause = () => {
    if (!audio) {
      console.log("audio not loaded");
    } else {
      if (!isPlaying && !audio.isPlaying()) {
        audio.play((success) => {
          if (success) {
            console.log("successfully finished playing");
            setIsPlaying(false);
          } else {
            console.log("playback failed due to audio decoding errors");
            setIsPlaying(false);
          }
        });
        setIsPlaying(true);
      }

      if (isPlaying && audio.isPlaying()) {
        audio.pause();
        setIsPlaying(false);
      }
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
