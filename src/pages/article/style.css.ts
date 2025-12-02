import { style, globalStyle } from "@vanilla-extract/css";
import { vStack } from "@/styles/stack.css";
import { styleConstants } from "@/styles/const.css";

export const container = style([
  vStack,
  {
    width: styleConstants.width.inner,
    margin: "0 auto",
    padding: "40px 20px",
    gap: "32px",
  },
]);

export const header = style([
  vStack,
  {
    gap: "16px",
    borderBottom: "1px solid #eaeaea",
    paddingBottom: "32px",
  },
]);

export const title = style({
  fontSize: "48px",
  fontWeight: "bold",
  lineHeight: "1.2",
});

export const meta = style({
  color: "#666",
  fontSize: "16px",
});

export const content = style({
  lineHeight: "1.8",
  fontSize: "18px",
  color: "#333",
});

globalStyle(`${content} h1`, {
  fontSize: "32px",
  fontWeight: "bold",
  marginTop: "40px",
  marginBottom: "20px",
});

globalStyle(`${content} h2`, {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "32px",
  marginBottom: "16px",
});

globalStyle(`${content} p`, {
  marginBottom: "20px",
});

globalStyle(`${content} ul, ${content} ol`, {
  marginBottom: "20px",
  paddingLeft: "24px",
});

globalStyle(`${content} li`, {
  marginBottom: "8px",
});

globalStyle(`${content} pre`, {
  backgroundColor: "#f4f4f4",
  padding: "16px",
  borderRadius: "8px",
  overflowX: "auto",
  marginBottom: "24px",
});

globalStyle(`${content} code`, {
  fontFamily:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: "0.9em",
});

globalStyle(`${content} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
});
