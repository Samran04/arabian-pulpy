import { FLAVORS_DATA } from "../data/flavors";
import { BLOG_POSTS } from "../data/blog";
import { VALUE_PROPS } from "../data/valueProps";

/**
 * Simulates a delay for fetching data, representing network latency.
 * Set to 0 if you don't want any artificial delay.
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFlavors() {
  // Simulate network fetch
  // await delay(500); 
  return FLAVORS_DATA;
}

export async function getBlogPosts() {
  // Simulate network fetch
  // await delay(500);
  return BLOG_POSTS;
}

export async function getValueProps() {
  // Simulate network fetch
  // await delay(500);
  return VALUE_PROPS;
}
