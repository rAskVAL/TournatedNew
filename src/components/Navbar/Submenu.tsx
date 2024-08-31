"use client";

import { forwardRef } from "react";
import { useLocale } from "next-intl";
import { SupportedLanguages, useRouter } from "../../i18n/routing.ts";
import ArrowRight from "../../assets/Icons/arrowRight.svg";
import HighlightButton from "./HighlightButton.tsx";
import "./Submenu.css";
export type SubmenuType = {
  highlightZone?: {
    title: { en: string; lv: string };
    items: {
      to?: string;
      title: { en: string; lv: string };
      label: { en: string; lv: string };
      labelColor: string;
      icon: JSX.Element;
    }[];
  };
  links?: {
    title: { en: string; lv: string };
    items: {
      title: { en: string; lv: string };
      to?: string;
      icon?: string;
      onClick?: () => void;
      selected?: boolean;
    }[];
  };
};

type Props = {
  submenu: SubmenuType;
};

const Submenu = forwardRef<HTMLDivElement, Props>(({ submenu }, ref) => {
  const currentLanguage = useLocale() as SupportedLanguages;
  const router = useRouter();

  return (
    <div
      ref={ref}
      className="absolute top-[calc(100%+19px)] p-4 bg-grey950 rounded-md flex gap-4 items-center"
    >
      {submenu?.highlightZone && (
        <div>
          <p className="text-grey400 mb-7 text-xs">
            {submenu.highlightZone.title[currentLanguage]}
          </p>
          <div className="flex items-center gap-4">
            <div className="min-w-[278px]">
              <div className="flex flex-col gap-3.5">
                {submenu.highlightZone.items.slice(0, 2).map((data) => (
                  <HighlightButton data={data} />
                ))}
              </div>
            </div>
            {submenu.highlightZone.items.slice(2, 4).length > 0 && (
              <div className="min-w-[278px]">
                <div className="flex flex-col gap-3.5">
                  {submenu.highlightZone.items.slice(2, 4).map((data) => (
                    <HighlightButton data={data} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {submenu?.links && (
        <div className="min-w-[278px] ">
          <p className="text-grey400 mb-7 text-xs">
            {submenu.links.title[currentLanguage]}
          </p>
          <div className="flex flex-col gap-3.5">
            {submenu.links.items.map((link) => (
              <div
                onClick={() =>
                  link.to
                    ? router.push(link.to)
                    : link.onClick
                      ? link.onClick()
                      : {}
                }
                key={link.title[currentLanguage]}
                className="relative flex justify-between pb-3.5 text-grey400 cursor-pointer hover:text-white group sub"
              >
                <p>{link.title[currentLanguage]}</p>
                <div className="arrow">
                  <ArrowRight />
                </div>
                <div className="absolute bottom-0 w-full h-px bg-grey700">
                  <div className="absolute z-10 h-px bg-primary w-0 transition-width duration-300 group-hover:w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Submenu;
