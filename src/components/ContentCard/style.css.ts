import { vStack } from "@/styles/stack.css";
import { createVar, style } from "@vanilla-extract/css";
import { color, font } from "@/styles/const.css";

export const titleSize = createVar();
export const backgroundImageVar = createVar();

export const container = style([
  vStack,
  {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    gap: "12px",
  },
]);

export const imageContainer = style({
  width: "100%",
  aspectRatio: "16/9",
  overflow: "hidden",
  borderRadius: "4px",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const body = style([
  vStack,
  {
    gap: "6px",
  },
]);

export const metaContainer = style({
  display: "flex",
  gap: "8px",
  fontSize: "13px",
  fontFamily: font.body,
  fontWeight: 500,
  color: color.textSecondary,
});

export const title = style({
  fontFamily: font.heading,
  fontSize: titleSize,
  fontWeight: 600,
  lineHeight: 1.3,
  margin: 0,
  color: color.text,
});

export const description = style({
  fontSize: "14px",
  lineHeight: 1.6,
  color: color.textSecondary,
  fontFamily: font.body,
});
