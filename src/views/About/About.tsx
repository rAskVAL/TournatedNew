import Hero from "./Hero/Hero.tsx";
import Partners from "../../components/Partners/Partners.tsx";
import { powering } from "../Home/partnersData.ts";
import Team from "./Team/Team.tsx";

const About = () => (
  <>
    <Hero />
    <Partners data={powering} titleKey="trusted_by" />
    <Team />
  </>
);

export default About;
