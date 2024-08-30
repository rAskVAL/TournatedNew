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
import { Helmet } from "react-helmet";

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
    <Helmet>
      <title>
        Tournated - Affordable White-Label Sports Management Software | Your
        Brand, Your Data | Free tournament sofware
      </title>
      <meta
        name="description"
        content="Launch your own custom sports management platform with Tournated. Our comprehensive, white-label software empowers you to manage sports organization, leagues, tournaments, clubs, events and athletes under your brand with full control over your data. Streamline sports events effortlessly."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://tournated.com/" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N82L4GJGH9"
      ></script>
      <script>
        {`
             window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N82L4GJGH9');
          `}
      </script>
    </Helmet>
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
