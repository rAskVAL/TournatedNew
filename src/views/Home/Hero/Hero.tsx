import styled from "styled-components";
import {
  breakpoint,
  containerStyles,
} from "../../../components/GlobalStyles.tsx";
import Left from "./Left.tsx";
import Right from "./Right.tsx";
import Partners from "../../../components/Partners/Partners.tsx";
import { motion } from "framer-motion";
import { powering } from "../partnersData.ts";

const Hero = () => (
  <Container
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ duration: 1 }}
  >
    <Overflow>
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
    </Overflow>
    <Partners data={powering} titleKey="trusted_by" />
  </Container>
);

export default Hero;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;

  ${containerStyles};

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 20px;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${breakpoint.l}px) {
    height: max(min(calc(100dvh - 130px), 1000px), 650px);
  }
`;

const Overflow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;

  @media (min-width: ${breakpoint.l}px) {
    overflow: hidden;
  }
`;
