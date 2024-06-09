import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import styled from "styled-components";
import { colors } from "../components/GlobalStyles.tsx";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: ${colors.grey800};
`;
