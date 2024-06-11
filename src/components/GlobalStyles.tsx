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
  padding-inline: 20px;
`;

export const breakpoint = {
  xs: 400,
  sm: 500,
  m: 760,
  l: 1100,
  xl: 1200,
};

export const colors = {
  primary: "#FF720B",
  primaryHover: "#D26210",
  secondary: "#373737",
  secondaryHover: "#292929",
  orange300: "#FFE1CB",
  brown400: "#723F19",
  brown500: "#8B3A00",
  grey800: "#141414",
  grey400: "#C3C3C3",
  white: "#FFF",
  whiteHover: "#C4C4C4",
  grey900: "#1D1D1D",
  purple400: "#6772E5",
  red700: "#8C2135",
};

export const typography = {
  grotesk14: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  `,
  grotesk16: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  `,
  grotesk24: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  `,
  grotesk40: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
  `,
  grotesk80: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 80px;
    text-align: left;
  `,
  italic: css`
    font-style: italic;
  `,
  bold500: css`
    font-weight: 500;
  `,
};

export default GlobalStyle;
