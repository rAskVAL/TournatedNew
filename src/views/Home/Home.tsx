import Hero from "./Hero/Hero.tsx";
import styled from "styled-components";
import Featured from "./Featured/Featured.tsx";
import Promo from "./Promo/Promo.tsx";
import Features from "./Features/Features.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";
import Team from "./Team/Team.tsx";
import Pricing from "./Pricing/Pricing.tsx";

const Home = () => (
  <>
    <WrapperWithWidth>
      <Hero />
      <Featured />
    </WrapperWithWidth>
    <Wrapper>
      <Promo />
      <Features />
    </Wrapper>
    <WrapperWithWidth>
      <Testimonials />
    </WrapperWithWidth>
    <WhiteBG>
      <Pricing />
      <Team />
    </WhiteBG>
  </>
);

export default Home;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const WrapperWithWidth = styled(Wrapper)`
  max-width: 1440px;
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
