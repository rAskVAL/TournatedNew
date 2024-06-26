import styled, { css } from "styled-components";
import { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  breakpoint,
  colors,
  padding,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { motion } from "framer-motion";

type Type = "league" | "tournament" | "organization";

const perType = <T,>(styles: { [value in Type]: T }, style: Type): T =>
  styles[style];

type Props = {
  children: ReactNode;
  noPaddingZone?: ReactElement;
  type: Type;
  className?: string;
};

const CardContainer = ({ children, noPaddingZone, type, className }: Props) => {
  const { t } = useTranslation();

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 0.5 }}
    >
      <TitleBox $type={type}>
        {perType(
          {
            league: t("featuredTitles.league"),
            tournament: t("featuredTitles.tournament"),
            organization: t("featuredTitles.organization"),
          },
          type,
        )}
      </TitleBox>
      {noPaddingZone}
      <Content className={className}>{children}</Content>
    </Container>
  );
};

export default CardContainer;

const TitleBox = styled.div<{ $type: Type }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  ${({ $type }) =>
    perType(
      {
        league: css`
          color: ${colors.white};
          background: ${colors.grey700};
        `,
        tournament: css`
          color: ${colors.primary};
          background: ${colors.primaryTransparent};
        `,
        organization: css`
          color: ${colors.white};
          background: ${colors.primary};
        `,
      },
      $type,
    )}
  padding-inline: 8px;
  padding-bottom: 1px;
  ${typography.grotesk14};
`;

const Content = styled.div`
  padding: ${padding.m};
  padding-bottom: 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${colors.grey900};
  width: 100%;
  max-width: 500px;

  @media (min-width: ${breakpoint.l}px) {
    max-width: 380px;
  }
`;
