"use client";

import React, { createContext, useContext, useState } from "react";
import { StreamingItemT } from "../types";

export type PlaybackState = "playing" | "paused";
interface PlayerContextType {
  selectedContent: StreamingItemT | null;
  setSelectedContent: (content: StreamingItemT | null) => void;
  playbackState: PlaybackState;
  setPlaybackState: (state: PlaybackState) => void;
  progress: { [key: string]: number };
  setProgress: (id: string, playedSeconds: number) => void;
  favorites: StreamingItemT[] | null;
  setFavorites: (content: StreamingItemT[] | []) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedContent, setSelectedContent] = useState<StreamingItemT | null>(
    null
  );
  const [playbackState, setPlaybackState] = useState<PlaybackState>("paused");

  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  const [favorites, setFavorites] = useState<StreamingItemT[] | []>([]);

  const handleProgress = (id: string, playedSeconds: number) => {
    setProgress((prevProgress) => ({
      ...prevProgress,
      [id]: playedSeconds,
    }));
  };

  return (
    <PlayerContext.Provider
      value={{
        selectedContent,
        setSelectedContent,
        playbackState,
        setPlaybackState,
        progress,
        setProgress: handleProgress,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error("usePlayer must be used within PlayerProvider");
  return context;
};
