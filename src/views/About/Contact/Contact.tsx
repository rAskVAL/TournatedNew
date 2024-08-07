import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Pattern from "./assets/pattern.svg?react";
import Button from "../../../components/Button.tsx";
import { useTranslation } from "react-i18next";
import { CALENDLY_URL } from "../../../consts.ts";

const Contact = () => {
  const { t } = useTranslation();

  const images = [
    "https://i.imgur.com/ffrQfeK.png",
    "https://i.imgur.com/AVLWaqx.png",
    "https://i.imgur.com/Pkc8Vzb.png",
    "https://i.imgur.com/HKHn1mB.png",
    "https://i.imgur.com/qJ4gyyi.png",
    "https://i.imgur.com/zDa5G0X.png",
    "https://i.imgur.com/6kvgnBX.png",
  ];

  return (
    <OuterContainer>
      <Background>
        <Images>
          {images.slice(0, 3).map((item, index) => (
            <img key={index} src={item} />
          ))}
        </Images>
        <Images>
          {images.slice(3).map((item, index) => (
            <img key={index} src={item} />
          ))}
        </Images>
      </Background>
      <Container>
        <Left>
          <h1>
            Customized <span>solutions</span>
          </h1>
          <p>
            We possess the capability to develop a wide range of IT solutions
            tailored to the unique needs of your sports organization, going
            beyond the scope of platforms.
            <br />
            <br />
            Whether it's crafting a compelling landing page, enhancing your
            social media presence, or creating comprehensive web and mobile
            applications, we{" "}
            <span>have the expertise to meet all your requirements.</span>
          </p>
          <LeftButton onClick={() => window.open(CALENDLY_URL)} style="brand">
            {t("contact_us")}
          </LeftButton>
        </Left>
        <Right>
          <StyledPattern />
          <RightContainer>
            <p>{t("looking_for_more")}</p>
            <Button onClick={() => window.open(CALENDLY_URL)} style="primary">
              Book a call
            </Button>
          </RightContainer>
        </Right>
      </Container>
    </OuterContainer>
  );
};

export default Contact;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 820px;
  background: ${colors.grey100};
  position: relative;

  @media (max-width: ${breakpoint.l}px) {
    min-height: auto;
    max-height: fit-content;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  width: 100%;
  height: 500px;
  background: ${colors.grey900};

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    height: auto;
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  & > h1 {
    max-width: 267px;
    ${typography.grotesk48};
    color: ${colors.white};

    span {
      color: ${colors.primary};
      ${typography.italic}
    }

    @media (max-width: ${breakpoint.l}px) {
      ${typography.grotesk40};
    }
  }

  & > p {
    ${typography.grotesk16};
    color: ${colors.grey300};
    white-space: balance;

    span {
      color: ${colors.white};
    }
  }

  @media (max-width: ${breakpoint.l}px) {
    padding-inline: 20px;
    padding-block: 32px;
  }
`;

const Right = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  background: ${colors.grey1100};
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: ${breakpoint.l}px) {
    max-height: fit-content;
  }
`;

const RightContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-inline: 50px;
  padding-block: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 40px;

  & p {
    color: ${colors.white};
    ${typography.grotesk28};
    max-width: 228px;

    @media (max-width: ${breakpoint.l}px) {
      ${typography.grotesk20};
      max-width: 100%;
    }
  }

  @media (max-width: ${breakpoint.l}px) {
    padding-inline: 20px;
    padding-block: 20px;
  }
`;

const StyledPattern = styled(Pattern)`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: ${breakpoint.l}px) {
    left: 150px;
    top: -25px;
  }
`;

const LeftButton = styled(Button)`
  padding-inline: 50px;
  height: 66px;
  max-width: fit-content;

  @media (max-width: ${breakpoint.l}px) {
    max-width: 100%;
  }
`;

const Background = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Images = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  height: 50%;

  img {
    height: 100%;
    flex: 1;
    object-fit: cover;
  }
`;
