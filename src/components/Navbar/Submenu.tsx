import { forwardRef } from "react";
import styled from "styled-components";
import { colors, typography } from "../GlobalStyles.tsx";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/Icons/arrowRight.svg?react";
import data from "./data.ts";

type Props = {
  title: string;
  submenu: (typeof data)[number]["submenu"];
};

const Submenu = forwardRef<HTMLDivElement, Props>(({ title, submenu }, ref) => (
  <Contaier ref={ref}>
    <Title>{title}</Title>
    <Content>
      {submenu &&
        submenu.links.map((link) => (
          <Button to={link.to} key={link.title}>
            <p>{link.title}</p>
            <Arrow />
            <Line />
          </Button>
        ))}
    </Content>
  </Contaier>
));

export default Submenu;

const Arrow = styled(ArrowRight)`
  * {
    stroke: ${colors.grey400};
  }
`;

const Contaier = styled.div`
  min-width: 278px;
  position: absolute;
  top: calc(100% + 19px);
  padding: 16px;
  background: ${colors.grey950};
  border-radius: 6px;
`;

const Title = styled.p`
  ${typography.grotesk12};
  color: ${colors.grey400};
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Line = styled.div`
  width: 100%;
  position: absolute;
  height: 1px;
  background: ${colors.grey700};
  bottom: 0;

  &::after {
    position: absolute;
    z-index: 1;
    content: "";
    height: 1px;
    background: ${colors.primary};
    width: 0;
    transition: width 0.3s;
  }
`;

const Button = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
  color: ${colors.grey400};

  &:hover,
  &:hover ${Arrow} {
    color: ${colors.white};
    * {
      stroke: ${colors.white};
    }
  }

  &:hover ${Line}::after {
    width: 75%;
  }
`;
