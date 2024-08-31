import styled from "styled-components";
import { colors, resetStyles } from "./GlobalStyles.tsx";

type Props = {
  activeIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
  dataLength: number;
  className?: string;
};
import ArrowRight from "../assets/Icons/arrowRight.svg";

const SwiperButtons = ({
  handleNext,
  handlePrev,
  activeIndex,
  dataLength,
  className,
}: Props) => (
  <Buttons className={className}>
    <Button onClick={handlePrev} disabled={activeIndex === 0}>
      <LeftIcon />
    </Button>
    <Button onClick={handleNext} disabled={activeIndex === dataLength - 1}>
      <RightIcon />
    </Button>
  </Buttons>
);

export default styled(SwiperButtons)``;

const Button = styled.button`
  ${resetStyles};

  && {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
    height: 48px;
    width: 48px;
    border-radius: 6px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.1s;

    &:hover {
      * {
        stroke: ${colors.white};
      }
      background-color: ${colors.black};

      &:active {
        background-color: ${colors.primaryHover};
      }
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
`;

const RightIcon = styled(ArrowRight)`
  path {
    stroke: black;
    transition: all 0.1s;
  }
`;

const LeftIcon = styled(RightIcon)`
  transform: scaleX(-1);
`;
