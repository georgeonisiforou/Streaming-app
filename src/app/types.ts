export interface StreamingItemT {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  releaseYear: number;
  genre: string[];
  rating: number;
}

export interface ThumbnailItemT {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  item: StreamingItemT;
}
