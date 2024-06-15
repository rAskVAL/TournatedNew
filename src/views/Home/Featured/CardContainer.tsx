import styled, { css } from "styled-components";
import { ReactElement, ReactNode } from "react";
import {
  breakpoint,
  colors,
  padding,
  typography,
} from "../../../components/GlobalStyles.tsx";

type Type = "league" | "tournament" | "athlete";

const perType = <T,>(styles: { [value in Type]: T }, style: Type): T =>
  styles[style];

type Props = {
  children: ReactNode;
  noPaddingZone?: ReactElement;
  type: Type;
  className?: string;
};

const CardContainer = ({ children, noPaddingZone, type, className }: Props) => (
  <Container>
    <TitleBox $type={type}>
      {perType(
        {
          athlete: "Athlete",
          league: "League",
          tournament: "Tournament",
        },
        type,
      )}
    </TitleBox>
    {noPaddingZone}
    <Content className={className}>{children}</Content>
  </Container>
);

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
        athlete: css`
          color: ${colors.black};
          background: ${colors.primary};
        `,
      },
      $type,
    )}
  padding-inline: 8px;
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

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${colors.grey900};
  width: 100%;

  @media (min-width: ${breakpoint.l}px) {
    max-width: 380px;
  }
`;
