import Hero from "./Hero/Hero.tsx";
import styled from "styled-components";
import Featured from "./Featured/Featured.tsx";
import Promo from "./Promo/Promo.tsx";
import Features from "./Features/Features.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";
import Team from "./Team/Team.tsx";
import Pricing from "./Pricing/Pricing.tsx";
import {
  colors,
  outerContainerStyles,
} from "../../components/GlobalStyles.tsx";
import WhyUs from "./Facts/WhyUs.tsx";

const Home = () => (
  <>
    <WrapperWithWidth>
      <Hero />
      <Featured />
    </WrapperWithWidth>
    <Wrapper>
      <Promo />
    </Wrapper>
    <Wrapper $color={colors.white}>
      <Features />
    </Wrapper>
    <Wrapper $color="#F1F1F1">
      <WhyUs />
    </Wrapper>
    <WrapperWithWidth>
      <Testimonials />
    </WrapperWithWidth>
    <Wrapper $color="#f2f2f3">
      <Pricing />
      <Team />
    </Wrapper>
  </>
);

export default Home;

const Wrapper = styled.div<{ $color?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background: ${({ $color }) => $color ?? "transparent"};
`;

const WrapperWithWidth = styled(Wrapper)`
  ${outerContainerStyles}
`;
