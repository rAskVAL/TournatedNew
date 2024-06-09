import styled from "styled-components";
import { containerStyles } from "../../../components/GlobalStyles.tsx";
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
  height: 807px;
  ${containerStyles};
`;
