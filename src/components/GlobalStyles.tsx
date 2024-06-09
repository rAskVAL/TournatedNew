import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Space Grotesk", sans-serif;
  }
`;

export const containerStyles = css`
  width: 100%;
  max-width: 1240px;
`;

export const colors = {
  primary500: "#FF720B",
  grey800: "#141414",
  grey400: "#C3C3C3",
  white100: "#FFF",
  grey900: "#1D1D1D",
  purple400: "#6772E5",
  red700: "#8C2135",
};

export const typography = {
  grotesk16: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  `,
  grotesk80: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 80px;
    text-align: left;
  `,
  grotesk80italic: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 80px;
    font-style: italic;
    font-weight: 400;
    line-height: 80px;
    text-align: left;
  `,
  grotesk24: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  `,
};

export default GlobalStyle;
