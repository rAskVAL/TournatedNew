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
      slidesPerView="auto"
      freeMode={true}
      breakpoints={{
        0: {
          spaceBetween: 50,
        },
        [breakpoint.l]: {
          spaceBetween: 100,
        },
      }}
    >
      {[...new Array(12)].map(() => (
        <SwiperSlide style={{ maxWidth: "150px" }} key={Math.random()}>
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
  padding-bottom: 20px;

  ${containerStyles};

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 50px;
  }
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
