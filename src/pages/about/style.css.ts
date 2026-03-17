import { style } from "@vanilla-extract/css";
import { vStack } from "@/styles/stack.css";
import { color, font, dashedBorder } from "@/styles/const.css";

export const gridRow = style({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
});

export const outerLeft = style({});
export const outerRight = style({});

export const gutterLeft = style({
  borderRight: dashedBorder,
});

export const gutterRight = style({
  borderLeft: dashedBorder,
});

export const container = style([
  vStack,
  {
    padding: "48px 24px 80px",
    gap: "32px",
    maxWidth: "720px",
  },
]);

export const headline = style({
  fontSize: "40px",
  fontWeight: 600,
  fontFamily: font.heading,
  letterSpacing: "-0.02em",
  lineHeight: 1.2,
  color: color.text,
});

export const mainColumn = style([
  vStack,
  {
    gap: "20px",
    fontFamily: font.body,
    fontSize: "17px",
    lineHeight: 1.8,
    color: color.text,
  },
]);

export const image = style({
  width: "100%",
  maxWidth: "480px",
  aspectRatio: "16/9",
  objectFit: "cover",
  borderRadius: "4px",
});

export const caption = style({
  fontFamily: font.body,
  fontSize: "14px",
  color: color.textSecondary,
});

export const subhead = style({
  fontSize: "24px",
  fontWeight: 600,
  fontFamily: font.heading,
  marginTop: "8px",
  color: color.text,
});

export const dropCap = style({
  float: "left",
  fontSize: "56px",
  lineHeight: 0.8,
  fontWeight: 600,
  fontFamily: font.heading,
  marginRight: "12px",
  marginTop: "8px",
  color: color.text,
});
