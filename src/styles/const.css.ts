import { createGlobalTheme } from "@vanilla-extract/css";

export const color = {
  bg: "#f3f0ea",
  text: "#242424",
  textSecondary: "#898989",
  dashed: "rgba(20, 20, 20, 0.15)",
};

export const font = {
  heading: '"Playfair Display", serif',
  body: '"Inter", sans-serif',
};

export const dashedBorder = `1px dashed rgba(20, 20, 20, 0.15)`;

export const styleConstants = createGlobalTheme(":root", {
  width: {
    inner: "1080px",
  },
});
