/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components";
import { colors, typography } from "./GlobalStyles.tsx";
import TournatedShape from "../assets/Icons/tournatedShape.svg?react";

type Props = {
  text: string;
  className?: string;
  color?: string;
};
const SectionTitle = ({ text, className, color }: Props) => (
  <Wrapper className={className} $color={color}>
    <TournatedShape />
    <Text>{text}</Text>
  </Wrapper>
);

export default styled(SectionTitle)``;

const Text = styled.h2`
  ${typography.grotesk16};
  white-space: nowrap;
`;

const Wrapper = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ $color }) => $color ?? colors.white};
`;
