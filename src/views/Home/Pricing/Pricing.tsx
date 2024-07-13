import styled, { css } from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import SectionTitle from "../../../components/SectionTitle.tsx";
import { useTranslation } from "react-i18next";
import Switch from "./Switch.tsx";
import { useState } from "react";
import data from "../../../data/PricingData.ts";
import { SupportedLanguages } from "../../../App.tsx";
import CheckmarkIcon from "../../../assets/Icons/checkmark.svg?react";
import Button from "../../../components/Button.tsx";
import { useMediaQuery } from "@react-hookz/web";
import { SwiperSlide, Swiper } from "swiper/react"; // Import Swiper component
import { Swiper as SwiperType } from "swiper";
import Pattern from "./assets/pattern.svg?react";
import { motion } from "framer-motion";

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>(); // Create a state variable for the Swiper instance

  const currentData = data[activeIndex === 0 ? "manager" : "whiteLabel"];

  const isMobile = useMediaQuery(`(max-width: ${breakpoint.l}px)`);

  const handleSwitchChange = (i: number) => {
    setActiveIndex(i);
    if (swiperInstance) {
      swiperInstance.slideTo(0); // Move the slider to the first slide
    }
  };

  return (
    <Container>
      <StyledSectionTitle text={t("pricing")} />
      <Title>{t("pricing_message")}</Title>
      <Switch
        activeIndex={activeIndex}
        setActiveIndex={handleSwitchChange}
        switches={["Manager", "Custom (white-label)"]}
      />
      {isMobile ? (
        <StyledSwiper
          spaceBetween={20}
          slidesPerView="auto"
          onSwiper={(swiper) => setSwiperInstance(swiper)} // Update the state variable with the Swiper instance
        >
          {currentData.map((plan) => (
            <CardsSlide key={plan[currentLanguage]?.title}>
              <Card
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <CardTitleBox $status={plan[currentLanguage]?.status}>
                  <CardTitle text={plan[currentLanguage]?.title} />
                  <CardPrice>
                    <h3>{plan[currentLanguage]?.price}</h3>
                    {plan[currentLanguage]?.oldPrice && (
                      <p>{plan[currentLanguage]?.oldPrice}</p>
                    )}
                  </CardPrice>
                </CardTitleBox>
                <CardContent>
                  <CardFeatures>
                    {plan[currentLanguage]?.features.map(
                      (feature, featureIndex) => (
                        <Feature key={featureIndex}>
                          <CheckmarkIcon />
                          <p>{feature}</p>
                        </Feature>
                      ),
                    )}
                  </CardFeatures>
                  <Button
                    onClick={() => window.open(plan[currentLanguage]?.to)}
                    style="brand"
                  >
                    {plan[currentLanguage]?.button}
                  </Button>
                </CardContent>
              </Card>
            </CardsSlide>
          ))}
        </StyledSwiper>
      ) : (
        <Cards>
          {currentData.map((plan) => (
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: "some" }}
              transition={{ duration: 0.5 }}
              key={plan[currentLanguage]?.title}
            >
              <CardTitleBox $status={plan[currentLanguage]?.status}>
                <CardTitle text={plan[currentLanguage]?.title} />
                <CardPrice>
                  <h3>{plan[currentLanguage]?.price}</h3>
                  {plan[currentLanguage]?.oldPrice && (
                    <p>{plan[currentLanguage]?.oldPrice}</p>
                  )}
                </CardPrice>
              </CardTitleBox>
              <CardContent>
                <CardFeatures>
                  {plan[currentLanguage]?.features.map(
                    (feature, featureIndex) => (
                      <Feature key={featureIndex}>
                        <CheckmarkIcon />
                        <p>{feature}</p>
                      </Feature>
                    ),
                  )}
                </CardFeatures>
                <Button
                  onClick={() => window.open(plan[currentLanguage]?.to)}
                  style="brand"
                >
                  {plan[currentLanguage]?.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Cards>
      )}
      <Banner>
        <Background />
        <h1>{t("pricing_banner")}</h1>
        <Button style="primary">{t("book_a_call")}</Button>
      </Banner>
    </Container>
  );
};

export default Pricing;

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  ${containerStyles};

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 40px;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: ${colors.grey900};
`;

const StyledSwiper = styled(Swiper)`
  max-width: 100%;
`;

const CardTitle = styled(SectionTitle)`
  color: ${colors.black};
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  ${typography.grotesk48};
  color: ${colors.black};
  max-width: 809px;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk20};
  }
`;

const CardsSlide = styled(SwiperSlide)`
  max-width: 318px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const Card = styled(motion.div)`
  height: 541px;
  flex: 1;
  max-width: 385px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardTitleBox = styled.div<{
  $status: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 132px;
  padding: 20px;
  gap: 40px;
  border-bottom: 1px solid ${colors.grey25};

  h3 {
    color: ${colors.primary};
    ${typography.grotesk40};
  }

  ${({ $status }) =>
    $status === "recommended"
      ? css`
          background: ${colors.primaryTransparent};
        `
      : $status === "standard" &&
        css`
          & ${CardTitle} {
            svg * {
              fill: ${colors.grey100};
            }
          }
          h3 {
            color: ${colors.black};
            ${typography.grotesk40};
          }
        `};
`;

const CardPrice = styled.div`
  display: flex;
  gap: 4px;

  p {
    margin-top: 8px;
    ${typography.grotesk20};
    font-weight: 700;
    color: ${colors.grey500};
    text-decoration: line-through;
  }
`;

const CardFeatures = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: start;
  gap: 12px;
`;

const Feature = styled.li`
  ${typography.grotesk14};
  color: ${colors.grey700};
  position: relative;
  gap: 10px;
  align-items: center;
  display: flex;

  :first-child {
    min-width: 18px;
  }
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  min-height: 104px;
  width: 100%;
  background: ${colors.grey900};
  padding-inline: 40px;
  padding-block: 20px;
  overflow: hidden;
  gap: 40px;

  h1 {
    position: relative;
    ${typography.grotesk28};
    color: ${colors.white};
  }

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    align-items: start;
    padding-inline: 20px;
    margin-top: 0;

    & > button {
      width: 100%;
    }

    h1 {
      ${typography.grotesk20};
    }
  }
`;

const Background = styled(Pattern)`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;

  @media (max-width: ${breakpoint.l}px) {
    right: -100%;
  }
`;
