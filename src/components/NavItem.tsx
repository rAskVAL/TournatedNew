/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, typography } from "./GlobalStyles.tsx";
import { ReactNode } from "react";
import ChevronDown from "../assets/Icons/chevronDown.svg?react";

type Props = {
  children: ReactNode;
  to: string;
  className?: string;
};

const NavItem = ({ children, to, className }: Props) => (
  <Item className={className} to={to}>
    {children} <Chevron />
  </Item>
);

export default NavItem;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  ${typography.grotesk16};

  &:hover {
    color: ${colors.whiteHover};
  }
`;

const Chevron = styled(ChevronDown)`
  margin-top: 3px;
  width: 9px;
  height: 9px;
  fill: white;
`;
