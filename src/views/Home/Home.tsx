import {
  colors,
  outerContainerStyles,
} from "../../components/GlobalStyles.tsx";
import styled from "styled-components";
import { lazy } from "react";
import Facts from "./Facts/Facts.tsx";
import Partners from "../../components/Partners/Partners.tsx";
import { partners } from "./partnersData.ts";
import Services from "./Services/Services.tsx";

const Hero = lazy(() => import("./Hero/Hero.tsx"));
const Featured = lazy(() => import("./Featured/Featured.tsx"));
const Promo = lazy(() => import("./Promo/Promo.tsx"));
const Features = lazy(() => import("./Features/Features.tsx"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials.tsx"));
const Team = lazy(() => import("./Team/Team.tsx"));
const Pricing = lazy(() => import("./Pricing/Pricing.tsx"));
const WhyUs = lazy(() => import("./Facts/WhyUs.tsx"));

const Home = () => (
  <>
    <WrapperWithWidth>
      <Hero />
      <Featured />
    </WrapperWithWidth>
    <Wrapper>
      <Promo />
    </Wrapper>
    <Powering data={partners} titleKey="partners" />
    <Wrapper $color={colors.white}>
      <Features />
    </Wrapper>
    <Wrapper $color="#F1F1F1">
      <WhyUs />
      <Facts />
    </Wrapper>
    <Wrapper>
      <Services />
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

const Powering = styled(Partners)`
  margin-block: 20px;
`;
