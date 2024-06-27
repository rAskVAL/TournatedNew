import styled from "styled-components";
import Pattern from "./assets/pattern.svg?react";
import {
  breakpoint,
  colors,
  containerStyles,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { data } from "./data.ts";
import { SupportedLanguages } from "../../../App.tsx";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import ArrowRight from "../../../assets/Icons/arrowRight.svg?react";
import ProgressBar from "../../../components/ProgressBar.tsx";
import { useMediaQuery, useThrottledState } from "@react-hookz/web";

const Testimonials = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;
  const swiperRef = useRef<SwiperRef>(null);
  const isMobile = useMediaQuery(`(max-width: ${breakpoint.l}px)`);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const [percentage, setPercentage] = useThrottledState(() => 0, 100); // 500ms throttle

  return (
    <Container>
      <StyledPattern />
      <Content>
        <Wrapper>
          <StyledSwiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            onAutoplayTimeLeft={(_, __, p) => setPercentage(1 - p)}
            onActiveIndexChange={(s) => setActiveIndex(s.activeIndex)}
          >
            {data.map((testimonial, index) => (
              <Slide key={index}>
                <Card>
                  <Text>"{testimonial[currentLanguage]?.text}"</Text>
                  <Author>
                    <Avatar src={testimonial[currentLanguage]?.avatar} />
                    <div>
                      <p>{testimonial[currentLanguage]?.name}</p>
                      <p>{testimonial[currentLanguage]?.role}</p>
                    </div>
                  </Author>
                </Card>
              </Slide>
            ))}
          </StyledSwiper>
          <StyledBar animationLength={5} percentage={percentage} />
        </Wrapper>
        {!isMobile && (
          <Buttons>
            <Button onClick={handlePrev} disabled={activeIndex === 0}>
              <LeftIcon />
            </Button>
            <Button
              onClick={handleNext}
              disabled={activeIndex === data.length - 1}
            >
              <RightIcon />
            </Button>
          </Buttons>
        )}
      </Content>
    </Container>
  );
};

export default Testimonials;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 643px;
  padding-inline: 20px;
  width: 100%;
  height: 100%;

  @media (max-width: ${breakpoint.l}px) {
    min-height: 450px;
    max-height: 603px;
  }
`;

const StyledBar = styled(ProgressBar)`
  &::before {
    background: #ff9242;
  }
  &::after {
    background: ${colors.white};
  }
`;

const StyledPattern = styled(Pattern)`
  height: 100%;
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 120px;
  ${containerStyles};
  @media (max-width: ${breakpoint.l}px) {
    margin-bottom: 92px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 780px;
  width: 100%;
  align-items: start;

  @media (max-width: ${breakpoint.l}px) {
    gap: 24px;
  }
`;

const Text = styled.h3`
  margin-top: 136px;
  color: ${colors.white};
  ${typography.grotesk48};

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 58px;
    ${typography.grotesk28}
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
  margin-bottom: 120px;
  width: 100%;

  @media (max-width: ${breakpoint.l}px) {
    flex: 1;
    height: 100%;
    justify-content: space-between;
  }
`;

const Author = styled.div`
  display: flex;
  gap: 16px;
  ${typography.grotesk18};
  color: ${colors.white};

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > div > p:nth-child(2) {
    opacity: 0.64;
    ${typography.grotesk16};
  }
`;

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const RightIcon = styled(ArrowRight)`
  path {
    stroke: black;
    transition: all 0.1s;
  }
`;

const LeftIcon = styled(RightIcon)`
  transform: scaleX(-1);
`;

const Button = styled.button`
  ${resetStyles};

  && {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
    height: 48px;
    width: 48px;
    border-radius: 6px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.1s;

    &:hover {
      * {
        stroke: ${colors.white};
      }
      background-color: ${colors.black};

      &:active {
        background-color: ${colors.primaryHover};
      }
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: end;
  position: absolute;
  bottom: 0;
  left: 20px;
  gap: 12px;
`;

const Slide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 780px;
  height: 100%;
  && {
    margin: 0;
  }
`;
