import { ReactNode } from "react";
import styled from "styled-components";
import { colors, typography } from "../../../components/GlobalStyles.tsx";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
  text: string;
};

const AccordionItem = ({ active, onClick, children, text }: Props) => {
  return (
    <Container $active={active} onClick={onClick}>
      {children}
      <AnimatePresence>
        {active && (
          <Text
            initial={{ height: 0, marginTop: 0 }}
            animate={{ height: "auto", marginTop: 16 }}
            exit={{ height: 0, marginTop: 0 }}
          >
            {text}
          </Text>
        )}
      </AnimatePresence>
      <Lines $active={active}>
        <Line />
        <Line />
      </Lines>
    </Container>
  );
};

export default AccordionItem;

const Container = styled.button<{ $active?: boolean }>`
  &,
  &:hover,
  &:active,
  &:focus {
    all: unset;
  }
  && {
    cursor: pointer;
    padding-top: 16px;
    font-size: 18px;
    color: ${({ $active }) => ($active ? colors.black : colors.grey200)};
    transition: color 0.3s ease;
    ${typography.grotesk28}

    &:hover {
      color: #000;
    }

    &:active {
      color: #ff6600;
    }
  }
`;

const Text = styled(motion.div)`
  margin-top: 16px;
  ${typography.grotesk16};
  color: ${colors.grey600};
  overflow: hidden;
`;

const Line = styled.hr`
  flex: 1;
  display: block;
  height: 1px;
  border: 0;
  padding: 0;
`;

const Lines = styled.div<{ $active?: boolean }>`
  display: flex;
  width: 100%;
  margin-top: 16px;

  :nth-child(1) {
    border-top: 1px solid
      ${({ $active }) => ($active ? colors.primary : colors.grey100)};
  }
  :nth-child(2) {
    border-top: 1px solid ${colors.grey100};
  }
`;
