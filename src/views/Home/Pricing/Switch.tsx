import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  colors,
  resetStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";

type Props = {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  switches: string[];
};

const Switch = ({ activeIndex, setActiveIndex, switches }: Props) => {
  const [bgStyle, setBgStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const activeButton = containerRef.current.children[
        activeIndex + 1
      ] as HTMLElement;
      setBgStyle({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft,
      });
    }
  }, [activeIndex]);

  return (
    <Container ref={containerRef}>
      <ActiveBg style={bgStyle} />
      {switches.map((text, i) => (
        <Button
          key={i}
          onClick={() => setActiveIndex(i)}
          $active={activeIndex === i}
        >
          {text}
        </Button>
      ))}
    </Container>
  );
};

export default Switch;

const Container = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  border: 1px solid ${colors.grey50};
  background: ${colors.grey25};
  height: 48px;
  gap: 10px;
  padding: 4px;
`;

const ActiveBg = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  background: ${colors.white};
  border-radius: 6px;
  transition: all 0.2s;
`;

const Button = styled.button<{ $active: boolean }>`
  ${resetStyles};

  && {
    position: relative;
    z-index: 1;
    border-radius: 6px;
    padding: 12px 16px;
    ${typography.grotesk16};
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
