import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Menu from "./Menu.tsx";
import LanguageSelector from "./LanguageSelector.tsx";
import Button from "../Button.tsx";
import { breakpoint, containerStyles } from "../GlobalStyles.tsx";
import { useMediaQuery } from "@react-hookz/web";
import BurgerIcon from "../../assets/Icons/Burger.svg?react";

const Navbar = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoint.l}px)`);
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="Logo" />
        {isMobile ? (
          <BurgerIcon />
        ) : (
          <>
            <Menu />
            <RightContainer>
              <LanguageSelector />
              <Button style="outline">Go to platform</Button>
              <Button style="primary">Go to platform</Button>
            </RightContainer>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const Container = styled.nav`
  height: 88px;
  width: 100%;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  transition: all 0.2s;

  @media (max-width: ${breakpoint.l}px) {
    height: 56px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  ${containerStyles}
`;

const Logo = styled.img`
  height: 24px;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
