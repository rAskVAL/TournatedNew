import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import styled from "styled-components";
import { colors } from "../components/GlobalStyles.tsx";
import Footer from "./Footer.tsx";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang) {
      void i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <Container>
      <Suspense>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  min-height: 100vh;
  background: ${colors.grey800};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
