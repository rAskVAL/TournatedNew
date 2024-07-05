/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Menu from "./Menu.tsx";
import LanguageSelector from "./LanguageSelector.tsx";
import Button from "../Button.tsx";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../GlobalStyles.tsx";
import { useMediaQuery } from "@react-hookz/web";
import BurgerIcon from "../../assets/Icons/burger.svg?react";
import Elipse from "../../assets/Icons/elipse.svg?react";
import { CALENDLY_URL, FEATUREBASE_LINK, PLATFORM_URL } from "../../consts.ts";
import { useState } from "react";
import MobileMenu from "./MobileMenu.tsx";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useLink from "../../utils/useLink.ts";

const Navbar = () => {
  const isNarrow = useMediaQuery(`(max-width: ${breakpoint.l}px)`);
  const isMobile = useMediaQuery(`(max-width: ${breakpoint.sm}px)`);
  const [isMenuOpen, setIsMobileOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const homePageLink = useLink("/");
  return (
    <>
      <Nav>
        {!isMobile && (
          <InfoContainer>
            <p>{t("live")}</p>
            {/*<Elipse />*/}
            {/*<a>{t("read_more")}</a>*/}
            <Elipse />
            <a>{t("docs")}</a>
            <Elipse />
            <a href={FEATUREBASE_LINK}>{t("feedback")}</a>
          </InfoContainer>
        )}
        <Container>
          <Wrapper>
            <Logo
              src={logo}
              alt="Logo"
              onClick={() => homePageLink && navigate(homePageLink)}
            />
            {isNarrow ? (
              <BurgerIcon onClick={() => setIsMobileOpen(true)} />
            ) : (
              <>
                <Menu />
                <RightContainer>
                  <LanguageSelector />
                  <Button
                    onClick={() => window.open(CALENDLY_URL)}
                    style="outline"
                  >
                    {t("contact_sales")}
                  </Button>
                  <Button
                    onClick={() => window.open(PLATFORM_URL)}
                    style="primary"
                  >
                    {t("go_platform")}
                  </Button>
                </RightContainer>
              </>
            )}
          </Wrapper>
        </Container>
      </Nav>
      <AnimatePresence>
        {isNarrow && isMenuOpen && (
          <MobileMenu setIsMobileOpen={setIsMobileOpen} />
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;

const Container = styled.div`
  height: 88px;
  width: 100%;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  transition: all 0.2s;

  @media (max-width: ${breakpoint.l}px) {
    height: 56px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  ${containerStyles}
`;

const Logo = styled.img`
  height: 24px;
  cursor: pointer;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 24px;
  width: 100%;
  background: ${colors.orange300};
  ${typography.grotesk14};
  white-space: nowrap;

  & > a {
    cursor: pointer;
    color: ${colors.brown500};
    text-decoration: underline;
  }
  & > p {
    color: ${colors.grey800};
    font-weight: 500;
  }
`;

const Nav = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
`;
