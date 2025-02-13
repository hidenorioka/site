export type NestedTextList = {
  heading?: string;
  items: (string | NestedTextList)[];
};
