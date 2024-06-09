import styled from "styled-components";
import { colors, typography } from "../../../components/GlobalStyles.tsx";
import Button from "../../../components/Button.tsx";

const Left = () => (
  <Container>
    <TitleBox>
      <Headline>
        <p>Start managing</p>
        <DynamicText>tournaments </DynamicText>
        <p>for free</p>
      </Headline>
      <Subtitle>
        Or launch your own custom web platform and mobile app.
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
`;

const Headline = styled.div`
  color: white;
  ${typography.grotesk80};
`;

const DynamicText = styled.div`
  color: #ff720b;
  ${typography.grotesk80italic};
`;

const Stats = styled.div`
  display: flex;
  gap: 18px;
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
