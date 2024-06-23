/// <reference types="vite-plugin-svgr/client" />

import styled from "styled-components";
import CardContainer from "./CardContainer.tsx";
import {
  colors,
  padding,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Tag from "../../../components/Tag.tsx";
import Stat from "../../../components/Stat.tsx";
import { useTranslation } from "react-i18next";
import { FeaturedAthlete } from "./data.tsx";
import { Link } from "react-router-dom";

const AthleteCard = ({ data }: { data: FeaturedAthlete }) => {
  const { t } = useTranslation();
  return (
    <Container type="athlete">
      <InfoBox>
        <Avatar src={data.photo} />
        <TitleBox>
          <Title to={data.profile}>{data.name}</Title>
          <Tags>
            <Tag variant="secondary" leftIcon={data.sportIcon}>
              {t(data.sport)}
            </Tag>
          </Tags>
        </TitleBox>
      </InfoBox>
      {data.stats && (
        <Info>
          {data.stats.map((stat, index) => (
            <Stat
              key={index}
              icon={stat.icon}
              stat={stat.stat}
              name={t(stat.nameKey)}
              type={stat.type}
            />
          ))}
        </Info>
      )}
      <Stats>
        {data.tags.map((tag, index) => (
          <Stat
            key={index}
            icon={tag.icon}
            stat={tag.stat}
            name={t(tag.nameKey)}
          />
        ))}
      </Stats>
    </Container>
  );
};

export default AthleteCard;

const Avatar = styled.img`
  min-height: 86px;
  min-width: 86px;
  max-height: 86px;
  max-width: 86px;
  object-fit: cover;
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

const Title = styled(Link)`
  ${resetStyles};

  && {
    flex: 1;
    padding-right: 100px;
    cursor: pointer;
  }
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
