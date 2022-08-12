import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  rating: number;
  handlePressRating: (newRating: number) => void;
}

const RatingStars = ({ rating, handlePressRating }: Props): JSX.Element => {
  return (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((starNumber) => {
        const isFilled = starNumber <= rating;

        return (
          <TouchableOpacity
            key={starNumber.toString()}
            onPress={() => handlePressRating(starNumber)}
          >
            <Image
              source={
                isFilled
                  ? require("./assets/star-filled-black.png")
                  : require("./assets/star-line-black.png")
              }
              style={styles.star}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  starsRow: {
    flexDirection: "row",
  },
  star: {
    width: 24,
    height: 24,
  },
});

export { RatingStars };
