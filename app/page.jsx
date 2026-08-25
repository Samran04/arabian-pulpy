import React from "react";
import HomeClientWrapper from "../src/components/HomeClientWrapper";
import { getFlavors, getValueProps } from "../src/services/api";

export default async function Home() {
  // Fetch data on the server side
  const [flavors, valueProps] = await Promise.all([
    getFlavors(),
    getValueProps(),
  ]);

  return (
    <HomeClientWrapper
      initialFlavors={flavors}
      initialValueProps={valueProps}
    />
  );
}
