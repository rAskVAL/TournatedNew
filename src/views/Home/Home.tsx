import Hero from "./Hero/Hero.tsx";
import styled from "styled-components";
import Partners from "./Partners/Partners.tsx";

const Home = () => (
  <Main>
    <Hero />
    <Partners />
  </Main>
);

export default Home;

const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
