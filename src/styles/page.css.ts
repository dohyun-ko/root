import { vStack } from "@/styles/stack.css";
import { style } from "@vanilla-extract/css";
import { styleConstants } from "./const.css";

export const page = style([
  vStack,
  {
    width: "100%",
    maxWidth: styleConstants.width.inner,
    padding: "0 20px",
    alignItems: "center",
  },
]);
