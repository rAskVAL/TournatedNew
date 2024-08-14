import Hero from "./Hero/Hero.tsx";
import Partners from "../../components/Partners/Partners.tsx";
import { powering } from "../Home/partnersData.ts";
import Team from "./Team/Team.tsx";
import Contact from "./Contact/Contact.tsx";
import { Helmet } from "react-helmet";

const About = () => (
  <>
    <Helmet>
      <title>
        About Tournated - Our Mission, Team, and Story | Learn More About Us
      </title>
      <meta
        name="description"
        content="Discover the story behind Tournated, our mission, and the team driving our innovative sports management solutions. Learn how we help organizations streamline sports events and maintain control over their data."
      />
    </Helmet>
    <Hero />
    <Partners data={powering} titleKey="trusted_by" />
    <Team />
    <Contact />
  </>
);

export default About;
