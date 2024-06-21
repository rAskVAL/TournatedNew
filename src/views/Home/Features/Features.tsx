import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../../../components/SectionTitle.tsx";
import styled, { css } from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { useState } from "react";
import AccordionItem from "./AccordionItem.tsx";
import data from "./data.tsx";
import { useMediaQuery } from "@react-hookz/web";
import { Swiper, SwiperSlide } from "swiper/react";

const Features = () => {
  const [activeItem, setActiveItem] = useState(0);
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.l}px)`);

  return (
    <Container>
      <TitleBox>
        <StyledSectionTitle text="Features" />
        <Title>
          Streamline Your Sports Tournaments with Our{" "}
          <Italic>All-In-One CRM Solution</Italic>
        </Title>
      </TitleBox>
      {isDesktop ? (
        <DesktopContent>
          <Left>
            {data.map((feature, index) => (
              <AccordionItem
                key={index}
                text={feature.description}
                active={activeItem === index}
                onClick={() => setActiveItem(index)}
              >
                {feature.title}
              </AccordionItem>
            ))}
          </Left>
          <Right $activeItem={activeItem}>
            <AnimatePresence>
              {data.map(
                (feature, index) =>
                  activeItem === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {feature.banner}
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </Right>
        </DesktopContent>
      ) : (
        <MobileContent
          spaceBetween={16}
          slidesPerView="auto"
          pagination={{ clickable: true }}
        >
          {data.map(({ title, description, banner }, i) => (
            <Card key={i}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div>{banner}</div>
            </Card>
          ))}
        </MobileContent>
      )}
    </Container>
  );
};

export default Features;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  background: ${colors.white};
  padding-top: 120px;
  padding-bottom: 104px;

  @media (max-width: ${breakpoint.l}px) {
    padding-top: 55px;
    padding-bottom: 29px;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: ${colors.black} !important;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  ${containerStyles}
`;

const Title = styled.div`
  ${typography.grotesk48};
  color: ${colors.black};
  text-align: center;
  white-space: balance;
  max-width: 955px;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk28}
  }
`;

const Italic = styled.span`
  ${typography.italic};
  color: ${colors.primary};
`;

const DesktopContent = styled.div`
  margin-top: 63px;
  display: flex;
  height: 531px;
  width: 100%;
  max-width: 1100px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-right: 120px;
  padding-top: 20px;
`;

const Right = styled.div<{ $activeItem: number }>`
  flex: 1;
  height: 100%;
  background: ${({ $activeItem }) =>
    $activeItem === 3 ? colors.grey900 : colors.primary};
  position: relative;

  & > div {
    position: absolute;
    display: flex;
    justify-content: end;
    height: 100%;
    width: 100%;

    ${({ $activeItem }) =>
      $activeItem === 2
        ? css`
            align-items: center;
          `
        : css`
            align-items: end;
          `};
  }
`;

const Card = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;

  h3 {
    ${typography.grotesk18};
    color: ${colors.grey900};
  }

  p {
    ${typography.grotesk14};
    color: ${colors.grey600};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 275px;
    padding-block: 25px;
    padding-left: 25px;
    background: ${colors.primary};
    overflow: hidden;
    svg {
      height: 100%;
      border-radius: 0 4px 0 4px;
    }
  }
`;

const MobileContent = styled(Swiper)`
  ${containerStyles};
  margin-top: 55px;
`;
