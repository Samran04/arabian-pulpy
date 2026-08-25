import { FLAVORS_DATA } from "../data/flavors";
import { VALUE_PROPS } from "../data/valueProps";

/**
 * Simulates a delay for fetching data, representing network latency.
 * Set to 0 if you don't want any artificial delay.
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFlavors() {
  return FLAVORS_DATA;
}

export async function getValueProps() {
  return VALUE_PROPS;
}
