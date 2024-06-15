import styled from "styled-components";
import { colors, typography } from "../../../components/GlobalStyles.tsx";

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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.grotesk16};
  color: ${colors.grey400};
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
