export interface StreamingItemT {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  releaseYear: number;
  genre: string[];
}

export interface ThumbnailItemT {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}
