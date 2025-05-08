"use client";

import React, { createContext, useContext, useState } from "react";

export type PlaybackState = "playing" | "paused";

type ContentItem = {
  id: string;
  title?: string;
  videoUrl?: string;
};

interface PlayerContextType {
  selectedContent: ContentItem | null;
  setSelectedContent: (content: ContentItem) => void;
  playbackState: PlaybackState;
  setPlaybackState: (state: PlaybackState) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(
    null
  );
  const [playbackState, setPlaybackState] = useState<PlaybackState>("paused");

  return (
    <PlayerContext.Provider
      value={{
        selectedContent,
        setSelectedContent,
        playbackState,
        setPlaybackState,
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
