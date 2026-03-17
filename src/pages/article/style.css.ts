import { style, globalStyle } from "@vanilla-extract/css";
import { vStack } from "@/styles/stack.css";
import { color, font, dashedBorder } from "@/styles/const.css";

export const gridRow = style({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
});

export const outerLeft = style({});
export const outerRight = style({});

export const gutterLeft = style({
  borderRight: dashedBorder,
});

export const gutterRight = style({
  borderLeft: dashedBorder,
});

export const container = style([
  vStack,
  {
    padding: "48px 24px 80px",
    gap: "32px",
    maxWidth: "720px",
  },
]);

export const header = style([
  vStack,
  {
    gap: "16px",
  },
]);

export const title = style({
  fontSize: "40px",
  fontWeight: 600,
  fontFamily: font.heading,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: color.text,
});

export const meta = style({
  color: color.textSecondary,
  fontSize: "15px",
  fontFamily: font.body,
});

export const content = style({
  lineHeight: 1.8,
  fontSize: "17px",
  color: color.text,
  fontFamily: font.body,
});

globalStyle(`${content} h1`, {
  fontSize: "32px",
  fontWeight: 600,
  marginTop: "48px",
  marginBottom: "20px",
  fontFamily: font.heading,
});

globalStyle(`${content} h2`, {
  fontSize: "26px",
  fontWeight: 600,
  marginTop: "40px",
  marginBottom: "16px",
  fontFamily: font.heading,
});

globalStyle(`${content} h3, ${content} h4, ${content} h5, ${content} h6`, {
  fontFamily: font.heading,
  fontWeight: 600,
  marginTop: "32px",
  marginBottom: "12px",
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
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  padding: "20px",
  borderRadius: "4px",
  overflowX: "auto",
  marginBottom: "24px",
  border: dashedBorder,
});

globalStyle(`${content} code`, {
  fontFamily:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: "0.9em",
});

globalStyle(`${content} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "4px",
});

globalStyle(`${content} blockquote`, {
  borderLeft: `2px dashed rgba(20, 20, 20, 0.2)`,
  paddingLeft: "20px",
  margin: "24px 0",
  color: color.textSecondary,
  fontStyle: "italic",
});
