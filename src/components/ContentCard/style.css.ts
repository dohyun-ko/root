import { vStack } from "@/styles/stack.css";
import { createVar, style } from "@vanilla-extract/css";

export const titleSize = createVar();
export const backgroundImageVar = createVar();

export const container = style([
  {
    display: "block",
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    overflow: "hidden",
    isolation: "isolate",
  },
  {
    "::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      zIndex: -1,
      backgroundImage: backgroundImageVar,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  },
]);

export const topLeft = style([
  {
    top: 10,
    left: 10,
    alignItems: "start",
  },
]);

export const topRight = style([
  {
    top: 10,
    right: 10,
    alignItems: "end",
  },
]);

export const bottomLeft = style([
  {
    bottom: 10,
    left: 10,
    alignItems: "start",
  },
]);

export const bottomRight = style([
  {
    bottom: 10,
    right: 10,
    alignItems: "end",
  },
]);

export const titleContainer = style([
  vStack,
  {
    position: "absolute",
    padding: "10px",
  },
]);

export const title = style([
  {
    fontSize: titleSize,
  },
]);

export const titleBubble = style([
  {
    padding: "8px 16px",
    backgroundColor: "white",
    borderRadius: "30px",
    margin: "-7px 0",
  },
  {
    ":first-child": {
      marginTop: 0,
    },
    ":last-child": {
      marginBottom: 0,
    },
  },
]);

export const tagsContainer = style([
  vStack,
  {
    position: "absolute",
  },
]);

export const tagBase = style([
  {
    padding: "4px 8px",
    borderRadius: "20px",
    border: "1px solid transparent",
  },
]);

export const filledTag = style([
  tagBase,
  {
    backgroundColor: "white",
    color: "black",
  },
]);

export const outlinedTag = style([
  tagBase,
  {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
  },
]);

export const tagText = style([
  {
    fontSize: "14px",
  },
]);
