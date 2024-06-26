// src/views/leagueCard/LeagueCard.tsx

import { useTranslation } from "react-i18next";
import CardContainer from "./CardContainer.tsx";
import styled from "styled-components";
import {
  colors,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Tag from "../../../components/Tag.tsx";
import Stat from "../../../components/Stat.tsx";
import Organizer from "./Organizer.tsx";
import ScrollContainer from "react-indiana-drag-scroll";
import { leagueCardData } from "./data.tsx";
import { SupportedLanguages } from "../../../App.tsx";
import { Link } from "react-router-dom";

const LeagueCard = ({ data }: { data: (typeof leagueCardData)[number] }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <Container type={data.type}>
      <InfoBox>
        <Avatar>
          <img src={data.logo} alt={data.title.en} />
        </Avatar>
        <TitleBox>
          <Title to={data.link}>{data.title[currentLanguage]}</Title>
          <Tags>
            {data.tags.map((tag, index) => (
              <Tag key={index} variant={tag.variant} leftIcon={tag.leftIcon}>
                {t(tag.textKey)}
              </Tag>
            ))}
          </Tags>
        </TitleBox>
      </InfoBox>
      <Stats>
        {data.stats.map((stat, index) => (
          <Stat
            key={index}
            icon={stat.icon}
            stat={stat.stat}
            name={t(stat.nameKey)}
          />
        ))}
      </Stats>
      {data.type === "league" && (
        <Organizer
          textKey="managedBy"
          title={data.organizer.title}
          avatar={data.organizer.avatar}
        />
      )}
    </Container>
  );
};

export default LeagueCard;

const Avatar = styled.div`
  min-height: 86px;
  min-width: 86px;
  max-height: 86px;
  max-width: 86px;
  background: ${colors.grey700};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 58px;
    width: 58px;
  }
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

const Title = styled(Link)`
  ${resetStyles};
  && {
    flex: 1;
    padding-right: 30px;
    cursor: pointer;
  }
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
  height: 100%;
`;
