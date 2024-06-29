import SectionTitle from "../../../components/SectionTitle.tsx";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  breakpoint,
  colors,
  containerStyles,
  outerContainerStyles,
  typography,
} from "../../../components/GlobalStyles.tsx";
import WhyUsData from "../../../data/WhyUsData.ts";
import { SupportedLanguages } from "../../../App.tsx";
import Icon from "./assets/icon.svg?react";
import { motion } from "framer-motion";

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <OuterContainer>
      <Tournated />
      <Container>
        <Box>
          <SectionTitle text={t("why_us")}></SectionTitle>
          <PointsBox>
            <Points $index={[1, 2]}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Count>1</Count>
                <p>{WhyUsData[0][currentLanguage]}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Count>2</Count>
                <p>{WhyUsData[1][currentLanguage]}</p>
              </motion.div>
            </Points>
            <Points $index={[3, 4]}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Count>3</Count>
                <p>{WhyUsData[2][currentLanguage]}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Count>4</Count>
                <p>{WhyUsData[3][currentLanguage]}</p>
              </motion.div>
            </Points>
          </PointsBox>
        </Box>
      </Container>
    </OuterContainer>
  );
};

export default WhyUs;

const OuterContainer = styled.div`
  ${outerContainerStyles}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 340px;
  ${containerStyles};
  padding-block: 34px;

  @media (max-width: ${breakpoint.l}px) {
    justify-content: center;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  max-width: 1068px;
  gap: 40px;

  & ${SectionTitle} {
    color: ${colors.black};
  }

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    max-width: 335px;
  }
`;

const Tournated = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: ${breakpoint.l}px) {
    height: 120px;
    width: 120px;
  }
`;

const PointsBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 868px;
  gap: 40px;
  color: ${colors.black};
  ${typography.grotesk28};

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    ${typography.grotesk16};
    gap: 20px;
  }
`;

const Points = styled.div<{ $index: number[] }>`
  display: flex;
  gap: 40px;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: ${breakpoint.l}px) {
    gap: 20px;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  background: ${colors.black};
  ${typography.grotesk16};
  color: ${colors.white};
`;
