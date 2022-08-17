import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sound from "react-native-sound";
import Slider from "@react-native-community/slider";

Sound.setCategory("Playback");

const displayPlaytime = (seconds: number) => {
  if (seconds === -1) {
    return "--:--";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
};

// from Dan Abramov's useInterval solution
// https://overreacted.io/making-setinterval-declarative-with-react-hooks
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

interface Props {
  url: string;
}

const AudioPlayer = ({ url }: Props): JSX.Element => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(-1);
  const [currentTime, setCurrentTime] = useState(-1);

  // initialize & clean up audio
  useEffect(() => {
    // initialize
    const newAudio = new Sound(url, null, (error) => {
      if (error) {
        console.log("error loading sound:", error);
        return;
      }
    });
    setAudio(newAudio);
    // clean up
    return () => newAudio.release();
  }, []);

  // set currentTime & duration (every 0.1 seconds)
  useInterval(() => {
    if (audio) {
      audio.getCurrentTime((secs) => {
        setCurrentTime(secs);
      });

      setDuration(audio.getDuration());
    }
  }, 30);

  const handlePressPlayPause = () => {
    if (audio) {
      // set currentTime & duration (once)
      setDuration(audio.getDuration());
      audio.getCurrentTime((secs) => {
        setCurrentTime(secs);
      });

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

  const getSliderValue = (): number => {
    if (currentTime < 0 || duration < 0) {
      return 0;
    }
    return currentTime / duration;
  };

  const handleOnSlidingComplete = (value: number): void => {
    if (audio && duration >= 0) {
      audio.setCurrentTime(value * duration);
    }
  };

  return (
    <View style={styles.playerContainer}>
      <TouchableOpacity
        onPress={handlePressPlayPause}
        style={styles.playPauseButton}
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="rgb(80,80,80)"
        maximumTrackTintColor="rgb(40,40,40)"
        thumbTintColor="rgb(80,80,80)"
        value={getSliderValue()}
        onSlidingComplete={handleOnSlidingComplete}
      />
      <View style={styles.playtimeContainer}>
        <Text style={styles.playtime}>
          {displayPlaytime(currentTime)} / {displayPlaytime(duration)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerContainer: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  playPauseButton: {
    position: "absolute",
    top: -200,
    height: 100,
    width: 100,
    backgroundColor: "transparent",
  },
  slider: {
    width: 300,
    height: 40,
  },
  playtimeContainer: {
    height: 30,
  },
  playtime: {
    fontSize: 30,
    color: "black",
  },
});

export { AudioPlayer };
