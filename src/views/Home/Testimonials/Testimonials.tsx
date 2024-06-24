import styled from "styled-components";
import Pattern from "./assets/pattern.svg?react";
import {
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
import { useRef } from "react";
import ArrowRight from "../../../assets/Icons/arrowRight.svg?react";

const Testimonials = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;
  const swiperRef = useRef<SwiperRef>(null);

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

  return (
    <Container>
      <StyledPattern />
      <Content>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
        >
          {data.map((testimonial, index) => (
            <Slide key={index}>
              <Card>
                <Text>{testimonial[currentLanguage].text}</Text>
                <Author>
                  <Avatar src={testimonial[currentLanguage].avatar} />
                  <div>
                    <p>{testimonial[currentLanguage].name}</p>
                    <p>{testimonial[currentLanguage].role}</p>
                  </div>
                </Author>
              </Card>
            </Slide>
          ))}
        </Swiper>
        <Buttons>
          <Button onClick={handlePrev}>
            <LeftIcon />
          </Button>
          <Button onClick={handleNext}>
            <RightIcon />
          </Button>
        </Buttons>
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
`;

const StyledPattern = styled(Pattern)`
  width: 100%;
  position: absolute;
  left: 0;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 120px;
  ${containerStyles};
`;

const Text = styled.h3`
  margin-top: 136px;
  max-width: 780px;
  color: ${colors.white};
  ${typography.grotesk48}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 120px;
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
  }
`;

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  aspect-ratio: 1/1;
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
  }
`;

const Buttons = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  gap: 12px;
`;

const Slide = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RightIcon = styled(ArrowRight)`
  path {
    stroke: black;
  }
`;

const LeftIcon = styled(RightIcon)`
  transform: scaleX(-1);
`;
