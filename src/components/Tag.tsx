import styled, { css } from "styled-components";
import { colors, typography } from "./GlobalStyles.tsx";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "small";

type Props = {
  children: ReactNode;
  leftIcon?: string;
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
  padding: 5px;
  gap: 6px;

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
      },
      $variant,
    )}
  ${typography.grotesk14};
  white-space: nowrap;
`;
