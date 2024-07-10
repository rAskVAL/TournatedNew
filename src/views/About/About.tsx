import Hero from "./Hero/Hero.tsx";
import Partners from "../../components/Partners/Partners.tsx";
import { powering } from "../Home/partnersData.ts";

const About = () => (
  <>
    <Hero />
    <Partners data={powering} titleKey="trusted_by" />
  </>
);

export default About;
