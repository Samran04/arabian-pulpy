import { NextResponse } from "next/server";
import { FLAVORS_DATA } from "../../../src/data/flavors";

export async function GET() {
  // Simulating database fetch
  return NextResponse.json({ flavors: FLAVORS_DATA });
}
