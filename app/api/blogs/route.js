import { NextResponse } from "next/server";
import { BLOG_POSTS } from "../../../src/data/blog";

export async function GET() {
  // Simulating database fetch
  return NextResponse.json({ blogs: BLOG_POSTS });
}
