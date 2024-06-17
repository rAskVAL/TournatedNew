import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Button from "../../../components/Button.tsx";
import ArrowRight from "../../../assets/Icons/arrowRight.svg?react";
import pattern from "../../../assets/promo_pattern.png";
import mobile from "../../../assets/promo_mobile.png";

const Promo = () => (
  <Container $image="https://i.ytimg.com/vi/XkBT5gC-ksI/maxresdefault.jpg">
    <Box>
      <Content>
        <Left>
          <Wrapper>
            <Title>
              <Italic>Launch your own</Italic> web platform and mobile app
            </Title>
            <Par>
              Your sports organization deserves your own solution. With your
              domain, branding, and data under your control.
              <br />
              <Italic>Fully customizable</Italic>: choose the sports, features,
              and formats you need.
            </Par>
          </Wrapper>
          <StartButton style="brand">Start for free</StartButton>
        </Left>
        <Right>
          <Pattern src={pattern} />
          <Mobile src={mobile} />
        </Right>
      </Content>
      <Buttons>
        <StyledButton style="dark">
          <ButtonContent>
            <p>Launch your own web platform and mobile app</p>
            <div>
              <ArrowRight />
            </div>
          </ButtonContent>
        </StyledButton>
        <StyledButton style="dark">
          <ButtonContent>
            <p>Launch your own web platform and mobile app</p>
            <div>
              <ArrowRight />
            </div>
          </ButtonContent>
        </StyledButton>
      </Buttons>
    </Box>
  </Container>
);

export default Promo;

const Container = styled.div<{ $image: string }>`
  position: relative;
  width: 100%;
  min-height: 820px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  padding-block: 40px;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: url(${({ $image }) => $image});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 40%;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 508px;
  width: min(100%, 980px);
  background: ${colors.grey900};
  margin-inline: 20px;

  @media (max-width: ${breakpoint.l}px) {
    height: 800px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
  flex: 1;
  padding: 40px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 385px;
  color: ${colors.white};

  @media (max-width: ${breakpoint.l}px) {
    width: 294px;
  }
`;

const Title = styled.h2`
  ${typography.grotesk48};
  text-wrap: balance;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk40};
  }
`;

const Italic = styled.span`
  ${typography.italic};
  color: ${colors.primary};
`;

const Content = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Buttons = styled.div`
  display: flex;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  flex: 1;
  height: 100%;
  border-radius: 0;
  white-space: normal;
  padding-inline: 40px;

  & * {
    display: flex;
    align-items: center;
  }
`;

const Par = styled.p`
  ${typography.grotesk16};
  line-height: 120%;
  color: ${colors.grey400};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk14};
  }
`;

const StartButton = styled(Button)`
  max-width: fit-content;
  @media (max-width: ${breakpoint.l}px) {
    max-width: none;
    & * {
      display: flex;
      justify-content: center;
    }
  }
`;

const ButtonContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  & p {
    ${typography.grotesk18};
    max-width: 202px;
  }

  & div {
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const Pattern = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Mobile = styled.img`
  position: absolute;
  bottom: -40px;
  pointer-events: none;

  @media (max-width: ${breakpoint.l}px) {
    height: 294px;
    bottom: -60px;
  }
`;
