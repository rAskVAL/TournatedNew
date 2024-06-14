import styled from "styled-components";
import {
  breakpoint,
  containerStyles,
} from "../../../components/GlobalStyles.tsx";
import Left from "./Left.tsx";
import Right from "./Right.tsx";
import Partners from "../Partners/Partners.tsx";

const Hero = () => (
  <Container>
    <Overflow>
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
    </Overflow>
    <Partners />
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: ${breakpoint.l}px) {
    height: min(calc(100dvh - 130px), 1000px);
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
