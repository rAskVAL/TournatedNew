import About from "../../../views/About/About.tsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tournated - Our Mission, Team, and Story | Learn More About Us",
  description:
    "Discover the story behind Tournated, our mission, and the team driving our innovative sports management solutions. Learn how we help organizations streamline sports events and maintain control over their data.",
};
const Page = () => {
  return <About />;
};

export default Page;
