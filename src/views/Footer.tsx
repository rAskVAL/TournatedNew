import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../components/GlobalStyles.tsx";
import logo from "../assets/logo.svg";
import pattern from "../assets/pattern_grayed.png";
import Facebook from "../assets/Icons/facebook.svg?react";
import Linkedin from "../assets/Icons/linkedin.svg?react";
import Instagram from "../assets/Icons/instagram.svg?react";
import stripe from "../assets/stripe.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import { useMediaQuery } from "@react-hookz/web";

const Footer = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoint.l}px)`);

  return (
    <Container>
      <Wrapper>
        <Top>
          <FlexItem>
            <Logo src={logo} alt="Logo" />
          </FlexItem>
          <FlexItem>
            <p>
              Our mission is to help emerging sports and its
              organisations/individuals to modernise management of leagues,
              tournaments and other sport-related events.
            </p>
          </FlexItem>
          {isMobile && (
            <Socials>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </Socials>
          )}
        </Top>
        <Bottom>
          <Menus>
            <Menu>
              <MenuTitle>Sports</MenuTitle>
              <MenuItem>Tennis</MenuItem>
              <MenuItem>Beach Tennis</MenuItem>
              <MenuItem>Beach Volleyball</MenuItem>
              <MenuItem>Sport Fishing</MenuItem>
              <MenuItem>Pickleball</MenuItem>
              <MenuItem>Padel</MenuItem>
            </Menu>
            <Menu>
              <MenuTitle>Site</MenuTitle>
              <MenuItem>Organizations</MenuItem>
              <MenuItem>Features</MenuItem>
              <MenuItem>Pricing</MenuItem>
              <MenuItem>Testimonials</MenuItem>
              <MenuItem>News</MenuItem>
              <MenuItem>Team</MenuItem>
            </Menu>
            <Menu>
              <MenuTitle>Legal</MenuTitle>
              <MenuItem>Terms&Conditions</MenuItem>
              <MenuItem>Privacy Policy</MenuItem>
            </Menu>
          </Menus>
          <Contacts>
            {!isMobile && (
              <Socials>
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <Linkedin />
                </a>
              </Socials>
            )}
            <Payments>
              <img src={mastercard} alt="stripe" />
              <img src={visa} alt="stripe" />
              <img src={stripe} alt="stripe" />
            </Payments>
            <Pattern src={pattern} />
          </Contacts>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 502px;
  background: ${colors.grey800};
  overflow: hidden;

  @media (max-width: ${breakpoint.l}px) {
    height: auto;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 132px;
  border-bottom: 1px solid ${colors.secondary};
  ${typography.grotesk16}

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: auto;
    padding-bottom: 20px;
    gap: 20px;
    ${typography.grotesk14};
    color: ${colors.white};
    padding-top: 40px;
  }
`;

const Bottom = styled.div`
  display: flex;
  height: calc(100% - 132px);
  padding-top: 36px;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    gap: 65px;
  }
`;

const Menus = styled.div`
  display: flex;
  row-gap: 40px;
  column-gap: 60px;
  flex: 1;
  align-items: start;
  flex-wrap: wrap;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  ${typography.grotesk16};
  white-space: nowrap;
`;

const Wrapper = styled.div`
  ${containerStyles};
`;

const Logo = styled.img`
  height: 24px;
`;

const FlexItem = styled.div`
  flex: 1;
`;

const Contacts = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding-bottom: 85px;

  @media (max-width: ${breakpoint.l}px) {
    align-items: start;
    padding-bottom: 40px;
  }
`;

const Pattern = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
  pointer-events: none;

  @media (max-width: ${breakpoint.l}px) {
    width: auto;
    height: 200px;
  }
`;

const MenuTitle = styled.p`
  color: ${colors.grey200};
`;

const MenuItem = styled.a`
  color: ${colors.white};
`;

const Socials = styled.div`
  height: 40px;
  display: flex;
  gap: 16px;
  z-index: 1;
`;

const Payments = styled.div`
  display: flex;
  gap: 10px;
  z-index: 1;

  img {
    height: 30px;
  }
`;
