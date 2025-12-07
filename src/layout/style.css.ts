import { styleConstants } from "@/styles/const.css";
import { hStack, vStack } from "@/styles/stack.css";
import { style } from "@vanilla-extract/css";

export const headerWrapper = style([
  vStack,
  {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5F2E8",
    borderBottom: "1px solid #2b2b2b",
    marginBottom: "40px",
  },
]);

export const headerContainer = style([
  vStack,
  {
    padding: "40px 20px 20px",
    gap: "20px",
    alignItems: "center",
    width: "100%",
    maxWidth: styleConstants.width.inner,
    borderBottom: "4px double #2b2b2b",
  },
]);

export const metaBar = style([
  hStack,
  {
    width: "100%",
    justifyContent: "space-between",
    padding: "8px 0",
    borderTop: "1px solid #2b2b2b",
    borderBottom: "1px solid #2b2b2b",
    fontFamily: '"Lora", serif',
    fontSize: "14px",
    fontStyle: "italic",
  },
]);

export const title = style([
  {
    margin: 0,
    lineHeight: 1,
    fontSize: "48px",
    fontWeight: 900,
    fontFamily: '"Playfair Display", serif',
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "-0.02em",
  },
]);

export const layoutContainer = style([
  vStack,
  {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
]);

export const navigation = style([
  hStack,
  {
    gap: "32px",
    width: "100%",
    justifyContent: "center",
    padding: "12px 0",
    borderTop: "1px solid #2b2b2b",
    borderBottom: "1px solid #2b2b2b",
  },
]);

export const navigationLink = style([
  {
    textDecoration: "none",
    color: "#2b2b2b",
    fontFamily: '"Lora", serif',
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    ":hover": {
      textDecoration: "underline",
    },
  },
]);
