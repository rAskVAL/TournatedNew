import styled from "styled-components";
import { Link } from "react-router-dom";
import ChevronDown from "../../assets/Icons/ChevronDown.svg?react";

const Menu = () => {
  return (
    <List>
      <Item to="#">
        Product <Chevron />
      </Item>
      <Item to="#">
        Solutions <Chevron />
      </Item>
      <Item to="#">
        Sports <Chevron />
      </Item>
      <Item to="#">
        Browse <Chevron />
      </Item>
      <Item to="#">
        More <Chevron />
      </Item>
    </List>
  );
};

export default Menu;

const List = styled.ul`
  display: flex;
  gap: 34px;
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  font-family: "Familjen Grotesk", sans-serif;

  &:hover {
    color: #ff720b;
  }
`;

const Chevron = styled(ChevronDown)`
  width: 9px;
  height: 6px;
`;
