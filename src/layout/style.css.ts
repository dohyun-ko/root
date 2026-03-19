import { styleConstants, color, font, dashedBorder } from "@/styles/const.css";
import { hStack, vStack } from "@/styles/stack.css";
import { style } from "@vanilla-extract/css";

// The whole page is a single grid with dashed gutter columns
export const layoutContainer = style({
  display: "grid",
  gridTemplateColumns: `1fr 48px minmax(0, ${styleConstants.width.inner}) 48px 1fr`,
  minHeight: "100vh",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: `8px 24px minmax(0, 1fr) 24px 8px`,
    },
  },
});

// A full-width row inside the grid
export const gridRow = style({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
  borderBottom: dashedBorder,
});

// The outer areas (beyond content)
export const outerLeft = style({});
export const outerRight = style({});

// The gutter columns with dashed inner borders
export const gutterLeft = style({
  borderRight: dashedBorder,
});

export const gutterRight = style({
  borderLeft: dashedBorder,
});

// Header
export const headerContent = style([
  hStack,
  {
    padding: "20px 24px",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
]);

export const logo = style({
  fontFamily: font.heading,
  fontSize: "18px",
  fontWeight: 600,
  color: color.text,
});

export const navigation = style([
  hStack,
  {
    gap: "32px",
    alignItems: "center",
  },
]);

export const navigationLink = style({
  fontFamily: font.body,
  fontSize: "14px",
  fontWeight: 500,
  color: color.textSecondary,
  transition: "color 0.15s ease",
  ":hover": {
    color: color.text,
  },
});

// Main content area
export const mainContent = style({
  gridColumn: "1 / -1",
  display: "grid",
  gridTemplateColumns: "subgrid",
  flex: 1,
});
