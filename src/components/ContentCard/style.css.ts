import { vStack } from "@/styles/stack.css";
import { createVar, style } from "@vanilla-extract/css";

export const titleSize = createVar();
export const backgroundImageVar = createVar();

export const container = style([
  vStack,
  {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    gap: "16px",
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: "24px",
    marginBottom: "24px",
  },
]);

export const imageContainer = style([
  {
    width: "100%",
    aspectRatio: "16/9",
    overflow: "hidden",
    border: "1px solid #2b2b2b",
  },
]);

export const image = style([
  {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(100%)", // Black and white for newspaper feel
    transition: "filter 0.3s ease",
    ":hover": {
      filter: "grayscale(0%)",
    },
  },
]);

export const metaContainer = style([
  {
    display: "flex",
    gap: "12px",
    fontSize: "12px",
    fontFamily: '"Lora", serif',
    fontStyle: "italic",
    color: "#666",
    textTransform: "uppercase",
  },
]);

export const title = style([
  {
    fontFamily: '"Playfair Display", serif',
    fontSize: titleSize,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
    color: "#2b2b2b",
  },
]);
