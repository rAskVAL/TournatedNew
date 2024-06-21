import styled from "styled-components";
import Button from "../Button.tsx";
import { colors, typography } from "../GlobalStyles.tsx";
import ArrowRight from "../../assets/Icons/arrowRight.svg?react";
import { ReactNode } from "react";

type Props = {
  data: { title: string; icon: ReactNode; label: string; labelColor: string };
};

const HighlightButton = ({
  data: { title, icon, label, labelColor },
}: Props) => (
  <StyledButton style="dark">
    <div>{icon}</div>
    <TitleZone>
      <p>{title}</p>
      <Arrow />
    </TitleZone>
    <Label style={{ background: labelColor }}>{label}</Label>
  </StyledButton>
);

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
