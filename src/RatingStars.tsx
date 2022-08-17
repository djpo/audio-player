import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  rating: number;
  size?: number;
  handlePressRating: (newRating: number) => void;
}

const RatingStars = ({
  rating,
  size = 24,
  handlePressRating,
}: Props): JSX.Element => {
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
              style={{ height: size, width: size }}
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
    justifyContent: "center",
  },
});

export { RatingStars };
