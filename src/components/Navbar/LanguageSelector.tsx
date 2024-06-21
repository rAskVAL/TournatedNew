import styled from "styled-components";
import NavItem from "../NavItem.tsx";
import { colors, typography } from "../GlobalStyles.tsx";
import Button from "../Button.tsx";

const LanguageSelector = ({ mobile }: { mobile?: boolean }) => {
  if (mobile)
    return (
      <MobileContainer>
        <Label>Language</Label>
        <Buttons>
          <StyledButton style="transparent" selected>
            EN
          </StyledButton>
        </Buttons>
      </MobileContainer>
    );

  return <Container title="EN" to="#" />;
};

export default LanguageSelector;

const Container = styled(NavItem)`
  padding: 16px 20px 16px 20px;
`;

const Label = styled.p`
  ${typography.grotesk12};
  color: ${colors.grey400};
`;

const MobileContainer = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const Buttons = styled.div`
  gap: 9px;
`;

const StyledButton = styled(Button)`
  height: 44px;
`;
