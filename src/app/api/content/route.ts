import { NextResponse } from "next/server";
import { items } from "@/app/mockData";

export async function GET() {
  return NextResponse.json({ items });
}
