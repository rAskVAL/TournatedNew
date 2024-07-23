import styled, { css } from "styled-components";
import SectionTitle from "../../../components/SectionTitle.tsx";
import {
  breakpoint,
  colors,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "../../../App.tsx";
import servicesData from "../../../data/servicesData.ts";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <Container>
      <SectionTitle text={t("services.title")} />
      <Title>{t("services.slogan")}</Title>
      <Buttons>
        {servicesData.map((item, index) => (
          <Button
            key={index}
            onClick={() => setActiveIndex(index)}
            $active={activeIndex === index}
          >
            {item.title[currentLanguage]}
          </Button>
        ))}
      </Buttons>
      <Desc>{servicesData[activeIndex].desc[currentLanguage]}</Desc>
      <Content
        key={activeIndex}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: servicesData[activeIndex].image ? 1 : 0, y: 0 }}
        src={servicesData[activeIndex].image}
        alt={servicesData[activeIndex].title[currentLanguage]}
      />
    </Container>
  );
};

export default Services;

const Container = styled.div`
  padding-top: 89px;
  padding-bottom: 210px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-inline: 20px;
  height: 1140px;

  @media (max-width: ${breakpoint.l}px) {
    padding-top: 50px;
    padding-bottom: 50px;
    height: 640px;
  }
`;

const Title = styled.div`
  margin-top: 32px;
  ${typography.grotesk64};
  max-width: 650px;
  color: ${colors.white};
  text-align: center;
  white-space: balance;

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 28px;
    ${typography.grotesk30};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-block: 43px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoint.l}px) {
    margin-block: 24px;
    gap: 6px;
  }
`;

const Button = styled.button<{ $active: boolean }>`
  ${resetStyles};
  && {
    padding-block: 14px;
    padding-inline: 16px;
    background: transparent;
    color: ${colors.grey200};
    transition: all 0.1s;
    cursor: pointer;
    ${({ $active }) =>
      $active
        ? css`
            background: ${colors.grey750};
            color: ${colors.white};
          `
        : css`
            background: transparent;
            color: ${colors.grey200};
          `}
    &:hover {
      background: ${colors.grey750};
      color: ${colors.white};
    }
    &:active {
      opacity: 0.7;
    }
  }
`;

const Content = styled(motion.img)`
  max-width: 1000px;
  height: 450px;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
  margin-top: 32px;

  @media (max-width: ${breakpoint.l}px) {
    height: 250px;
  }
`;

const Desc = styled.p`
  ${typography.grotesk16};
  color: ${colors.grey200};
  margin-block: 20px;
  max-width: 520px;
  text-align: center;
  line-height: 150%;
  white-space: balance;

  @media (max-width: ${breakpoint.l}px) {
    margin-block: 0;
  }
`;
