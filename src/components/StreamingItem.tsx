"use client";

import { ThumbnailItemT } from "@/app/types";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/app/context/PlayerContext";

const StreamingItem = ({
  id,
  thumbnail,
  title,
  description,
}: ThumbnailItemT) => {
  const router = useRouter();
  const { setSelectedContent, setPlaybackState } = usePlayer();

  const handleClick = () => {
    setSelectedContent({ id });
    setPlaybackState("playing");
    router.push(`/streaming/${id}`);
  };

  return (
    <div
      className="flex flex-col w-[300px] h-[300px] relative p-3 overflow-hidden justify-end"
      onClick={handleClick}
    >
      <Image
        alt="movie thumbnail"
        src={thumbnail}
        fill
        style={{ objectFit: "cover", opacity: 0.6 }}
      />
      <span className="z-10 font-bold">{title}</span>
      <span className="z-10 font-light text-sm">{description}</span>
    </div>
  );
};

export default StreamingItem;
