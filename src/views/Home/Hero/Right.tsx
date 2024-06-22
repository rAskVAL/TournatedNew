import styled from "styled-components";
import bg from "../../../assets/herobg.png";
import { useState } from "react";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";
import { useTranslation } from "react-i18next";

type Colors = "red" | "blue" | "orange";

const platformImages = {
  red: "https://i.imgur.com/Cks5zj4.png",
  blue: "https://i.imgur.com/3DSabjf.png",
  orange: "https://i.imgur.com/uNvfyrP.png",
} satisfies { [color in Colors]: string };

const Right = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.l}px)`);
  const [selectedColor, setSelectedColor] = useState<Colors>("orange");
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Background src={bg} />
        {isDesktop && (
          <SelectorWrapper>
            <SelectorTitle>{t("customize")}</SelectorTitle>
            <Selector>
              <Color
                $color={"orange"}
                onClick={() => setSelectedColor("orange")}
                $isSelected={selectedColor === "orange"}
              />
              <Color
                $color={"red"}
                onClick={() => setSelectedColor("red")}
                $isSelected={selectedColor === "red"}
              />
              <Color
                $color={"blue"}
                onClick={() => setSelectedColor("blue")}
                $isSelected={selectedColor === "blue"}
              />
            </Selector>
          </SelectorWrapper>
        )}
      </Wrapper>
      <AnimatePresence>
        {selectedColor === "orange" && (
          <PlatformPreview
            initial={{ translateX: "100px", opacity: 0 }}
            animate={{ translateX: "0px", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              opacity: { duration: 0.3 },
              type: "spring",
            }}
            src={platformImages.orange}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedColor === "red" && (
          <PlatformPreview
            initial={{ translateX: "100px", opacity: 0 }}
            animate={{ translateX: "0px", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              opacity: { duration: 0.3 },
              type: "spring",
            }}
            src={platformImages.red}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedColor === "blue" && (
          <PlatformPreview
            initial={{ translateX: "100px", opacity: 0 }}
            animate={{ translateX: "0px", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              opacity: { duration: 0.3 },
              type: "spring",
            }}
            src={platformImages.blue}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Right;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 400px;
  height: 100%;
  width: 100%;

  @media (min-width: ${breakpoint.l}px) {
    height: min(807px, 100%);
    justify-content: end;
  }
`;

const PlatformPreview = styled(motion.img)`
  position: absolute;
  height: 491px;

  @media (min-width: ${breakpoint.l}px) {
    left: 48px;
    bottom: 40px;
    height: 75%;
  }

  @media (max-width: ${breakpoint.l}px) {
    top: 40px;
    left: 0;
    height: 391px;
  }
`;

const Background = styled.img`
  position: absolute;

  height: 400px;

  @media (min-width: ${breakpoint.l}px) {
    left: 0;
    top: 0;
    height: 807px;
  }

  @media (max-width: ${breakpoint.l}px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SelectorWrapper = styled.div`
  position: absolute;
  left: -180px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  background: ${colors.grey900};
`;

const SelectorTitle = styled.div`
  color: ${colors.grey400};
  ${typography.grotesk16}
`;

const Selector = styled.div`
  display: flex;
  gap: 12px;
`;

const Color = styled.button<{ $color: Colors; $isSelected: boolean }>`
  all: unset;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 0;
  background: ${({ $color }) =>
    $color === "orange"
      ? colors.primary
      : $color === "blue"
        ? colors.purple400
        : colors.red700};
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.7)};
  outline: ${({ $isSelected }) => ($isSelected ? "3px solid white" : "none")};
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
    outline: ${({ $isSelected }) => ($isSelected ? "3px solid white" : "none")};
  }

  &:active {
    opacity: 1;
    outline: ${({ $isSelected }) => ($isSelected ? "3px solid white" : "none")};
  }

  &:focus {
    opacity: 1;
    outline: ${({ $isSelected }) => ($isSelected ? "3px solid white" : "none")};
  }
`;

const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoint.l}px) {
    max-width: 400px;
  }
`;
