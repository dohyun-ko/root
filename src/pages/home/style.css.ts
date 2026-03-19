import { style } from "@vanilla-extract/css";
import { vStack } from "@/styles/stack.css";
import { color, font, dashedBorder } from "@/styles/const.css";

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

// ---- Hero ----

export const heroCell = style({
  padding: "64px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "24px",
});

export const ornament = style({
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "12px",
  color: color.textSecondary,
  margin: 0,
  letterSpacing: "0.15em",
  opacity: 0.5,
});

export const headline = style({
  fontSize: "72px",
  fontWeight: 600,
  fontFamily: font.heading,
  letterSpacing: "-0.03em",
  lineHeight: 1.0,
  color: color.text,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "48px",
    },
  },
});

export const headlineAmp = style({
  fontStyle: "italic",
  fontWeight: 400,
});

export const subtitle = style({
  fontSize: "14px",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: color.textSecondary,
  fontFamily: font.body,
  fontWeight: 500,
});

// ---- Cells ----

export const cell = style({
  padding: "48px 24px",
});

export const cellCompact = style({
  padding: "20px 24px",
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
