"use client";

import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import ReactCountryFlag from "react-country-flag";
import IdeaKaussLogo from "./assets/IdeaKauss.svg";
import WhiteLabelIcon from "./assets/whitelabel.svg";
import CustomIcon from "./assets/custom.svg";
import TournatedLogo from "../../../assets/logo_icon.svg";
import { useMediaQuery } from "@react-hookz/web";
import photo1 from "./assets/photos/photo_1.png";
import photo2 from "./assets/photos/photo_2.png";
import photo3 from "./assets/photos/photo_3.png";
import photo4 from "./assets/photos/photo_4.png";
import photo5 from "./assets/photos/photo_5.png";
import photo6 from "./assets/photos/photo_6.png";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.l}px)`);
  return (
    <>
      <Container>
        <BackgroundImages
          initial={{ width: "105%", opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TopLeft src={photo6.src} />
          <BottomLeft src={photo1.src} />
          <CenterLeft src={photo3.src} />
          <TopRight src={photo5.src} />
          <CenterRight src={photo4.src} />
          <BottomRight src={photo2.src} />
        </BackgroundImages>
        <Wrapper
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MadeIn>
            <ReactCountryFlag
              countryCode="lv"
              svg
              style={{ height: "12px" }}
              title="flag of latvia"
            />
            <h3>Made in Latvia</h3>
          </MadeIn>
          <Title>
            {t.rich("about.hero.title", {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </Title>
          <Subtitle>
            {t.rich("about.hero.subtitle", {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </Subtitle>
          <Achievement>
            <p>Winner of</p>
            <IdeaKaussLogo />
          </Achievement>
        </Wrapper>
      </Container>
      <Stats
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Stat>
          <StatIcon>
            <TournatedLogo />
          </StatIcon>
          <div>
            <StatTitle>Tournated.com</StatTitle>
            <StatSubtitle>{t("about.hero.stats.join")}</StatSubtitle>
          </div>
        </Stat>
        {isDesktop && <Seperator />}
        <Stat>
          <StatIcon>
            <WhiteLabelIcon />
          </StatIcon>
          <div>
            <StatTitle>{t("about.hero.stats.white_labeling")}</StatTitle>
            <StatSubtitle>
              {t("about.hero.stats.your_own_platform")}
            </StatSubtitle>
          </div>
        </Stat>
        {isDesktop && <Seperator />}
        <Stat>
          <StatIcon>
            <CustomIcon />
          </StatIcon>
          <div>
            <StatTitle>{t("about.hero.stats.custom_solutions")}</StatTitle>
            <StatSubtitle>
              {t("about.hero.stats.request_any_other")}
            </StatSubtitle>
          </div>
        </Stat>
      </Stats>
    </>
  );
};

export default Hero;

const Stats = styled(motion.div)`
  display: flex;
  width: 100%;
  max-width: 973px;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 103px;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    gap: 32px;
    align-items: start;
    height: auto;
    margin-bottom: 64px;
    max-width: none;
    width: fit-content;
  }
`;

const Stat = styled.div`
  max-width: 272px;
  display: flex;
  gap: 16px;
  color: ${colors.white};
  align-items: center;
`;

const StatTitle = styled.p`
  ${typography.grotesk20};
  margin-bottom: 4px;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk16};
  }
`;

const StatSubtitle = styled.p`
  color: ${colors.grey400};
  ${typography.grotesk16};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk14};
  }
`;

const Achievement = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 39px;
  align-items: center;
  color: ${colors.white};
  ${typography.grotesk14};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk12};
    margin-top: 27px;
  }
`;

const MadeIn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.white};
  ${typography.grotesk14};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk12};
    margin-bottom: 8px;
  }
`;

const Container = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 124px;
  margin-bottom: 82px;
  max-width: 717px;
  z-index: 1;

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 97px;
    margin-bottom: 64px;
    max-width: 335px;
  }
`;

const Title = styled.h1`
  ${typography.grotesk64};
  text-align: center;
  color: ${colors.white};
  white-space: balance;

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk40};

    span {
      color: ${colors.white};
    }
  }
`;

const Subtitle = styled.p`
  max-width: 467px;
  color: ${colors.white};
  text-align: center;
  margin-top: 12px;
  ${typography.grotesk16};
  line-height: 120%; /* 19.2px */

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk14};
  }
`;

const StatIcon = styled.div`
  min-height: 44px;
  min-width: 44px;
  max-height: 44px;
  max-width: 44px;
  background: ${colors.grey700};
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    height: 24px;
  }
`;

const Seperator = styled.div`
  width: 1px;
  height: 100%;
  background: ${colors.secondary};
`;

const BackgroundImages = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  top: 0;
  z-index: 0;

  @media (min-width: 1920px) {
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0)
    );
  }
`;

const BottomLeft = styled.img`
  position: absolute;
  width: 228px;
  top: 50%;
  left: 0;
  transform: translate(-10px, calc(-50% + 130px));

  @media (max-width: ${breakpoint.m}px) {
    width: 106px;
    top: 49px;
    transform: translate(0, 0);
  }
`;

const CenterLeft = styled.img`
  position: absolute;
  width: 178px;
  top: 50%;
  left: 0;
  transform: translate(152px, -50%);

  @media (max-width: ${breakpoint.m}px) {
    display: none;
  }
`;

const TopLeft = styled.img`
  position: absolute;
  width: 203px;
  top: 50%;
  left: 0;
  transform: translate(-10px, calc(-50% - 90px));

  @media (max-width: ${breakpoint.m}px) {
    width: 96px;
    top: 114px;
    left: -20px;
    transform: translate(0, 0);
    z-index: 1;
  }
`;

const BottomRight = styled.img`
  position: absolute;
  width: 168px;
  top: 50%;
  right: 0;
  transform: translate(10px, calc(-50% + 140px));

  @media (max-width: ${breakpoint.m}px) {
    width: 75px;
    top: 131px;
    right: -20px;
    transform: translate(0, 0);
  }
`;

const CenterRight = styled.img`
  position: absolute;
  width: 262px;
  top: 50%;
  right: 0;
  transform: translate(-40px, calc(-50% + 10px));

  @media (max-width: ${breakpoint.m}px) {
    width: 105px;
    top: 95px;
    transform: translate(0, 0);
  }
`;

const TopRight = styled.img`
  position: absolute;
  width: 239px;
  top: 50%;
  right: 0;
  transform: translate(10px, calc(-50% - 60px));

  @media (max-width: ${breakpoint.m}px) {
    width: 96px;
    right: -20px;
    top: 29px;
    transform: translate(0, 0);
  }
`;
