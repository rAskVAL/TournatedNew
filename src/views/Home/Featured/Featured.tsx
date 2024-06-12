import styled from "styled-components";
import { containerStyles } from "../../../components/GlobalStyles.tsx";
import SectionTitle from "../../../components/SectionTitle.tsx";
import CardContainer from "./CardContainer.tsx";

const Featured = () => (
  <Container>
    <SectionTitle text="Featured" />
    <Wrapper>
      <CardsWrapper>
        <CardContainer title="League" type="league">
          test
        </CardContainer>
        <CardContainer title="League" type="league">
          test
        </CardContainer>
      </CardsWrapper>
      <CardContainer title="League" type="tournament">
        test
      </CardContainer>
      <CardsWrapper>
        <CardContainer title="League" type="league">
          test
        </CardContainer>
        <CardContainer title="League" type="league">
          test
        </CardContainer>
      </CardsWrapper>
    </Wrapper>
  </Container>
);

export default Featured;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 89px;
  gap: 65px;
  ${containerStyles};
`;

const Wrapper = styled.div`
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
