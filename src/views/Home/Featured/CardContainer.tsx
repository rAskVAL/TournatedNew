import styled, { css, RuleSet } from "styled-components";
import { ReactNode } from "react";
import { colors, typography } from "../../../components/GlobalStyles.tsx";

type Type = "league" | "tournament" | "athlete";

type Props = {
  title: string;
  children: ReactNode;
  type: Type;
};

const perType = (
  styles: { [value in Type]: RuleSet | string },
  style: Type,
): RuleSet | string => styles[style];

const CardContainer = ({ title, children, type }: Props) => (
  <Container>
    <TitleBox $type={type}>{title}</TitleBox>
    <Content>{children}</Content>
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
  padding: 20px;
  width: 100%;
  flex: 1;
  background: ${colors.grey900};
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
