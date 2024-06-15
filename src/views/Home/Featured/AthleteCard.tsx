/// <reference types="vite-plugin-svgr/client" />

import CardContainer from "./CardContainer.tsx";
import styled from "styled-components";
import {
  colors,
  padding,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Tag from "../../../components/Tag.tsx";
import TennisIcon from "../../../assets/Icons/teniss.svg?react";
import TrophyIcon from "../../../assets/Icons/trophy.svg?react";
import MembersIcon from "../../../assets/Icons/members.svg?react";
import MatchesIcon from "../../../assets/Icons/matches.svg?react";
import Stat from "../../../components/Stat.tsx";

const AthleteCard = () => (
  <Container type="athlete">
    <InfoBox>
      <Avatar />
      <TitleBox>
        <Title>Nikita Ribakovs</Title>
        <Tags>
          <Tag variant="secondary" leftIcon={<TennisIcon />}>
            Tennis
          </Tag>
        </Tags>
      </TitleBox>
    </InfoBox>
    <Info>
      <Stat stat="500+" name="Tournaments" type="two-line" />
      <Stat icon={<MembersIcon />} stat="1200" name="Members" type="two-line" />
    </Info>
    <Stats>
      <Stat icon={<TrophyIcon />} stat="24" name="Tournaments" />
      <Stat icon={<MatchesIcon />} stat="56" name="Matches" />
    </Stats>
  </Container>
);

export default AthleteCard;

const Avatar = styled.div`
  height: 86px;
  width: 86px;
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
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Title = styled.p`
  flex: 1;
  padding-right: 100px;
`;

const Tags = styled.div`
  display: flex;
  gap: 11px;
`;

const Info = styled.div`
  width: 100%;
  margin-top: 27px;
  display: flex;
  gap: 16px;
  justify-content: start;
  padding-block: 16px;
`;

const Container = styled(CardContainer)`
  justify-content: space-between;
`;

const Stats = styled.div`
  height: 52px;
  width: calc(100% + ${padding.m} * 2);
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.grey1000};
  padding-inline: 20px;
  gap: 16px;
`;