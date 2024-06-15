import styled from "styled-components";
import { colors } from "../../../components/GlobalStyles.tsx";

const Promo = () => (
  <Container $image="https://i.ytimg.com/vi/XkBT5gC-ksI/maxresdefault.jpg">
    <Box>Launch your own web platform  and mobile app</Box>
  </Container>
);

export default Promo;

const Container = styled.div<{ $image: string }>`
  position: relative;
  width: 100%;
  min-height: 820px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: url(${({ $image }) => $image});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 40%;
  }
`;

const Box = styled.div`
  position: relative;
  height: 508px;
  width: min(100%, 980px);
  background: ${colors.grey900};
  margin-inline: 20px;
`;
