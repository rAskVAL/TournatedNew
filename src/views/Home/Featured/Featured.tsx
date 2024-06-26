import styled from "styled-components";
import {
  breakpoint,
  containerStyles,
} from "../../../components/GlobalStyles.tsx";
import SectionTitle from "../../../components/SectionTitle.tsx";
import TournamentCard from "./TournamentCard.tsx";
import LeagueCard from "./LeagueCard.tsx";
import { useMediaQuery } from "@react-hookz/web";
import { useTranslation } from "react-i18next";
import {
  leagueCardData,
  organizationCardData,
} from "../../../data/FeaturedData.tsx";

const Featured = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.l}px)`);
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <SectionTitle text={t("featuredTitles.title")} />
        <Wrapper>
          <CardsWrapper>
            <LeagueCard data={organizationCardData[0]} />{" "}
            {isDesktop && <LeagueCard data={organizationCardData[1]} />}
          </CardsWrapper>
          <TournamentCard />
          <CardsWrapper>
            <LeagueCard data={leagueCardData[0]} />
            {isDesktop && <LeagueCard data={leagueCardData[1]} />}
          </CardsWrapper>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Featured;

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 56px;
  width: 100%;
  margin-top: 47px;
  padding-bottom: 142px;

  @media (max-width: ${breakpoint.l}px) {
    margin-top: 36px;
    padding-top: 24px;
    padding-bottom: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 65px;
  ${containerStyles};

  @media (max-width: ${breakpoint.l}px) {
    gap: 36px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;
