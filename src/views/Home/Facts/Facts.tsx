import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle.tsx";
import { useTranslation } from "react-i18next";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import SwiperButtons from "../../../components/SwiperButtons.tsx";
import { useCallback, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import factsData from "../../../data/factsData.tsx";
import { motion } from "framer-motion";
import left from "./assets/left.png";
import center from "./assets/center.png";
import right from "./assets/right.png";
import { SupportedLanguages } from "../../../App.tsx";

const Facts = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <Container>
      <SectionTitle text={t("facts")} />
      <StyledSwiper
        ref={swiperRef}
        onActiveIndexChange={(s) => setActiveIndex(s.activeIndex)}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {factsData.map((fact, index) => (
          <SwiperSlide key={index}>
            <Card>{fact[currentLanguage]}</Card>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <Disclaimer>{t("based_on_client_surveys")}</Disclaimer>
      <SwiperButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        activeIndex={activeIndex}
        dataLength={factsData.length}
      />
      <Images>
        <div>
          <Left
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            src={left}
          />
        </div>
        <div>
          <Center
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            src={center}
          />
        </div>
        <div>
          <Right
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            src={right}
          />
        </div>
      </Images>
    </Container>
  );
};

export default Facts;

const StyledSwiper = styled(Swiper)`
  max-width: min(90%, 809px);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${SectionTitle} {
    color: ${colors.black};
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const Card = styled.div`
  ${typography.grotesk64};
  text-align: center;
  white-space: balance;

  span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk30};
  }
`;

const Disclaimer = styled.p`
  margin-top: 30px;
  margin-bottom: 23px;
  ${typography.grotesk16};
  color: ${colors.grey500};
`;

const Images = styled.div`
  display: flex;
  width: 145%;
  max-height: 430px;
  overflow: hidden;
  justify-content: center;
  align-items: end;
  gap: 21px;
`;

const Left = styled(motion.img)`
  max-height: 400px;
  max-width: 100%;
`;

const Center = styled(motion.img)`
  max-height: 220px;
  max-width: 100%;
`;

const Right = styled(motion.img)`
  max-height: 400px;
  max-width: 100%;
`;
