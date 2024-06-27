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
import data from "./data.ts";
import { SupportedLanguages } from "../../../App.tsx";
import checkmarkIcon from "../../../assets/Icons/checkmark.svg";
import Button from "../../../components/Button.tsx";
import { useMediaQuery } from "@react-hookz/web";
import { SwiperSlide, Swiper } from "swiper/react"; // Import Swiper component

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;
  const [activeIndex, setActiveIndex] = useState(0);

  const currentData = data[activeIndex === 0 ? "manager" : "whiteLabel"];

  const isMobile = useMediaQuery(`(max-width: ${breakpoint.l}px)`);

  return (
    <Container>
      <StyledSectionTitle text={t("pricing")} />
      <Title>{t("pricing_message")}</Title>
      <Switch
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        switches={["Manager", "Custom (white-label)"]}
      />
      {isMobile ? (
        <Swiper spaceBetween={20} slidesPerView="auto">
          {currentData.map((plan, index) => (
            <CardsSlide key={index}>
              <Card>
                <CardTitleBox $status={plan[currentLanguage].status}>
                  <CardTitle text={plan[currentLanguage].title} />
                  <CardPrice>
                    <h3>{plan[currentLanguage].price}</h3>
                    {plan[currentLanguage].oldPrice && (
                      <p>{plan[currentLanguage].oldPrice}</p>
                    )}
                  </CardPrice>
                </CardTitleBox>
                <CardContent>
                  <CardFeatures>
                    {plan[currentLanguage].features.map(
                      (feature, featureIndex) => (
                        <Feature key={featureIndex}>{feature}</Feature>
                      ),
                    )}
                  </CardFeatures>
                  <Button style="brand">{plan[currentLanguage].button}</Button>
                </CardContent>
              </Card>
            </CardsSlide>
          ))}
        </Swiper>
      ) : (
        <Cards>
          {currentData.map((plan, index) => (
            <Card key={index}>
              <CardTitleBox $status={plan[currentLanguage].status}>
                <CardTitle text={plan[currentLanguage].title} />
                <CardPrice>
                  <h3>{plan[currentLanguage].price}</h3>
                  {plan[currentLanguage].oldPrice && (
                    <p>{plan[currentLanguage].oldPrice}</p>
                  )}
                </CardPrice>
              </CardTitleBox>
              <CardContent>
                <CardFeatures>
                  {plan[currentLanguage].features.map(
                    (feature, featureIndex) => (
                      <Feature key={featureIndex}>{feature}</Feature>
                    ),
                  )}
                </CardFeatures>
                <Button style="brand">{plan[currentLanguage].button}</Button>
              </CardContent>
            </Card>
          ))}
        </Cards>
      )}
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

const Card = styled.div`
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

const CardPrice = styled.p`
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
  padding-left: 24px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url(${checkmarkIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
