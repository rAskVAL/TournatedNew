import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import styled from "styled-components";
import { colors } from "../components/GlobalStyles.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  min-height: 100vh;
  background: ${colors.grey800};
`;
