import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, typography } from "./GlobalStyles.tsx";
import { useState } from "react";
import ChevronDown from "../assets/Icons/chevronDown.svg?react";
import Submenu from "./Navbar/Submenu.tsx";
import data from "./Navbar/data.tsx";

type Props = {
  title: string;
  to: string;
  className?: string;
  submenu?: (typeof data)[number]["submenu"];
};

const NavItem = ({ title, to, className, submenu }: Props) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLAnchorElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node) &&
      titleRef.current &&
      !titleRef.current.contains(event.target as Node)
    ) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    if (isSubmenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubmenuOpen]);

  return (
    <Item className={className}>
      <Title to={to} onClick={() => setIsSubmenuOpen(true)} ref={titleRef}>
        {title} <Chevron />
      </Title>
      {submenu && isSubmenuOpen && (
        <Submenu ref={submenuRef} submenu={submenu} />
      )}
    </Item>
  );
};

export default NavItem;

const Title = styled(Link)`
  all: unset;
  cursor: pointer;
  &:hover {
    color: ${colors.whiteHover};
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  position: relative;
  ${typography.grotesk16};
`;

const Chevron = styled(ChevronDown)`
  margin-top: 3px;
  width: 9px;
  height: 9px;
  fill: white;
`;
