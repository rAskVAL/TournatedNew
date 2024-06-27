import styled from "styled-components";
import {
  resetStyles,
  colors,
  containerStyles,
  typography,
} from "../GlobalStyles.tsx";
import logo from "../../assets/logo.svg";
import Close from "../../assets/Icons/close.svg?react";
import { AnimatePresence, motion } from "framer-motion";
import data from "./data.tsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChevronDown from "../../assets/Icons/chevronDown.svg?react";
import Button from "../Button.tsx";
import LanguageSelector from "./LanguageSelector.tsx";
import HighlightButton from "./HighlightButton.tsx";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "../../App.tsx";
import { CALENDLY_URL, PLATFORM_URL } from "../../consts.ts";

type Props = {
  setIsMobileOpen: (state: boolean) => void;
};

const MobileMenu = ({ setIsMobileOpen }: Props) => {
  const [openedMenuIndex, setOpenedMenuIndex] = useState<number>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <MobileMenuContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Top>
        <Wrapper>
          <Logo src={logo} alt={t("logo_alt")} />
          <CloseIcon onClick={() => setIsMobileOpen(false)} />
        </Wrapper>
        <Links>
          {data.map(({ title, submenu }, i) => (
            <Item $active={openedMenuIndex === i} key={title.en}>
              <ItemTitle
                onClick={() =>
                  setOpenedMenuIndex((curr) => (curr === i ? undefined : i))
                }
              >
                <p>{title[currentLanguage]}</p>
                {submenu && (
                  <Icon animate={{ rotateZ: openedMenuIndex === i ? 180 : 0 }}>
                    <ChevronDown />
                  </Icon>
                )}
              </ItemTitle>
              <AnimatePresence>
                {submenu && openedMenuIndex === i && (
                  <Submenu
                    initial={{ marginTop: 0, height: 0 }}
                    animate={{ marginTop: 22, height: "auto" }}
                    exit={{ marginTop: 0, height: 0, opacity: 0 }}
                  >
                    {submenu.highlightZone && (
                      <HighlightZone>
                        <p>{submenu.highlightZone.title[currentLanguage]}</p>
                        {submenu.highlightZone.items.map((data) => (
                          <HighlightButton data={data} />
                        ))}
                      </HighlightZone>
                    )}
                    {submenu.links &&
                      submenu.links.items.map(({ title, to }) => (
                        <Sublink to={to}>{title[currentLanguage]}</Sublink>
                      ))}
                  </Submenu>
                )}
              </AnimatePresence>
            </Item>
          ))}
        </Links>
      </Top>
      <Bottom>
        <Button onClick={() => window.open(CALENDLY_URL)} style="outline">
          {t("contact_sales")}
        </Button>
        <Button onClick={() => window.open(PLATFORM_URL)} style="primary">
          {t("go_platform")}
        </Button>
        <LanguageSelector mobile={true} />
      </Bottom>
    </MobileMenuContainer>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${containerStyles};
`;

const Logo = styled.img`
  height: 24px;
`;

const MobileMenuContainer = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${colors.grey800};
  z-index: 999;
  padding-bottom: 16px;
`;

const CloseIcon = styled(Close)`
  cursor: pointer;
`;

const Links = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  padding-inline: 20px;
`;

const Item = styled.div<{ $active: boolean }>`
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.grey700};
  color: ${({ $active }) => ($active ? colors.white : colors.grey400)};
  ${typography.grotesk20};
  transition: color 0.3s;
`;

const Sublink = styled(Link)`
  ${resetStyles};

  && {
    ${typography.grotesk16};
    margin-inline: 14px;
    cursor: pointer;
  }
`;

const Submenu = styled(motion.div)`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
`;

const ItemTitle = styled.button`
  ${resetStyles};

  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const Top = styled.div`
  width: 100%;
`;

const HighlightZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > p {
    ${typography.grotesk12};
    margin-bottom: 2px;
    color: ${colors.grey400};
  }
`;
