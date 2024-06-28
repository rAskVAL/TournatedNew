/// <reference types="vite-plugin-svgr/client" />

import CardContainer from "./CardContainer.tsx";
import styled from "styled-components";
import {
  colors,
  padding,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import ReactCountryFlag from "react-country-flag";
import Tag from "../../../components/Tag.tsx";
import ScrollContainer from "react-indiana-drag-scroll";
import Stat from "../../../components/Stat.tsx";
import Organizer from "./Organizer.tsx";

import { useTranslation } from "react-i18next";
import { tournamentData as data } from "../../../data/FeaturedData.tsx";
import { SupportedLanguages } from "../../../App.tsx";
import { Link } from "react-router-dom";

const TournamentCard = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <Container
      type={data.type}
      noPaddingZone={
        <BannerContainer>
          <Banner src={data.bannerSrc} />
          <Avatar>
            <Logo src={data.logoSrc} />
          </Avatar>
        </BannerContainer>
      }
    >
      <TitleBox>
        <Title to={data.link}>{data.title[currentLanguage]}</Title>
        <Details>
          <p>{data.date} ・</p>
          <ReactCountryFlag
            countryCode={data.countryCode}
            svg
            style={{ height: "12px" }}
            title={data.countryCode}
          />
          <p>{data.location}</p>
        </Details>
      </TitleBox>
      <Tags>
        {data.tags.map((tag, index) => (
          <Tag key={index} variant={tag.variant} leftIcon={tag.leftIcon}>
            {tag.text}
          </Tag>
        ))}
      </Tags>
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
      <Participants>
        <Avatars>
          {data.participants.map((src, index) => (
            <UserAvatar key={index} src={src} />
          ))}
        </Avatars>
        <div>
          <p>{data.participantsNames}</p>
          <SubText>
            {t("tournamentCard.and others are confirmed", { count: 77 })}
          </SubText>
        </div>
      </Participants>
      <Organizer title={data.organizer.title} avatar={data.organizer.avatar} />
    </Container>
  );
};
export default TournamentCard;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 86px;
  width: 86px;
  background: ${colors.grey700};
`;

const Banner = styled.img`
  position: absolute;
  top: 0;
  height: 140px;
  width: 100%;
  object-fit: cover;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 183px;
  position: relative;
`;

const Logo = styled.img`
  height: 58px;
  width: 58px;
  object-fit: cover;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: center;
  max-width: 230px;
`;

const Title = styled(Link)`
  ${resetStyles};

  && {
    color: ${colors.white};
    ${typography.grotesk24};
    text-align: center;
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  ${typography.grotesk14};
  color: ${colors.grey400};
  white-space: nowrap;
`;

const Tags = styled(ScrollContainer)`
  position: relative;
  margin-top: 24px;
  width: 100%;
  cursor: grab;
  display: flex;
  gap: 8px;
`;

const Stats = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
`;

const Participants = styled.div`
  width: calc(100% + ${padding.m} * 2);
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 8px;
  margin-top: 30px;
  padding-block: 10px;
  padding-inline: 20px;
  ${typography.grotesk16};
  color: ${colors.white};
  border-top: 1px solid ${colors.grey1000};
`;

const UserAvatar = styled.img`
  height: 24px;
  width: 25px;
  border-radius: 999px;
`;

const Avatars = styled.div`
  display: flex;

  :not(:first-child) {
    margin-left: -4px;
  }
`;

const SubText = styled.p`
  color: ${colors.grey400};
`;

const Container = styled(CardContainer)`
  justify-content: space-between;
`;
