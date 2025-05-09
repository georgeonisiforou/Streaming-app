import StreamingList from "@/components/StreamingList";
import React from "react";

async function fetchData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/content`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch content");
    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    return { items: [] };
  }
}

export default async function Home() {
  const streamingContent = await fetchData();

  return (
    <div className="p-4 pt-16 sm:p-8 sm:pt-16 flex flex-col gap-6">
      <h1 className="sm:text-2xl">Browse movies & TV Shows:</h1>
      <StreamingList streamingItems={streamingContent.items} />
    </div>
  );
}
