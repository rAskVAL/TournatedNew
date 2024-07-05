import styled from "styled-components";
import NavItem from "../NavItem.tsx";
import { colors, typography } from "../GlobalStyles.tsx";
import Button from "../Button.tsx";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { SupportedLanguages } from "../../App.tsx";

const LanguageSelector = ({ mobile }: { mobile?: boolean }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const getLink = (lang: SupportedLanguages) =>
    location.pathname.replace(/^\/[^/]+/, `/${lang}`);

  if (mobile)
    return (
      <MobileContainer>
        <Label>Language</Label>
        <Buttons>
          <StyledButton
            style="transparent"
            selected={language === "en"}
            onClick={() => navigate(getLink("en"))}
          >
            EN
          </StyledButton>
          <StyledButton
            style="transparent"
            selected={language === "lv"}
            onClick={() => navigate(getLink("lv"))}
          >
            LV
          </StyledButton>
        </Buttons>
      </MobileContainer>
    );

  return (
    <Container
      title={{ en: "EN", lv: "LV" }}
      submenu={{
        links: {
          title: { en: "Select language", lv: "Izvēlieties valodu" },
          items: [
            {
              title: { en: "English", lv: "English" },
              to: getLink("en"),
              selected: language === "en",
            },
            {
              title: { en: "Latviski", lv: "Latviski" },
              to: getLink("lv"),
              selected: language === "lv",
            },
          ],
        },
      }}
    />
  );
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
  display: flex;
  gap: 9px;
`;

const StyledButton = styled(Button)`
  height: 44px;
`;
