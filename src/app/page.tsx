import StreamingList from "@/components/StreamingList";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/content", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const streamingContent = await fetchData();

  return (
    <div>
      <StreamingList streamingItems={streamingContent.items} />
    </div>
  );
}
