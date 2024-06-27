import { ReactNode } from "react";
import styled, { css, RuleSet } from "styled-components";
import { colors } from "./GlobalStyles.tsx";

type Styles = "primary" | "outline" | "brand" | "dark" | "transparent";

type Props = {
  children: ReactNode;
  style: Styles;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
const Button = ({
  children,
  style,
  className,
  selected,
  onClick,
  disabled,
}: Props) => {
  return (
    <Container
      $style={style}
      className={className}
      $selected={selected}
      onClick={onClick}
      disabled={disabled}
    >
      <Children>{children}</Children>
    </Container>
  );
};

export default Button;

const perVariant = (
  styles: { [value in Styles]: RuleSet },
  style: Styles,
): RuleSet => styles[style];

const Children = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.1s;
  z-index: 1;
`;

const Container = styled.button<{ $style: Styles; $selected?: boolean }>`
  all: unset;
  position: relative;
  color: white;
  height: 48px;
  padding-inline: 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  ${({ $style }) =>
    perVariant(
      {
        primary: css`
          background: ${colors.secondary};
        `,
        dark: css`
          background: ${colors.grey900};
        `,
        outline: css`
          border: 1px solid #ff720b;

          &:hover,
          &:active,
          &:focus {
            border: 1px solid ${colors.primary};
          }
        `,
        brand: css`
          background: #ff720b;
        `,
        transparent: css`
          background: transparent;
        `,
      },
      $style,
    )}

  &:after {
    content: "";
    height: 100%;
    width: ${({ $selected }) => ($selected ? "100%" : 0)};
    position: absolute;
    left: 0;
    transition: all 0.2s;
    ${({ $style }) =>
      perVariant(
        {
          primary: css`
            background: ${colors.secondaryHover};
          `,
          dark: css`
            background: ${colors.secondary};
          `,
          outline: css`
            background: ${colors.brown400};
          `,
          brand: css`
            background: ${colors.primaryHover};
          `,
          transparent: css`
            background: ${colors.grey900};
          `,
        },
        $style,
      )}
  }

  &:hover:after {
    width: 100%;
  }

  &:active:after {
    ${({ $style }) =>
      perVariant(
        {
          primary: css`
            background: ${colors.white};
          `,
          outline: css`
            background: ${colors.white};
          `,
          brand: css`
            background: ${colors.white};
          `,
          dark: css`
            background: ${colors.white};
          `,
          transparent: css`
            background: ${colors.white};
          `,
        },
        $style,
      )}
  }

  &:active ${Children} {
    color: ${colors.black};
    svg * {
      stroke: ${colors.black};
    }
  }

  &:disabled {
    pointer-events: none;
  }
`;
