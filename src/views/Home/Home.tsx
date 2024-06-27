import Hero from "./Hero/Hero.tsx";
import styled from "styled-components";
import Featured from "./Featured/Featured.tsx";
import Promo from "./Promo/Promo.tsx";
import Features from "./Features/Features.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";
import Team from "./Team/Team.tsx";
import Pricing from "./Pricing/Pricing.tsx";

const Home = () => (
  <Main>
    <Hero />
    <Featured />
    <Promo />
    <Features />
    <Testimonials />
    <WhiteBG>
      <Pricing />
      <Team />
    </WhiteBG>
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

const WhiteBG = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: #f2f2f3;
  width: 100%;
`;
