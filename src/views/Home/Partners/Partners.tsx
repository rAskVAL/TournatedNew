import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../../components/GlobalStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { partners } from "./data"; // Import the partners data

const Partners = () => {
  const { t } = useTranslation();

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  // Repeat partners until there are at least 8
  const repeatedPartners = Array.from({ length: 8 }, () => partners)
    .flat()
    .slice(0, 8);

  return (
    <Container>
      <Title>{t("partners.title")}</Title>
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
        {repeatedPartners.map((partner) => (
          <SwiperSlide
            style={{ maxWidth: "150px" }}
            key={partner.id}
            onClick={() => handleClick(partner.url)}
          >
            <Logo src={partner.logo} alt={partner.name} />
          </SwiperSlide>
        ))}
      </List>
    </Container>
  );
};

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
