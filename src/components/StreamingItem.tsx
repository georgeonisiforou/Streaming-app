"use client";

import { ThumbnailItemT } from "@/app/types";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/app/context/PlayerContext";
import { motion } from "framer-motion";
import { MdFavorite } from "react-icons/md";

const StreamingItem = ({
  id,
  thumbnail,
  title,
  description,
  item,
}: ThumbnailItemT) => {
  const router = useRouter();
  const { setSelectedContent, setPlaybackState, setFavorites, favorites } =
    usePlayer();

  const handleClick = () => {
    setSelectedContent(item);
    setPlaybackState("playing");
    router.push(`/streaming/${id}`);
  };

  const handleAddFavorite = () => {
    const alreadyFavorited = favorites?.some((fav) => fav.id === item.id);
    if (!alreadyFavorited) {
      setFavorites((prev) => [...prev, item]);
    }
  };

  return (
    <motion.div
      role="button"
      aria-label={`Play ${title}`}
      tabIndex={0}
      onClick={handleClick}
      className="group flex flex-col w-[250px] h-[200px] relative p-3 overflow-hidden justify-end rounded-sm cursor-pointer shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <button
        className="absolute top-2 right-2 z-10 w-[20px] h-[20px] cursor-pointer"
        onClick={handleAddFavorite}
      >
        <MdFavorite className="text-xl hover:text-red-600 transition-all" />
      </button>

      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
        <Image
          alt="movie thumbnail"
          src={thumbnail}
          fill
          style={{ objectFit: "cover", opacity: 0.6 }}
          loading="lazy"
        />
      </div>

      <div className="relative">
        <span className="font-bold text-white">{title}</span>
        <span className="font-light text-xs text-slate-300 block">
          {description}
        </span>
      </div>
    </motion.div>
  );
};

export default StreamingItem;
