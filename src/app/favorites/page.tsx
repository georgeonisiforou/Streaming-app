"use client";

import { usePlayer } from "@/app/context/PlayerContext";
import StreamingItem from "@/components/StreamingItem";
import { notFound } from "next/navigation";
import React from "react";

export default function FavoritesPage() {
  const { favorites } = usePlayer();

  if (!favorites) return notFound();

  return (
    <div className="p-4 pt-16 sm:p-8 sm:pt-16 w-full flex flex-col gap-6">
      <h1 className="sm:text-2xl">My List:</h1>
      <div className=" flex flex-wrap lg:gap-6 gap-4 justify-center">
        {favorites?.map((item) => (
          <StreamingItem
            id={item.id}
            description={item.description}
            title={item.title}
            thumbnail={item.thumbnailUrl}
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
