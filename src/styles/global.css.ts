import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  backgroundColor: "#F5F2E8",
  boxSizing: "border-box",
  fontFamily: '"Lora", serif',
  color: "#2b2b2b",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: 700,
  fontFamily: '"Playfair Display", serif',
});
