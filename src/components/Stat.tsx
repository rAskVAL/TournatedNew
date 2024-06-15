import styled from "styled-components";
import { ReactElement } from "react";
import { colors } from "./GlobalStyles.tsx";
type Props = {
  icon: ReactElement;
  stat: number;
  name: string;
};

const Stat = ({ stat, name, icon }: Props) => (
  <Wrapper>
    {icon}
    <p>
      <Amount>{stat}</Amount> {name}
    </p>
  </Wrapper>
);

export default Stat;

const Wrapper = styled.div`
  display: flex;
  gap: 6px;

  color: ${colors.grey400};
`;

const Amount = styled.span`
  color: ${colors.white};
`;
