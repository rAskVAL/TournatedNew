import { forwardRef } from "react";
import styled from "styled-components";
import { colors, resetStyles, typography } from "../GlobalStyles.tsx";
import ArrowRight from "../../assets/Icons/arrowRight.svg?react";
import HighlightButton from "./HighlightButton.tsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SupportedLanguages } from "../../App.tsx";

export type SubmenuType = {
  highlightZone?: {
    title: { en: string; lv: string };
    items: {
      to?: string;
      title: { en: string; lv: string };
      label: { en: string; lv: string };
      labelColor: string;
      icon: JSX.Element;
    }[];
  };
  links?: {
    title: { en: string; lv: string };
    items: {
      title: { en: string; lv: string };
      to?: string;
      icon?: string;
      selected?: boolean;
    }[];
  };
};

type Props = {
  submenu: SubmenuType;
};

const Submenu = forwardRef<HTMLDivElement, Props>(({ submenu }, ref) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <Contaier ref={ref}>
      {submenu?.highlightZone && (
        <>
          <Content>
            <Title>{submenu.highlightZone.title[currentLanguage]}</Title>
            <Links>
              {submenu.highlightZone.items.slice(0, 2).map((data) => (
                <HighlightButton data={data} />
              ))}
            </Links>
          </Content>
          {submenu.highlightZone.items.slice(2, 4).length > 0 && (
            <Content>
              <Title />
              <Links>
                {submenu.highlightZone.items.slice(2, 4).map((data) => (
                  <HighlightButton data={data} />
                ))}
              </Links>
            </Content>
          )}
        </>
      )}
      {submenu?.links && (
        <Content>
          <Title>{submenu.links.title[currentLanguage]}</Title>
          <Links>
            {submenu.links.items.map((link) => (
              <Item to={link.to ?? ""} key={link.title[currentLanguage]}>
                <p>{link.title[currentLanguage]}</p>
                <Arrow />
                <Line />
              </Item>
            ))}
          </Links>
        </Content>
      )}
    </Contaier>
  );
});

export default Submenu;

const Arrow = styled(ArrowRight)`
  * {
    stroke: ${colors.grey400};
  }
`;

const Contaier = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  top: calc(100% + 19px);
  padding: 16px;
  background: ${colors.grey950};
  border-radius: 6px;
`;

const Title = styled.p`
  ${typography.grotesk12};
  color: ${colors.grey400};
  height: 12px;
  margin-bottom: 30px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Line = styled.div`
  width: 100%;
  position: absolute;
  height: 1px;
  background: ${colors.grey700};
  bottom: 0;

  &::after {
    position: absolute;
    z-index: 1;
    content: "";
    height: 1px;
    background: ${colors.primary};
    width: 0;
    transition: width 0.3s;
  }
`;

const Item = styled(Link)`
  ${resetStyles};

  && {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 14px;
    color: ${colors.grey400};
    cursor: pointer;

    &:hover,
    &:hover ${Arrow} {
      color: ${colors.white};

      * {
        stroke: ${colors.white};
      }
    }

    &:hover ${Line}::after {
      width: 75%;
    }
  }
`;

const Content = styled.div`
  min-width: 278px;
`;
