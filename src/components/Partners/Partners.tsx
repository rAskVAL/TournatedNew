import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../GlobalStyles.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { Partner } from "../../views/Home/partnersData.ts";

const Partners = ({
  data,
  titleKey,
  className,
}: {
  data: Partner[];
  titleKey: string;
  className?: string;
}) => {
  const { t } = useTranslation();

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  // Repeat partners until there are at least 8
  const repeatedPartners = Array.from({ length: 8 }, () => data)
    .flat()
    .slice(0, 8);

  return (
    <Container className={className}>
      <Title>{t(titleKey)}</Title>
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
        {repeatedPartners.map((partner, i) => (
          <SwiperSlide
            style={{ maxWidth: "150px" }}
            key={i}
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
  padding-bottom: 40px;

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
  height: 30px;
  filter: brightness(0) invert(1);
  cursor: pointer;
`;

const Block = styled.div`
  position: absolute;
  right: 100%;
  background: ${colors.grey800};
  height: 40px;
  width: 100vw;
  z-index: 10;
`;
