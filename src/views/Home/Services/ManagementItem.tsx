import styled from "styled-components";
import Button from "../../../components/Button.tsx";
import {
  breakpoint,
  colors,
  typography,
} from "../../../components/GlobalStyles.tsx";
import ArrowRight from "../../../assets/Icons/arrowRight.svg";
import { useLocale } from "next-intl";
import { ReactElement } from "react";
import { SupportedLanguages } from "../../../i18n/routing.ts";

type Props = {
  data: {
    title: { en: string; lv: string };
    to?: string;
    icon: ReactElement;
    label: { en: string; lv: string };
    labelColor: string;
    desc: { lv: string; en: string };
  };
};

const ManagementItem = ({
  data: { title, icon, label, labelColor, to, desc },
}: Props) => {
  const currentLanguage = useLocale() as SupportedLanguages;

  return (
    <StyledButton disabled={!to} onClick={() => window.open(to)} style="dark">
      <Wrapper>
        <Label style={{ background: labelColor }}>
          {label[currentLanguage]}
        </Label>
        <Icon>{icon}</Icon>
        <Content>
          <TitleZone>
            <p>{title[currentLanguage]}</p>
            {to && <Arrow />}
          </TitleZone>
          <Desc>{desc[currentLanguage]}</Desc>
        </Content>
      </Wrapper>
    </StyledButton>
  );
};

export default ManagementItem;

const Icon = styled.div`
  & > svg {
    transform: scale(2);
    transform-origin: top left;

    @media (max-width: ${breakpoint.l}px) {
      height: 40px;
      width: 40px;
      transform: scale(1);
    }
  }
`;

const Desc = styled.div`
  ${typography.grotesk16};
  color: ${colors.grey300};
  height: 60px;
  text-align: start;

  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk14};
    height: auto;
  }
`;

const Arrow = styled(ArrowRight)`
  * {
    stroke: ${colors.grey400};
  }
`;

const StyledButton = styled(Button)`
  height: fit-content;
  padding: 0;
  flex: 1;
  white-space: normal;
  &:hover ${Arrow} {
    * {
      stroke: ${colors.white};
    }
  }

  & > {
    margin: 0;
    padding: 0;
  }

  &:disabled {
    filter: grayscale(1);
    opacity: 0.5;
  }
  @media (max-width: ${breakpoint.l}px) {
    ${typography.grotesk24};
  }
`;

const TitleZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-inline: 6px;
  padding-block: 3px;
  ${typography.grotesk14}
  color: ${colors.white}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: start;
  margin: 20px;

  @media (max-width: ${breakpoint.l}px) {
    height: auto;
    gap: 20px;
  }
`;
