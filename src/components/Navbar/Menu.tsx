import NavItem from "../NavItem.tsx";
import data from "../../data/NavbarData.tsx";

const Menu = () => {
  return (
    <ul className="flex gap-[34px]">
      {data.map(({ title, to, submenu }) => (
        <NavItem to={to} title={title} submenu={submenu} key={title.en} />
      ))}
    </ul>
  );
};

export default Menu;
