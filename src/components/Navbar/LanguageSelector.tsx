import styled from "styled-components";
import NavItem from "../NavItem.tsx";

const LanguageSelector = () => {
  return <Container to="#">EN</Container>;
};

export default LanguageSelector;

const Container = styled(NavItem)`
  padding: 16px 20px 16px 20px;
`;
