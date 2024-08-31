import { ReactNode, lazy } from "react";
import "./global.css";

const Navbar = lazy(() => import("../../components/Navbar/Navbar.tsx"));
const Footer = lazy(() => import("../../views/Footer.tsx"));

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-[100dvh] bg-grey800 flex items-center flex-col">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
