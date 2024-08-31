"use client";

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
import { useTranslations } from "next-intl";
import Image from "next/image";

const platform_1 = "https://i.imgur.com/hqUBov1.png";
const platform_2 = "https://i.imgur.com/nvSxBC8.png";
const platform_3 = "https://i.imgur.com/94qKwQZ.png";

type Colors = "red" | "green" | "orange";

const platformImages = {
  red: platform_1,
  green: platform_3,
  orange: platform_2,
} satisfies { [color in Colors]: string };

const Right = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.l}px)`);
  const [selectedColor, setSelectedColor] = useState<Colors>("orange");
  const t = useTranslations();

  return (
    <Container>
      <Wrapper>
        <Background src={bg.src} />
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
                $color={"green"}
                onClick={() => setSelectedColor("green")}
                $isSelected={selectedColor === "green"}
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
          >
            <Image
              alt="platform preview"
              src={platformImages.orange}
              fill={true}
            />
          </PlatformPreview>
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
          >
            <Image
              alt="platform preview"
              src={platformImages.red}
              fill={true}
            />
          </PlatformPreview>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedColor === "green" && (
          <PlatformPreview
            initial={{ translateX: "100px", opacity: 0 }}
            animate={{ translateX: "0px", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              opacity: { duration: 0.3 },
              type: "spring",
            }}
          >
            <Image
              alt="platform preview"
              src={platformImages.green}
              fill={true}
            />
          </PlatformPreview>
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

const PlatformPreview = styled(motion.div)`
  position: absolute;
  height: 491px;

  @media (min-width: ${breakpoint.l}px) {
    left: 48px;
    bottom: 40px;
    height: 654px;
    width: calc(654px * 1.4);
  }

  @media (max-width: ${breakpoint.l}px) {
    top: 40px;
    left: 0;
    height: 391px;
    width: calc(391px * 1.4);
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
      : $color === "green"
        ? colors.green400
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
