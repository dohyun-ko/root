import { style } from "@vanilla-extract/css";
import { vStack } from "@/styles/stack.css";
import { color, font, dashedBorder, styleConstants } from "@/styles/const.css";

export const gridRow = style({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
  borderBottom: dashedBorder,
});

export const outerLeft = style({});
export const outerRight = style({});

export const gutterLeft = style({
  borderRight: dashedBorder,
});

export const gutterRight = style({
  borderLeft: dashedBorder,
});

export const cell = style({
  padding: "48px 24px",
});

export const cellCompact = style({
  padding: "20px 24px",
});

// ---- Hero ----

export const headline = style({
  fontSize: "56px",
  fontWeight: 600,
  fontFamily: font.heading,
  letterSpacing: "-0.03em",
  lineHeight: 1.08,
  color: color.text,
  marginBottom: "20px",
});

export const headlineItalic = style({
  fontStyle: "italic",
});

export const subtitle = style({
  fontSize: "17px",
  lineHeight: 1.7,
  color: color.textSecondary,
  maxWidth: "440px",
});

// ---- Post row ----

export const postContent = style({
  padding: "32px 24px",
  display: "flex",
  gap: "24px",
  alignItems: "flex-start",
});

export const postImage = style({
  width: "160px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "4px",
  flexShrink: 0,
});

export const postBody = style([
  vStack,
  {
    gap: "6px",
  },
]);

export const postMeta = style({
  fontSize: "13px",
  fontFamily: font.body,
  fontWeight: 500,
  color: color.textSecondary,
});

export const postTitle = style({
  fontFamily: font.heading,
  fontSize: "22px",
  fontWeight: 600,
  lineHeight: 1.3,
  color: color.text,
});

export const postDescription = style({
  fontSize: "15px",
  lineHeight: 1.6,
  color: color.textSecondary,
  fontFamily: font.body,
});

// ---- Footer ----

export const footer = style({
  fontSize: "14px",
  color: color.textSecondary,
  fontFamily: font.body,
});
