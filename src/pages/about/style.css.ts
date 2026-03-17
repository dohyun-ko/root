import { style } from "@vanilla-extract/css";
import { vStack } from "@/styles/stack.css";

export const container = style([
  vStack,
  {
    width: "100%",
    paddingTop: "40px",
    gap: "24px",
  },
]);

export const headline = style([
  {
    fontSize: "64px",
    fontWeight: 900,
    fontFamily: '"Playfair Display", serif',
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
    borderBottom: "2px solid #2b2b2b",
    paddingBottom: "24px",
    marginBottom: "16px",
  },
]);

export const contentContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  gap: "60px",
  alignItems: "start",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const mainColumn = style([
  vStack,
  {
    gap: "24px",
    fontFamily: '"Lora", serif',
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#2b2b2b",
    textAlign: "justify",
  },
]);

export const sideColumn = style([
  vStack,
  {
    gap: "24px",
    paddingLeft: "30px",
    borderLeft: "1px solid #e0e0e0",
  },
]);

export const dropCap = style({
  float: "left",
  fontSize: "64px",
  lineHeight: "0.8",
  fontWeight: 700,
  fontFamily: '"Playfair Display", serif',
  marginRight: "12px",
  marginTop: "8px",
  color: "#2b2b2b",
});

export const subhead = style({
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: '"Playfair Display", serif',
  marginTop: "24px",
  marginBottom: "8px",
});

export const image = style({
  width: "100%",
  aspectRatio: "3/4",
  objectFit: "cover",
  filter: "grayscale(100%)",
  border: "1px solid #2b2b2b",
});

export const caption = style({
  fontFamily: '"Lora", serif',
  fontSize: "14px",
  fontStyle: "italic",
  color: "#666",
  marginTop: "8px",
  borderBottom: "1px solid #e0e0e0",
  paddingBottom: "8px",
});
