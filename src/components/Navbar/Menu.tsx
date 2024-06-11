import styled from "styled-components";
import NavItem from "../NavItem.tsx";

const Menu = () => {
  return (
    <List>
      <NavItem to="#">Product</NavItem>
      <NavItem to="#">Solutions</NavItem>
      <NavItem to="#">Sports</NavItem>
      <NavItem to="#">Browse</NavItem>
      <NavItem to="#">More</NavItem>
    </List>
  );
};

export default Menu;

const List = styled.ul`
  display: flex;
  gap: 34px;
`;
