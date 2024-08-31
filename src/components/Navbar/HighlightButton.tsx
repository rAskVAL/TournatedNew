import styled from "styled-components";
import Button from "../Button.tsx";
import { colors } from "../GlobalStyles.tsx";
import ArrowRight from "../../assets/Icons/arrowRight.svg";
import { ReactNode } from "react";
import { useLocale } from "next-intl";
import "./HighlightButton.css";
import { SupportedLanguages } from "../../i18n/routing.ts";

type Props = {
  data: {
    title: { en: string; lv: string };
    to?: string;
    icon: ReactNode;
    label: { en: string; lv: string };
    labelColor: string;
  };
};

const HighlightButton = ({
  data: { title, icon, label, labelColor, to },
}: Props) => {
  const currentLanguage = useLocale() as SupportedLanguages;

  return (
    <Button
      disabled={!to}
      onClick={() => window.open(to)}
      style="dark"
      className="hb"
    >
      <div>{icon}</div>
      <div className="w-full flex justify-between">
        <p>{title[currentLanguage]}</p>
        <div className="arrow">
          <Arrow />
        </div>
      </div>
      <div
        className={`absolute top-[10px] right-[10px] px-[6px] pb-[3px] text-grotesk14 text-white ${labelColor}`}
      >
        {label[currentLanguage]}
      </div>
    </Button>
  );
};

export default HighlightButton;

const Arrow = styled(ArrowRight)`
  * {
    stroke: ${colors.grey400};
  }
`;
