/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components";
import { colors, typography } from "./GlobalStyles.tsx";
import TournatedShape from "../assets/Icons/tournatedShape.svg?react";

type Props = {
  text: string;
  className?: string;
};
const SectionTitle = ({ text, className }: Props) => (
  <Wrapper className={className}>
    <TournatedShape />
    <Text>{text}</Text>
  </Wrapper>
);

export default SectionTitle;

const Text = styled.h2`
  ${typography.grotesk16};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.white};
`;
