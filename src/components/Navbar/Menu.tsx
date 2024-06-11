import styled from "styled-components";
import NavItem from "../NavItem.tsx";
import { navigation } from "../../consts.ts";

const Menu = () => {
  return (
    <List>
      {navigation.map(({ title, to }) => (
        <NavItem to={to}>{title}</NavItem>
      ))}
    </List>
  );
};

export default Menu;

const List = styled.ul`
  display: flex;
  gap: 34px;
`;
