import { style } from "@vanilla-extract/css";

export const headline = style([
  {
    fontSize: "72px",
    fontWeight: 900,
    fontFamily: '"Playfair Display", serif',
    letterSpacing: "-0.04em",
    lineHeight: 0.9,
    borderBottom: "2px solid #2b2b2b",
    paddingBottom: "24px",
    marginBottom: "24px",
  },
]);

export const sectionHeader = style({
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: '"Playfair Display", serif',
  borderBottom: "1px solid #2b2b2b",
  paddingBottom: "8px",
  marginBottom: "16px",
  textTransform: "uppercase",
});

export const divider = style({
  width: "1px",
  backgroundColor: "#e0e0e0",
  height: "100%",
  margin: "0 24px",
});
