import { StreamingItemT } from "@/app/types";
import React from "react";
import StreamingItem from "./StreamingItem";

interface StreamingListProps {
  streamingItems: StreamingItemT[];
}

const StreamingList = ({ streamingItems }: StreamingListProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {streamingItems.map((item: StreamingItemT) => (
        <StreamingItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnailUrl}
        />
      ))}
    </div>
  );
};

export default StreamingList;
