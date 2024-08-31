import styled, { css } from "styled-components";
import SectionTitle from "../../../components/SectionTitle.tsx";
import {
  breakpoint,
  colors,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import servicesData from "../../../data/servicesData.ts";
import Management from "./Management.tsx";
import { useSearchParams } from "next/navigation";
import { SupportedLanguages } from "../../../i18n/routing.ts";

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0].key);
  const t = useTranslations();
  const currentLanguage = useLocale() as SupportedLanguages;
  const searchParams = useSearchParams();
  const serviceInLink = searchParams.get("services");
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkContainerRef = () => {
      if (serviceInLink && containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
        setActiveService(serviceInLink);
      } else {
        timeoutRef.current = setTimeout(checkContainerRef, 100);
      }
    };

    timeoutRef.current = setTimeout(checkContainerRef, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [serviceInLink]);

  const activeServiceData = servicesData.find(
    (item) => item.key === activeService,
  );

  return (
    <Container ref={containerRef}>
      <SectionTitle text={t("services.title")} />
      <Title>{t("services.slogan")}</Title>
      <Buttons>
        {servicesData.map((item, index) => (
          <Button
            key={index}
            onClick={() => setActiveService(item.key)}
            $active={activeService === item.key}
          >
            {item.title[currentLanguage]}
          </Button>
        ))}
      </Buttons>
      {activeServiceData && (
        <>
          <Desc>{activeServiceData.desc[currentLanguage]}</Desc>
          <Content
            key={activeService}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: activeServiceData.image ? 1 : 0, y: 0 }}
            src={activeServiceData.image.src}
            alt={activeServiceData.title[currentLanguage]}
          />
        </>
      )}
      <Separator />
      <Management />
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

  @media (max-width: ${breakpoint.l}px) {
    padding-top: 50px;
    padding-bottom: 50px;
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

const Separator = styled.div`
  min-height: 1px;
  min-width: min(578px, 100%);
  background: ${colors.secondaryHover};
  margin-top: 83px;
  margin-bottom: 57px;

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 30px;
    margin-bottom: 35px;
  }
`;
