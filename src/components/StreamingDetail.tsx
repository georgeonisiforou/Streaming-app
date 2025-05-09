"use client";

import { usePlayer } from "@/app/context/PlayerContext";
import { StreamingItemT } from "@/app/types";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { MdFavorite } from "react-icons/md";

export default function StreamingDetail({
  selectedItem,
}: {
  selectedItem: StreamingItemT;
}) {
  const [isReady, setIsReady] = React.useState(false);
  const { playbackState, setPlaybackState, setProgress, progress, favorites } =
    usePlayer();

  const playerRef = useRef<ReactPlayer | null>(null);

  const handleProgress = (progressData: { playedSeconds: number }) => {
    setProgress(selectedItem.id, progressData.playedSeconds);
  };

  const handlePlayFromBeginning = () => {
    setProgress(selectedItem.id, 0);
    playerRef.current?.seekTo(0, "seconds");
    setPlaybackState("playing");
  };

  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = progress[selectedItem.id] || 0;
      playerRef.current?.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);

  const isFavorite = favorites?.find((item) => item.id === selectedItem.id);

  return (
    <motion.div
      className="flex flex-col gap-6 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full bg-black flex justify-center items-center">
        <div className="aspect-video w-full max-h-[600px] flex justify-center">
          <ReactPlayer
            ref={playerRef}
            onReady={onReady}
            url={selectedItem.videoUrl}
            controls
            width="100%"
            height="100%"
            playing={playbackState === "playing"}
            onPause={() => setPlaybackState("paused")}
            onProgress={handleProgress}
            progressInterval={1000}
            played={progress[selectedItem.id] || 0}
          />
        </div>
      </div>

      <div className="flex gap-6">
        <button
          className="flex gap-2 justify-center items-center bg-blue-700 w-fit p-1 px-2 cursor-pointer hover:bg-blue-500 transition-all rounded-md"
          onClick={handlePlayFromBeginning}
        >
          <span>⏪︎</span>
          <span>Play from the beginning</span>
        </button>

        {isFavorite && (
          <div className="border-red-500 border rounded-md flex justify-center items-center p-1">
            <MdFavorite className="text-2xl text-red-500" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 border border-slate-700 rounded-md p-2">
        <div className="flex gap-4 sm:gap-10 items-center flex-wrap">
          <span className="sm:text-5xl text-lg font-bold text-blue-100">
            {selectedItem.title}
          </span>
          <div className="flex justify-center items-center text-lg font-bold bg-amber-300 text-black w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-sm sm:rounded-lg">
            {selectedItem.rating}
          </div>
          <div className="flex gap-2 items-center ">
            {selectedItem.genre.map((item, idx) => (
              <span
                key={idx}
                className="flex justify-center items-center border-blue-400 border px-1 sm:p-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <span className="text-sm sm:text-lg bg-slate-900 py-2 px-2 rounded-md w-fit">
          {selectedItem.description}
        </span>
        <span>Duration: {selectedItem.duration}</span>
        <span>Realeased on: {selectedItem.releaseYear}</span>
      </div>
    </motion.div>
  );
}
