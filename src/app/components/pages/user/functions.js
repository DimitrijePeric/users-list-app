import { isNaN } from "lodash";
export const retrieveUserIdFromUrl = (url) => {
  let fragments = url.split(/\//g);
  let lastFragment = parseInt(fragments[fragments.length - 1]);

  if (typeof lastFragment !== "number") return false;
  if (isNaN(lastFragment)) return false;

  return lastFragment;
};
