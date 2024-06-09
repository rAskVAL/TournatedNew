import styled from "styled-components";
import { containerStyles } from "../../../components/GlobalStyles";

import { Swiper, SwiperSlide } from "swiper/react";

import placeholder from "../../../assets/partner-placeholder.png";

// Import Swiper styles
import "swiper/css";

const Partners = () => (
  <Container>
    <List slidesPerView={5} freeMode={true}>
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
  display: flex;
  overflow: visible;
`;

const Logo = styled.img`
  height: 24px;
`;
