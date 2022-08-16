import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sound from "react-native-sound";

Sound.setCategory("Playback");

const displayPlaytime = (seconds: number) => {
  if (seconds === -1) {
    return "--:--";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
};

interface Props {
  url: string;
}

const AudioPlayer = ({ url }: Props): JSX.Element => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(-1);

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
      setDuration(audio.getDuration());

      // audio is not playing
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

      // audio is playing
      if (isPlaying && audio.isPlaying()) {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <View style={styles.playerContainer}>
      <TouchableOpacity
        onPress={playPause}
        style={isPlaying ? styles.audioPlaying : styles.audioNotPlaying}
      >
        <Text style={styles.buttonText}>{isPlaying ? "pause" : "play"}</Text>
      </TouchableOpacity>
      <View style={styles.sliderContainer}>
        <Text style={styles.slider}>----------(slider)----------</Text>
      </View>
      <View style={styles.playtimeContainer}>
        <Text style={styles.playtime}>{displayPlaytime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerContainer: {
    alignItems: "center",
  },
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
  buttonText: {
    fontSize: 30,
  },
  sliderContainer: {
    marginBottom: 20,
    height: 30,
    alignItems: "center",
  },
  slider: {
    fontSize: 30,
  },
  playtimeContainer: {
    marginBottom: 20,
    height: 30,
  },
  playtime: {
    fontSize: 30,
  },
});

export { AudioPlayer };
