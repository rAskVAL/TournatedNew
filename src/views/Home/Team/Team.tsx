"use client";

import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import team from "../../../assets/team.png";
import SectionTitle from "../../../components/SectionTitle.tsx";
import { useTranslations } from "next-intl";
import Button from "../../../components/Button.tsx";

const Team = () => {
  const t = useTranslations();

  return (
    <Container>
      <Left>
        <div>
          <SectionTitle text="About us" />
          <h3>
            {t.rich("build_by", { span: (chunks) => <span>{chunks}</span> })}
          </h3>
          <p>{t("team_desc")}</p>
        </div>
        <Button style="brand">About us</Button>
      </Left>
      <Right>
        <img src={team.src} alt="Team photo" />
      </Right>
    </Container>
  );
};

export default Team;

const Container = styled.div`
  ${containerStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 506px;
  margin-block: 80px;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    height: 666px;
    margin-block: 40px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 50px 120px 50px 60px;
  background: ${colors.grey800};
  box-sizing: border-box;
  height: 100%;
  flex-basis: 50%;
  flex-grow: 1;
  gap: 28px;

  h3 {
    margin: 16px 0 24px;
    ${typography.grotesk48};
    color: ${colors.white};
    white-space: balance;

    span {
      ${typography.italic};
      color: ${colors.primary};
    }
  }

  p {
    ${typography.grotesk16};
    color: ${colors.grey200};
  }

  @media (max-width: ${breakpoint.l}px) {
    height: fit-content;
    padding: 40px 20px;
    width: 100%;

    h3 {
      ${typography.grotesk28};
    }
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${breakpoint.l}px) {
    height: 291px;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
