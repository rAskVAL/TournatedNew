"use client";

import Logo from "../../assets/logo.svg";
import Menu from "./Menu.tsx";
import LanguageSelector from "./LanguageSelector.tsx";
import Button from "../Button.tsx";
import { breakpoint } from "../GlobalStyles.tsx";
import { useMediaQuery } from "@react-hookz/web";
import BurgerIcon from "../../assets/Icons/burger.svg";
import Elipse from "../../assets/Icons/elipse.svg";
import { CALENDLY_URL, FEATUREBASE_LINK, PLATFORM_URL } from "../../consts.ts";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu.tsx";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import useLink from "../../utils/useLink.ts";
import { usePathname } from "next/navigation";
import { useRouter } from "../../i18n/routing.ts";

const Navbar = () => {
  const isNarrow = useMediaQuery(`(max-width: ${breakpoint.l}px)`);
  const isMobile = useMediaQuery(`(max-width: ${breakpoint.sm}px)`);
  const [isMenuOpen, setIsMobileOpen] = useState(false);
  const t = useTranslations();

  const router = useRouter();
  const homePageLink = useLink("/");
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full">
        {!isMobile && (
          <div className="flex justify-center items-center gap-4 h-6 w-full bg-orange300 text-grotesk14 font-normal whitespace-nowrap">
            <p className="text-grey800 font-bold">{t("live")}</p>
            <Elipse />
            <a
              href="https://tournated.gitbook.io/tournated"
              className="cursor-pointer text-brown500 underline"
            >
              {t("docs")}
            </a>
            <Elipse />
            <a
              href={FEATUREBASE_LINK}
              className="cursor-pointer text-brown500 underline"
            >
              {t("feedback")}
            </a>
          </div>
        )}
        <div className="h-[56px] w-full bg-grey900 flex justify-center transition-all duration-200 md:h-[88px]">
          <div className="flex items-center justify-between h-full container mx-auto">
            <div
              onClick={() => homePageLink && router.push("/")}
              className="cursor-pointer"
            >
              <Logo />
            </div>

            {isNarrow ? (
              <div onClick={() => setIsMobileOpen(true)}>
                <BurgerIcon />
              </div>
            ) : (
              <>
                <Menu />
                <div className="flex gap-6 items-center">
                  <LanguageSelector />
                  <Button
                    onClick={() => window.open(CALENDLY_URL)}
                    style="outline"
                  >
                    {t("contact_sales")}
                  </Button>
                  <Button
                    onClick={() => window.open(PLATFORM_URL)}
                    style="primary"
                  >
                    {t("go_platform")}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isNarrow && isMenuOpen && (
          <MobileMenu setIsMobileOpen={setIsMobileOpen} />
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
