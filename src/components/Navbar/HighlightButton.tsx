import styled from "styled-components";
import Button from "../Button.tsx";
import { colors, typography } from "../GlobalStyles.tsx";
import ArrowRight from "../../assets/Icons/arrowRight.svg?react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "../../App.tsx";

type Props = {
  data: {
    title: { en: string; lv: string };
    icon: ReactNode;
    label: { en: string; lv: string };
    labelColor: string;
  };
};

const HighlightButton = ({
  data: { title, icon, label, labelColor },
}: Props) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as SupportedLanguages;

  return (
    <StyledButton style="dark">
      <div>{icon}</div>
      <TitleZone>
        <p>{title[currentLanguage]}</p>
        <Arrow />
      </TitleZone>
      <Label style={{ background: labelColor }}>{label[currentLanguage]}</Label>
    </StyledButton>
  );
};

export default HighlightButton;

const Arrow = styled(ArrowRight)`
  * {
    stroke: ${colors.grey400};
  }
`;

const StyledButton = styled(Button)`
  min-height: 96px;
  padding-inline: 10px;
  flex: 1;
  &:hover ${Arrow} {
    * {
      stroke: ${colors.white};
    }
  }

  & > * {
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  }

  ${typography.grotesk20};
`;

const TitleZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding-inline: 6px;
  padding-block: 3px;
  ${typography.grotesk14}
`;
