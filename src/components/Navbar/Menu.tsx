import styled from "styled-components";
import NavItem from "../NavItem.tsx";
import data from "../../data/NavbarData.tsx";

const Menu = () => {
  return (
    <List>
      {data.map(({ title, to, submenu }) => (
        <NavItem to={to} title={title} submenu={submenu} key={title.en} />
      ))}
    </List>
  );
};

export default Menu;

const List = styled.ul`
  display: flex;
  gap: 34px;
`;
