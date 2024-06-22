import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  resetStyles,
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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PLATFORM_URL } from "../consts.ts";

const Footer = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoint.l}px)`);
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Top>
          <FlexItem>
            <Logo src={logo} alt="Logo" />
          </FlexItem>
          <FlexItem>
            <p>{t("mission_statement")}</p>
          </FlexItem>
          {isMobile && (
            <Socials>
              <a href="https://www.facebook.com/tournated">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/tournated">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/company/tournated">
                <Linkedin />
              </a>
            </Socials>
          )}
        </Top>
        <Bottom>
          <Menus>
            <Menu>
              <MenuTitle>{t("support")}</MenuTitle>
              <MenuItem to="">{t("documents")}</MenuItem>
              <MenuItem to="">{t("feedback")}</MenuItem>
              <MenuItem to="https://discord.gg/E2MEXghwdx">
                {t("submit_ticket")}
              </MenuItem>
            </Menu>
            <Menu>
              <MenuTitle>{t("site")}</MenuTitle>
              <MenuItem to="">{t("organizations")}</MenuItem>
              <MenuItem to="">{t("features")}</MenuItem>
              <MenuItem to={`${PLATFORM_URL}/pricing`}>{t("pricing")}</MenuItem>
              <MenuItem to="">{t("testimonials")}</MenuItem>
              <MenuItem to="">{t("news")}</MenuItem>
              <MenuItem to="">{t("team")}</MenuItem>
            </Menu>
            <Menu>
              <MenuTitle>{t("legal")}</MenuTitle>
              <MenuItem to="">{t("terms_conditions")}</MenuItem>
              <MenuItem to="">{t("privacy_policy")}</MenuItem>
            </Menu>
          </Menus>
          <Contacts>
            {!isMobile && (
              <Socials>
                <a href="https://www.facebook.com/tournated">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/tournated">
                  <Instagram />
                </a>
                <a href="https://www.linkedin.com/company/tournated">
                  <Linkedin />
                </a>
              </Socials>
            )}
            <Payments>
              <img src={mastercard} alt="Mastercard" />
              <img src={visa} alt="Visa" />
              <img src={stripe} alt="Stripe" />
              {/*<img src={googlePay} alt="Google Pay" />*/}
              {/*<img src={applePay} alt="Apple Pay" />*/}
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

  p {
    color: ${colors.white};
  }
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

const MenuItem = styled(Link)`
  ${resetStyles};
  && {
    cursor: pointer;
    color: ${colors.white};

    &:hover {
      color: ${colors.primary};
    }

    &:active {
      opacity: 0.6;
    }
  }
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
