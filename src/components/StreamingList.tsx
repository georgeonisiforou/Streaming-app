import { StreamingItemT } from "@/app/types";
import React from "react";
import StreamingItem from "./StreamingItem";

interface StreamingListProps {
  streamingItems: StreamingItemT[];
}

const StreamingList = ({ streamingItems }: StreamingListProps) => {
  return (
    <div className="flex flex-wrap lg:gap-6 gap-4 justify-center">
      {streamingItems.map((item: StreamingItemT) => (
        <StreamingItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnailUrl}
          item={item}
        />
      ))}
    </div>
  );
};

export default StreamingList;
