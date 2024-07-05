import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors, resetStyles, typography } from "./GlobalStyles.tsx";
import { useState } from "react";
import ChevronDown from "../assets/Icons/chevronDown.svg?react";
import Submenu, { SubmenuType } from "./Navbar/Submenu.tsx";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "../App.tsx";
import useLink from "../utils/useLink.ts";

type Props = {
  title: { en: string; lv: string };
  to?: string;
  className?: string;
  submenu?: SubmenuType;
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

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;
  const navigate = useNavigate();
  const link = useLink(to);

  return (
    <Item className={className}>
      <Title
        onClick={() => {
          setIsSubmenuOpen((curr) => !curr);
          if (link) navigate(link);
        }}
        ref={titleRef}
      >
        {title[currentLanguage]} {submenu && <Chevron />}
      </Title>
      {submenu && isSubmenuOpen && (
        <Submenu ref={submenuRef} submenu={submenu} />
      )}
    </Item>
  );
};

export default NavItem;

const Title = styled.a`
  ${resetStyles}
  && {
    cursor: pointer;
    &:hover {
      color: ${colors.whiteHover};
    }
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
