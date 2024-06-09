import styled from "styled-components";
import { breakpoint, typography } from "../../../components/GlobalStyles";
import { useIntervalEffect } from "@react-hookz/web";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Text = "Tournaments" | "Leagues" | "Events" | "Clubs";
const TEXTS = ["Tournaments", "Leagues", "Events", "Clubs"];
const DynamicText = () => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  useIntervalEffect(() => {
    if (selectedTextIndex + 1 < TEXTS.length) {
      setSelectedTextIndex((curr) => curr + 1);
    } else {
      setSelectedTextIndex(0);
    }
  }, 2000);

  return (
    <Slides>
      <AnimatePresence>
        {selectedTextIndex === 0 && (
          <Text
            initial={{ translateX: -20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {TEXTS[0]}
          </Text>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedTextIndex === 1 && (
          <Text
            initial={{ translateX: -20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {TEXTS[1]}
          </Text>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedTextIndex === 2 && (
          <Text
            initial={{ translateX: -20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {TEXTS[2]}
          </Text>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedTextIndex === 3 && (
          <Text
            initial={{ translateX: -20, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {TEXTS[3]}
          </Text>
        )}
      </AnimatePresence>
    </Slides>
  );
};

export default DynamicText;

const Text = styled(motion.p)`
  position: absolute;
  color: #ff720b;
  ${typography.italic}
`;

const Slides = styled.div`
  height: 80px;

  @media (max-width: ${breakpoint.l}px) {
    height: 40px;
  }
`;
