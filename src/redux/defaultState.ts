import type { RootState } from "./reducer";

export const DEFAULT_STATE: RootState = {
  songs: [
    {
      id: 1,
      title: "Oceansound",
      audio:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.mp3",
      cover:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.png",
      totalDurationMs: 14448,
      rating: 3,
      isFavorite: false,
    },
    {
      id: 2,
      title: "Nightlife",
      audio:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Nightlife.mp3",
      cover:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Nightlife.png",
      totalDurationMs: 15696,
      rating: 5,
      isFavorite: true,
    },
    {
      id: 3,
      title: "Waking Me",
      audio:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Waking_Me.mp3",
      cover:
        "https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Waking_Me.png",
      totalDurationMs: 13776,
      rating: 0,
      isFavorite: false,
    },
  ],
};
