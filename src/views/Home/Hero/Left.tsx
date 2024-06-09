import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Button from "../../../components/Button.tsx";
import DynamicText from "./DynamicText.tsx";

const Left = () => (
  <Container>
    <TitleBox>
      <Headline>
        <p>Start managing</p>
        <DynamicText />
        <p>for free</p>
      </Headline>
      <Subtitle>
        Or launch your own custom web platform  and mobile app for any sport
      </Subtitle>
    </TitleBox>
    <Stats>
      <Stat>
        <StatTitle>200+</StatTitle>
        <StatSubtitle>Organizations</StatSubtitle>
      </Stat>
      <Stat>
        <StatTitle>20k+</StatTitle>
        <StatSubtitle>Athletes</StatSubtitle>
      </Stat>
      <Stat>
        <StatTitle>2k</StatTitle>
        <StatSubtitle>Tournaments</StatSubtitle>
      </Stat>
      <Stat>
        <StatTitle>100k+</StatTitle>
        <StatSubtitle>Entries</StatSubtitle>
      </Stat>
    </Stats>
    <Buttons>
      <Button style="brand">Start for free</Button>
      <Button style="primary">Go to platform</Button>
    </Buttons>
  </Container>
);

export default Left;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${breakpoint.l}px) {
    margin-block: 20px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: ${colors.grey400};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk14};
    max-width: 335px;
  }
`;

const Headline = styled.div`
  color: white;
  ${typography.grotesk80};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk40};
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 18px;

  @media (max-width: ${breakpoint.l}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${colors.white100};

  &:not(:last-child) {
    border-right: 1px solid #343434;
  }

  @media (max-width: ${breakpoint.l}px) {
    border-right: 1px solid #343434;
  }
`;

const StatTitle = styled.p`
  ${typography.grotesk24}
`;

const StatSubtitle = styled.p`
  color: ${colors.grey400};
  ${typography.grotesk16}
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;
