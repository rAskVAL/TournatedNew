"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../../../components/SectionTitle.tsx";
import styled, { css } from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { useState } from "react";
import AccordionItem from "./AccordionItem.tsx";
import data from "../../../data/FeaturesData.tsx";
import { useMediaQuery } from "@react-hookz/web";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon1 from "../../../assets/features/icon1.svg";
import Icon2 from "../../../assets/features/icon2.svg";
import Icon3 from "../../../assets/features/icon3.svg";
import { useLocale, useTranslations } from "next-intl";
import ProgressBar from "../../../components/ProgressBar.tsx";
import { SupportedLanguages } from "../../../i18n/routing.ts";

const Features = () => {
  const t = useTranslations();
  const [activeItem, setActiveItem] = useState(0);
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.l}px)`);
  const [swiperProgress, setSwiperProgress] = useState<number>(0);

  const currentLanguage = useLocale() as SupportedLanguages;

  return (
    <Container>
      <TitleBox>
        <SectionTitle className="text-black" text={t("features")} />
        <Title>
          {t.rich("streamline_tournaments", {
            br: () => <br />,
          })}{" "}
          <Italic>{t("all_in_one_crm")}</Italic>
        </Title>
      </TitleBox>
      {isDesktop ? (
        <DesktopContent>
          <Left>
            {data.map((feature, index) => (
              <AccordionItem
                key={index}
                text={feature.description[currentLanguage]}
                active={activeItem === index}
                onClick={() => setActiveItem(index)}
              >
                {feature.title[currentLanguage]}
              </AccordionItem>
            ))}
          </Left>
          <Right $activeItem={activeItem}>
            <AnimatePresence>
              {data.map(
                (feature, index) =>
                  activeItem === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 70 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        x: {
                          type: "tween",
                          ease: "anticipate",
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.4,
                        },
                      }}
                    >
                      <Img
                        src={feature.banner.src}
                        alt={feature.title.en}
                        $activeItem={activeItem}
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </Right>
        </DesktopContent>
      ) : (
        <>
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            onActiveIndexChange={(swiper) => setSwiperProgress(swiper.progress)}
            style={{ marginTop: "40px" }}
          >
            {data.map(({ title, description, banner }, i) => (
              <SwiperSlide key={i} style={{ maxWidth: "300px" }}>
                <Card>
                  <h3>{title[currentLanguage]}</h3>
                  <p>{description[currentLanguage]}</p>
                  <div>
                    <Img src={banner.src} alt={title.en} />
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <ProgressBar percentage={swiperProgress} />
        </>
      )}
      <Bottom>
        <BottomCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Icon1 />
          <h3>{t("athlete_experience")}</h3>
          <p>{t("athlete_experience_description")}</p>
        </BottomCard>
        <BottomCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Icon2 />
          <h3>{t("launch_platform_app")}</h3>
          <p>{t("launch_platform_app_description")}</p>
        </BottomCard>
        <BottomCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Icon3 />
          <h3>{t("any_sport_format")}</h3>
          <p>{t("any_sport_format_description")}</p>
        </BottomCard>
      </Bottom>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  ${containerStyles};
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 104px;

  @media (max-width: ${breakpoint.l}px) {
    padding-top: 55px;
    padding-bottom: 29px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  ${containerStyles}
`;

const Title = styled.div`
  ${typography.grotesk48};
  color: ${colors.black};
  text-align: center;
  white-space: balance;
  max-width: 955px;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk28}
  }
`;

const Italic = styled.span`
  ${typography.italic};
  color: ${colors.primary};
`;

const DesktopContent = styled.div`
  margin-top: 63px;
  display: flex;
  height: 531px;
  width: 100%;
  ${containerStyles}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-right: 120px;
  padding-top: 20px;
`;

const Right = styled.div<{ $activeItem: number }>`
  flex: 1;
  height: 100%;
  background: ${({ $activeItem }) =>
    $activeItem === 2 ? colors.grey900 : colors.primary};
  position: relative;
  overflow: hidden;

  & > div {
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    ${typography.grotesk18};
    color: ${colors.grey900};
    margin-bottom: 13px;
  }

  p {
    ${typography.grotesk14};
    color: ${colors.grey600};
    height: 65px;
    margin-bottom: 13px;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 275px;
    padding-block: 25px;
    padding-left: 25px;
    background: ${colors.primary};
    overflow: hidden;
    svg {
      height: 100%;
      border-radius: 0 4px 0 4px;
    }
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 16px;
  ${containerStyles};

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 44px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const BottomCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 340px;

  h3 {
    margin-top: 4px;
    ${typography.grotesk18};
    color: ${colors.grey900};
  }

  p {
    ${typography.grotesk16};
    color: ${colors.grey600};
  }

  @media (max-width: ${breakpoint.l}px) {
    gap: 10px;

    p {
      ${typography.grotesk14};
    }

    svg {
      width: 40px;
    }
  }
`;

const Img = styled.img<{ $activeItem?: number }>`
  position: absolute;
  max-height: 92%;
  max-width: 92%;
  object-fit: contain;
  right: 0;

  ${({ $activeItem }) =>
    $activeItem === 3
      ? css`
          top: 50%;
          transform: translateY(-50%);
        `
      : css`
          bottom: 0;
        `};
`;
