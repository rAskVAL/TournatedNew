"use client";

import styled from "styled-components";
import NavItem from "../NavItem.tsx";
import { colors, typography } from "../GlobalStyles.tsx";
import Button from "../Button.tsx";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../i18n/routing";
import { startTransition } from "react";

const LanguageSelector = ({ mobile }: { mobile?: boolean }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  if (mobile)
    return (
      <MobileContainer>
        <Label>Language</Label>
        <Buttons>
          <StyledButton
            style="transparent"
            selected={locale === "en"}
            onClick={() => {
              router.replace(pathname, { locale: "en" });
            }}
          >
            EN
          </StyledButton>
          <StyledButton
            style="transparent"
            selected={locale === "lv"}
            onClick={() => {
              router.replace(pathname, { locale: "lv" });
            }}
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
              onClick: () => {
                startTransition(() => {
                  router.replace(pathname, { locale: "en" });
                });
              },
              selected: locale === "en",
            },
            {
              title: { en: "Latviski", lv: "Latviski" },
              onClick: () => {
                router.replace(pathname, { locale: "lv" });
              },
              selected: locale === "lv",
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
