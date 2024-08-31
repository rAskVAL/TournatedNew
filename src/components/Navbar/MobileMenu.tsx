import styled from "styled-components";
import {
  resetStyles,
  colors,
  containerStyles,
  typography,
} from "../GlobalStyles.tsx";
import Logo from "../../assets/logo.svg";
import Close from "../../assets/Icons/close.svg";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../data/NavbarData.tsx";
import { useEffect, useState } from "react";
import ChevronDown from "../../assets/Icons/chevronDown.svg";
import Button from "../Button.tsx";
import LanguageSelector from "./LanguageSelector.tsx";
import HighlightButton from "./HighlightButton.tsx";
import { useLocale, useTranslations } from "next-intl";

import { CALENDLY_URL, PLATFORM_URL } from "../../consts.ts";
import { SupportedLanguages, useRouter } from "../../i18n/routing.ts";
import Link from "next/link";

type Props = {
  setIsMobileOpen: (state: boolean) => void;
};

const MobileMenu = ({ setIsMobileOpen }: Props) => {
  const [openedMenuIndex, setOpenedMenuIndex] = useState<number>();
  const t = useTranslations();
  const router = useRouter();

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const currentLanguage = useLocale() as SupportedLanguages;

  return (
    <MobileMenuContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Top>
        <Wrapper>
          <a href="/">
            <Logo />
          </a>
          <div onClick={() => setIsMobileOpen(false)}>
            <CloseIcon />
          </div>
        </Wrapper>
        <Links>
          {data.map(({ title, submenu, to }, i) => (
            <Item $active={openedMenuIndex === i} key={title.en}>
              <ItemTitle
                onClick={() => {
                  setOpenedMenuIndex((curr) => (curr === i ? undefined : i));
                  if (to) router.push(to);
                }}
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
                        <Sublink href={to}>{title[currentLanguage]}</Sublink>
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
    cursor: pointer;
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
