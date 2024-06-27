import styled from "styled-components";
import { colors } from "./GlobalStyles.tsx";
import { useRef } from "react";

const ProgressBar = ({
  percentage,
  className,
  animationLength,
}: {
  percentage?: number;
  animationLength?: number;
  className?: string;
}) => {
  const animationRef = useRef<HTMLDivElement>(null);

  return (
    <Container
      ref={animationRef}
      className={className}
      $percentage={percentage}
      $duration={animationLength}
    />
  );
};

export default ProgressBar;

const Container = styled.div<{
  $percentage?: number;
  $duration?: number;
}>`
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: center;
  margin-top: 27px;
  position: relative;
  max-width: 254px;
  background: red;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: ${colors.grey200};
    position: absolute;
    left: 0;
  }

  &::after {
    transform-origin: left;
    content: "";
    width: 100%;
    transform: scaleX(${({ $percentage }) => $percentage});
    transition: all 0.1s;
    height: 1px;
    background: ${colors.primary};
    position: absolute;
    left: 0;
    z-index: 1;
  }
`;
