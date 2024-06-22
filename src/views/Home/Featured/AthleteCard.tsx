/// <reference types="vite-plugin-svgr/client" />

import { useTranslation } from "react-i18next";
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

const AthleteCard = () => {
  const { t } = useTranslation();

  return (
    <Container type="athlete">
      <InfoBox>
        <Avatar />
        <TitleBox>
          <Title>Nikita Ribakovs</Title>
          <Tags>
            <Tag variant="secondary" leftIcon={<TennisIcon />}>
              {t("athleteCard.tennis")}
            </Tag>
          </Tags>
        </TitleBox>
      </InfoBox>
      <Info>
        <Stat stat="500+" name={t("athleteCard.tournaments")} type="two-line" />
        <Stat
          icon={<MembersIcon />}
          stat="1200"
          name={t("athleteCard.members")}
          type="two-line"
        />
      </Info>
      <Stats>
        <Stat
          icon={<TrophyIcon />}
          stat="24"
          name={t("athleteCard.tournaments")}
        />
        <Stat
          icon={<MatchesIcon />}
          stat="56"
          name={t("athleteCard.matches")}
        />
      </Stats>
    </Container>
  );
};

export default AthleteCard;

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
  height: 100%;
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
