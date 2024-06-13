import styled from "styled-components";
import { containerStyles } from "../../../components/GlobalStyles.tsx";
import SectionTitle from "../../../components/SectionTitle.tsx";
import CardContainer from "./CardContainer.tsx";
import TournamentCard from "./TournamentCard.tsx";

const Featured = () => (
  <Container>
    <Content>
      <SectionTitle text="Featured" />
      <Wrapper>
        <CardsWrapper>
          <CardContainer type="league">test</CardContainer>
          <CardContainer type="league">test</CardContainer>
        </CardsWrapper>
        <TournamentCard />
        <CardsWrapper>
          <CardContainer type="athlete">test</CardContainer>
          <CardContainer type="athlete">test</CardContainer>
        </CardsWrapper>
      </Wrapper>
    </Content>
  </Container>
);

export default Featured;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 836px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 65px;
  ${containerStyles};
`;

const Wrapper = styled.div`
  height: 542px;
  display: flex;
  width: 100%;
  gap: 20px;
`;

const CardsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
