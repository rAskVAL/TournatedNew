import styled from "styled-components";
import {
  breakpoint,
  containerStyles,
} from "../../../components/GlobalStyles.tsx";
import Left from "./Left.tsx";
import Right from "./Right.tsx";

const Hero = () => (
  <Container>
    <Left />
    <Right />
  </Container>
);

export default Hero;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 807px;
  ${containerStyles};

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 20px;
  }
`;
