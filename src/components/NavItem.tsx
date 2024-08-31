import { useEffect, useRef } from "react";
import { useState } from "react";
import ChevronDown from "../assets/Icons/chevronDown.svg";
import Submenu, { SubmenuType } from "./Navbar/Submenu.tsx";
import { useLocale } from "next-intl";
import { SupportedLanguages, useRouter } from "../i18n/routing.ts";
import Svg from "../utils/Svg.tsx";

type Props = {
  title: { en: string; lv: string };
  to?: string;
  className?: string;
  submenu?: SubmenuType;
};

const NavItem = ({ title, to, submenu }: Props) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLAnchorElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node) &&
      titleRef.current &&
      !titleRef.current.contains(event.target as Node)
    ) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    if (isSubmenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubmenuOpen]);

  const locale = useLocale();
  const currentLanguage = locale as SupportedLanguages;
  const router = useRouter();

  return (
    <div className="flex relative text-white">
      <a
        className="flex items-center gap-1 cursor-pointer hover:text-whiteHover"
        onClick={() => {
          setIsSubmenuOpen((curr) => !curr);
          if (to) router.push(to);
        }}
        ref={titleRef}
      >
        {title[currentLanguage]}
        {submenu && <Svg svg={<ChevronDown />} className="navbar-chevron" />}
      </a>
      {submenu && isSubmenuOpen && (
        <Submenu ref={submenuRef} submenu={submenu} />
      )}
    </div>
  );
};

export default NavItem;
