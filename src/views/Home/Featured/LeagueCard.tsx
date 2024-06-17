/// <reference types="vite-plugin-svgr/client" />

import CardContainer from "./CardContainer.tsx";
import styled from "styled-components";
import { colors, typography } from "../../../components/GlobalStyles.tsx";
import Tag from "../../../components/Tag.tsx";
import ChessIcon from "../../../assets/Icons/chess.svg?react";
import TrophyIcon from "../../../assets/Icons/trophy.svg?react";
import MembersIcon from "../../../assets/Icons/members.svg?react";
import ReactCountryFlag from "react-country-flag";
import Stat from "../../../components/Stat.tsx";
import Organizer from "./Organizer.tsx";
import ScrollContainer from "react-indiana-drag-scroll";

const LeagueCard = () => (
  <Container type="league">
    <InfoBox>
      <Avatar />
      <TitleBox>
        <Title>Baltic Chess Academy</Title>
        <Tags>
          <Tag variant="secondary" leftIcon={<ChessIcon />}>
            Chess
          </Tag>
          <Tag
            variant="dark"
            leftIcon={
              <ReactCountryFlag
                countryCode="LV"
                svg
                style={{
                  height: "12px",
                }}
                title="US"
              />
            }
          >
            National League
          </Tag>
        </Tags>
      </TitleBox>
    </InfoBox>
    <Stats>
      <Stat icon={<TrophyIcon />} stat="500+" name="Tournaments" />
      <Stat icon={<MembersIcon />} stat="1200" name="Members" />
    </Stats>
    <Organizer title="LTS" avatar="https://i.imgur.com/Tb7pS83.png" />
  </Container>
);

export default LeagueCard;

const Avatar = styled.div`
  min-height: 86px;
  min-width: 86px;
  max-height: 86px;
  max-width: 86px;
  background: ${colors.grey700};
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  color: ${colors.white};
  ${typography.grotesk24};
  line-clamp: 2;
  overflow: hidden;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Title = styled.p`
  flex: 1;
  padding-right: 30px;
`;

const Tags = styled(ScrollContainer)`
  display: flex;
  gap: 11px;
`;

const Stats = styled(ScrollContainer)`
  width: 100%;
  margin-top: 27px;
  display: flex;
  padding-block: 16px;
  gap: 16px;
  justify-content: start;
`;

const Container = styled(CardContainer)`
  justify-content: space-between;
`;
