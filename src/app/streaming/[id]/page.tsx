"use client";

import { usePlayer } from "@/app/context/PlayerContext";
import StreamingDetail from "@/components/StreamingDetail";
import { notFound } from "next/navigation";
import React from "react";

export default function StreamingDetailPage() {
  const { selectedContent } = usePlayer();

  if (!selectedContent) return notFound();

  return (
    <div className="p-4 pt-16 sm:p-8 sm:pt-16 w-full">
      <StreamingDetail selectedItem={selectedContent} />
    </div>
  );
}
