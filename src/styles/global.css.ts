import { globalStyle } from "@vanilla-extract/css";
import { color, font } from "./const.css";

globalStyle("html, body", {
  margin: 0,
  backgroundColor: color.bg,
  boxSizing: "border-box",
  fontFamily: font.body,
  color: color.text,
  WebkitFontSmoothing: "antialiased",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: 600,
  fontFamily: font.heading,
});

globalStyle("p", {
  margin: 0,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
