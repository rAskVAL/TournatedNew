import styled, { css } from "styled-components";
import { colors, typography } from "./GlobalStyles.tsx";
import { ReactElement, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size = "small";

type Props = {
  children: ReactNode;
  leftIcon?: ReactElement;
  variant: Variant;
  size?: Size;
};
const Tag = ({ children, variant, size, leftIcon }: Props) => (
  <Container $variant={variant} $size={size}>
    {leftIcon}
    {children}
  </Container>
);

export default Tag;

const perVariant = <T,>(styles: { [value in Variant]: T }, style: Variant): T =>
  styles[style];

const Container = styled.div<{ $variant: Variant; $size?: Size }>`
  display: flex;
  padding-block: 5px;
  padding-inline: 8px;
  gap: 6px;
  align-items: center;

  ${({ $variant }) =>
    perVariant(
      {
        primary: css`
          background: ${colors.primaryTransparent};
          color: ${colors.primary};
        `,
        secondary: css`
          background: ${colors.grey200Transparent};
          color: ${colors.grey200};
        `,
        dark: css`
          background: ${colors.blackTransparent};
          color: ${colors.white};
        `,
      },
      $variant,
    )}
  ${typography.grotesk14};
  white-space: nowrap;
`;
