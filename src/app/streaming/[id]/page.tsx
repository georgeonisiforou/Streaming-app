import { StreamingItemT } from "@/app/types";
import { notFound } from "next/navigation";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/content", {
    cache: "no-store",
  });
  return res.json();
}

interface PageProps {
  params: { id: string };
}

export default async function StreamingDetail({ params }: PageProps) {
  const { items } = await fetchData();

  const selectedItem = items.find(
    (item: StreamingItemT) => item.id === params.id
  );

  if (!selectedItem) return notFound();

  return <div>{selectedItem.title}</div>;
}
