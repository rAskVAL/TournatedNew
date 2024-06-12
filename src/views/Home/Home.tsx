import Hero from "./Hero/Hero.tsx";
import styled from "styled-components";
import Partners from "./Partners/Partners.tsx";
import Featured from "./Featured/Featured.tsx";

const Home = () => (
  <Main>
    <Hero />
    <Partners />
    <Featured />
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
