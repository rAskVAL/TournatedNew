import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../../components/GlobalStyles";

import { Swiper, SwiperSlide } from "swiper/react";

import placeholder from "../../../assets/partner-placeholder.png";

// Import Swiper styles
import "swiper/css";

const Partners = () => (
  <Container>
    <Title>Partners</Title>
    <Block />
    <List
      slidesPerView={1.4}
      freeMode={true}
      breakpoints={{
        [breakpoint.xs]: {
          slidesPerView: 2,
        },
        [breakpoint.sm]: {
          slidesPerView: 2.7,
        },
        [breakpoint.m]: {
          slidesPerView: 4,
        },
        [breakpoint.l]: {
          slidesPerView: 5,
        },
      }}
    >
      {[...new Array(12)].map(() => (
        <SwiperSlide>
          <Logo src={placeholder} />
        </SwiperSlide>
      ))}
    </List>
  </Container>
);

export default Partners;

const Container = styled.div`
  position: relative;
  overflow: visible;

  margin-top: 200px;
  ${containerStyles}
`;

const List = styled(Swiper)`
  overflow: visible;
`;

const Title = styled.h3`
  margin-bottom: 42px;
  ${typography.grotesk16};
  color: ${colors.grey400};
`;

const Logo = styled.img`
  height: 24px;
`;

const Block = styled.div`
  position: absolute;
  right: 100%;
  background: ${colors.grey800};
  height: 40px;
  width: 100vw;
  z-index: 10;
`;
