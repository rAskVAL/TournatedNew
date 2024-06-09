import styled from "styled-components";
import { Link } from "react-router-dom";
import ChevronDown from "../../assets/Icons/ChevronDown.svg?react";

const LanguageSelector = () => {
  return (
    <Item to="#">
      EN <Chevron />
    </Item>
  );
};

export default LanguageSelector;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 20px 16px 20px;
  color: white;
  font-family: "Space Grotesk", sans-serif;
`;

const Chevron = styled(ChevronDown)`
  width: 9px;
  height: 6px;
  fill: white;
`;
