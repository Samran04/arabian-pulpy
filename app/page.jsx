import React from "react";
import HomeClientWrapper from "../src/components/HomeClientWrapper";
import { getFlavors, getBlogPosts, getValueProps } from "../src/services/api";

export default async function Home() {
  // Fetch data on the server side
  const [flavors, blogs, valueProps] = await Promise.all([
    getFlavors(),
    getBlogPosts(),
    getValueProps(),
  ]);

  return (
    <HomeClientWrapper
      initialFlavors={flavors}
      initialBlogs={blogs}
      initialValueProps={valueProps}
    />
  );
}
