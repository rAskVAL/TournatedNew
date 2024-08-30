import styled from "styled-components";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import Button from "../../../components/Button.tsx";
import DynamicText from "./DynamicText.tsx";
import { Trans, useTranslation } from "react-i18next";
import { CALENDLY_URL, PLATFORM_URL } from "../../../consts.ts";

const Left = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleBox>
        <Headline>
          <p>{t("launch_your")}</p>
          <DynamicText />
          <p>{t("sports_platform")}</p>
        </Headline>
        <Subtitle>
          <Trans
            i18nKey="launch_custom_platform"
            components={{ span: <span className="highlight" /> }}
          />
        </Subtitle>
      </TitleBox>
      <Stats>
        <Stat>
          <StatTitle>200+</StatTitle>
          <StatSubtitle>{t("stats.organizations")}</StatSubtitle>
        </Stat>
        <Stat>
          <StatTitle>20k+</StatTitle>
          <StatSubtitle>{t("stats.athletes")}</StatSubtitle>
        </Stat>
        <Stat>
          <StatTitle>3k+</StatTitle>
          <StatSubtitle>{t("stats.tournaments")}</StatSubtitle>
        </Stat>
        <Stat>
          <StatTitle>100k+</StatTitle>
          <StatSubtitle>{t("stats.entries")}</StatSubtitle>
        </Stat>
      </Stats>
      <Buttons>
        <Button onClick={() => window.open(CALENDLY_URL)} style="brand">
          {t("start_for_free")}
        </Button>
        <Button
          onClick={() => window.open(`${PLATFORM_URL}/pricing`)}
          style="primary"
        >
          {t("go_to_platform")}
        </Button>
      </Buttons>
    </Container>
  );
};

export default Left;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${breakpoint.l}px) {
    margin-block: 20px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: ${colors.grey400};

  .highlight {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk14};
    max-width: 335px;
  }
`;

const Headline = styled.div`
  color: white;
  ${typography.grotesk80};

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk40};
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 18px;

  @media (max-width: ${breakpoint.m}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${colors.white};

  &:not(:last-child) {
    border-right: 1px solid #343434;
  }

  @media (max-width: ${breakpoint.l}px) {
    border-right: 1px solid #343434;
  }
`;

const StatTitle = styled.p`
  ${typography.grotesk24}
`;

const StatSubtitle = styled.p`
  color: ${colors.grey400};
  ${typography.grotesk16}
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;
