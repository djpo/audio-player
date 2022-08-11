export interface Song {
  id: number;
  title: string;
  audio: string;
  cover: string;
  totalDurationMs: number;
  rating: number;
  isFavorite: boolean;
}
