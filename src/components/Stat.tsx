import styled, { css } from "styled-components";
import { ReactElement } from "react";
import { colors, typography } from "./GlobalStyles.tsx";
type Props = {
  icon?: ReactElement;
  stat: string | number;
  name: string;
  type?: "line" | "two-line";
};

const Stat = ({ stat, name, icon, type = "line" }: Props) => (
  <Wrapper $type={type}>
    {type === "line" && icon}
    <Value>{stat}</Value> <Name>{name}</Name>
  </Wrapper>
);

export default Stat;

const Value = styled.span`
  color: ${colors.white};
`;

const Name = styled.p``;

const Wrapper = styled.div<{ $type: "line" | "two-line" }>`
  display: flex;
  ${({ $type }) =>
    $type === "line"
      ? css`
          gap: 6px;

          ${Value} {
            margin-right: -2px;
          }
        `
      : css`
          gap: 4px;
          flex-direction: column-reverse;

          ${Name} {
            ${typography.grotesk12}
          }
        `}

  color: ${colors.grey400};
  ${typography.grotesk16};
  white-space: nowrap;
`;
