/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Menu from "./Menu.tsx";
import LanguageSelector from "./LanguageSelector.tsx";
import Button from "../Button.tsx";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../GlobalStyles.tsx";
import { useMediaQuery } from "@react-hookz/web";
import BurgerIcon from "../../assets/Icons/burger.svg?react";
import Elipse from "../../assets/Icons/elipse.svg?react";

const Navbar = () => {
  const isNarrow = useMediaQuery(`(max-width: ${breakpoint.l}px)`);
  const isMoble = useMediaQuery(`(max-width: ${breakpoint.sm}px)`);

  return (
    <>
      {!isMoble && (
        <InfoContainer>
          <p>We are live</p>
          <Elipse />
          <a>Read more</a>
          <Elipse />
          <a>Find documentation</a>
          <Elipse />
          <a>Submit feedback</a>
        </InfoContainer>
      )}
      <Container>
        <Wrapper>
          <Logo src={logo} alt="Logo" />
          {isNarrow ? (
            <BurgerIcon />
          ) : (
            <>
              <Menu />
              <RightContainer>
                <LanguageSelector />
                <Button style="outline">Contact Sales</Button>
                <Button style="primary">Go to platform</Button>
              </RightContainer>
            </>
          )}
        </Wrapper>
      </Container>
    </>
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 24px;
  width: 100%;
  background: ${colors.orange300};
  ${typography.grotesk14};
  white-space: nowrap;

  & > a {
    cursor: pointer;
    color: ${colors.brown500};
    text-decoration: underline;
  }
  & > p {
    color: ${colors.grey800};
    font-weight: 500;
  }
`;
