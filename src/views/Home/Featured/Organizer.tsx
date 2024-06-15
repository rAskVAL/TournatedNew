import styled from "styled-components";
import {
  colors,
  padding,
  typography,
} from "../../../components/GlobalStyles.tsx";

type Props = {
  title: string;
  avatar: string;
};

const Organizer = ({ title, avatar }: Props) => (
  <Container>
    <p>Organized by</p>
    <Wrapper>
      <Logo src={avatar} />
      <p>{title}</p>
    </Wrapper>
  </Container>
);

export default Organizer;

const Container = styled.div`
  height: 52px;
  width: calc(100% + ${padding.m} * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.grotesk16};
  color: ${colors.grey400};
  border-top: 1px solid ${colors.grey1000};
  padding-inline: 20px;
`;

const Logo = styled.img`
  height: 20px;
  width: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.white};
`;
