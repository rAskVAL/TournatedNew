"use client";

import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle.tsx";
import {
  breakpoint,
  colors,
  containerStyles,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { teamData } from "../../../data/teamData.ts";
import BG from "./assets/back.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { SupportedLanguages } from "../../../i18n/routing.ts";

const Team = () => {
  const t = useTranslations();
  const locale = useLocale();
  const language = locale as SupportedLanguages;

  return (
    <OuterContainer>
      <Background />
      <Container>
        <TitleBox>
          <SectionTitle text={t("our_team.title")} className="text-black" />
          <Title>
            {t.rich("our_team.ourCore", {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </Title>
          <Subtitle>{t("our_team.description")}</Subtitle>
        </TitleBox>
        <Members>
          {teamData.map((member, index) => (
            <Member
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index }}
              key={index}
            >
              <Photo src={member.photo} />
              <div>
                <Name>{member.fullName}</Name>
                <Role>{member.role[language]}</Role>
                <Socials>
                  {member.socials.map(({ icon, link }, idx) => (
                    <Icon href={link} className={icon} key={idx} />
                  ))}
                </Socials>
              </div>
            </Member>
          ))}
        </Members>
      </Container>
    </OuterContainer>
  );
};

export default Team;

const OuterContainer = styled.div`
  height: 860px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

const Title = styled.h1`
  ${typography.grotesk48};
  color: ${colors.grey900};

  & span {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk30};

    & span {
      color: ${colors.grey900};
    }
  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  max-width: 495px;
  text-align: center;

  @media (max-width: ${breakpoint.l}px) {
    gap: 16px;
    max-width: 335px;
  }
`;

const Subtitle = styled.p`
  ${typography.grotesk16};
  color: ${colors.grey500};
`;

const Container = styled.div`
  ${containerStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  column-gap: 18px;

  @media (max-width: ${breakpoint.l}px) {
    width: fit-content;
    column-gap: 14px;
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }
`;

const Member = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Photo = styled.img`
  width: 280px;
  height: 312px;
  object-fit: cover;

  @media (max-width: ${breakpoint.l}px) {
    width: 160px;
    height: 170px;
  }
`;

const Name = styled.p`
  ${typography.grotesk18};
  color: ${colors.black};
`;

const Role = styled.p`
  ${typography.grotesk16};
  color: ${colors.grey300};
  margin-top: 4px;
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const Background = styled(BG)`
  position: absolute;
  width: 100%;
`;

const Icon = styled(Link)`
  ${resetStyles};
  && {
    cursor: pointer;
  }
`;
