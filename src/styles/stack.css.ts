import { style } from "@vanilla-extract/css";

export const stack = style({
  display: "flex",
});

export const vStack = style([
  stack,
  {
    flexDirection: "column",
  },
]);

export const hStack = style([
  stack,
  {
    flexDirection: "row",
  },
]);
