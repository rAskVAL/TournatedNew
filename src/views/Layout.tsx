import { Outlet, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import styled from "styled-components";
import { colors } from "../components/GlobalStyles.tsx";
import Footer from "./Footer.tsx";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  useEffect(() => {
    if (lang) {
      void changeLanguage(lang);
    } else {
      navigate("/en");
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
