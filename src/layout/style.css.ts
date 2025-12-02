import { styleConstants } from "@/styles/const.css";
import { hStack, vStack } from "@/styles/stack.css";
import { style } from "@vanilla-extract/css";

export const headerWrapper = style([
  vStack,
  {
    alignItems: "center",
    width: "100%",
    margin: "0 40px",
  },
]);

export const headerContainer = style([
  hStack,
  {
    padding: "20px 20px 0",
    gap: "40px",
    alignItems: "end",
    width: "100%",
    maxWidth: styleConstants.width.inner,
  },
]);

export const title = style([
  {
    margin: 0,
    lineHeight: "28px",
    fontSize: "36px",
    fontWeight: 400,
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
    gap: "16px",
  },
]);

export const navigationLink = style([
  {
    textDecoration: "none",
    color: "#000000",
  },
]);
