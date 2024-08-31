import { css } from "styled-components";

export const outerContainerStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: min(100vw, 1520px);
`;
export const containerStyles = css`
  width: 100%;
  max-width: 1240px;
  padding-inline: 20px;
`;

export const resetStyles = css`
  &,
  &:hover,
  &:focus,
  &:active {
    all: unset;
  }
`;

export const breakpoint = {
  xs: 400,
  sm: 500,
  m: 760,
  l: 1160,
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
  grey1100: "#171717",
  grey1000: "#2A2A2A",
  grey950: "#242424",
  grey900: "#1D1D1D",
  grey800: "#141414",
  grey750: "#1F1F1F",
  grey700: "#333",
  grey600: "#5A5A5A",
  grey500: "#747476",
  grey400: "#C3C3C3",
  grey300: "#AAAAAA",
  grey300Transparent: "rgba(170, 170, 170, 0.10)",
  grey200: "#C7C7C7",
  grey100: "#D9D9D9",
  grey50: "#DCDCDC",
  grey25: "#E9E9E9",
  white: "#FFF",
  whiteHover: "#C4C4C4",
  green400: "#016738",
  red700: "#8C2135",
  success: "#69AD49",
  warning: "#FFE633",
};

export const typography = {
  grotesk12: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  `,
  grotesk13: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
  `,
  grotesk14: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  `,
  grotesk16: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%; /* 19.2px */
  `,
  grotesk18: css`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  `,
  grotesk20: css`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  `,
  grotesk24: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  `,
  grotesk28: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  `,
  grotesk30: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
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
    line-height: 100%;
  `,
  grotesk64: css`
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
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
