import { ReactNode } from "react";
import styled, { css, RuleSet } from "styled-components";

type Styles = "primary" | "outline" | "brand";

type Props = {
  children: ReactNode;
  style: Styles;
};
const Button = ({ children, style }: Props) => {
  return <Container $style={style}>{children}</Container>;
};

export default Button;

const perVariant = (
  styles: { [value in Styles]: RuleSet },
  style: Styles,
): RuleSet => styles[style];

const Container = styled.button<{ $style: Styles }>`
  all: unset;
  color: white;
  height: 48px;
  padding-inline: 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  ${({ $style }) =>
    perVariant(
      {
        primary: css`
          background: #373737;

          &:hover {
            opacity: 0.8;
          }
        `,
        outline: css`
          border: 1px solid #ff720b;

          &:hover,
          &:active,
          &:focus {
            border: 1px solid orangered;
          }
        `,
        brand: css`
          background: #ff720b;

          &:hover {
            opacity: 0.8;
          }
        `,
      },
      $style,
    )}
`;
