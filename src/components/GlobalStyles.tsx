import { createGlobalStyle, css } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Space Grotesk", sans-serif;
  }
  
  #root {
    width: 100%;
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
  l: 1120,
  xl: 1200,
};

export const colors = {
  primary: "#FF720B",
  primaryHover: "#D26210",
  primaryTransparent: "#ff720b1c",
  secondary: "#373737",
  secondaryHover: "#292929",
  black: "#000",
  blackTransparent: "rgba(0, 0, 0, 0.42)",
  orange300: "#FFE1CB",
  brown400: "#723F19",
  brown500: "#8B3A00",
  grey1000: "#2A2A2A",
  grey900: "#1D1D1D",
  grey800: "#141414",
  grey700: "#333",
  grey400: "#C3C3C3",
  grey200: "#AAAAAA",
  grey200Transparent: "rgba(170, 170, 170, 0.10)",
  white: "#FFF",
  whiteHover: "#C4C4C4",
  purple400: "#6772E5",
  red700: "#8C2135",
};

export const typography = {
  grotesk12: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  `,
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
  `,
  grotesk18: css`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
  `,
  grotesk24: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  `,
  grotesk40: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
  `,
  grotesk48: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
  `,
  grotesk80: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 80px;
  `,
  italic: css`
    font-style: italic;
  `,
  bold500: css`
    font-weight: 500;
  `,
};

export const padding = {
  m: "20px",
};

export default GlobalStyle;
