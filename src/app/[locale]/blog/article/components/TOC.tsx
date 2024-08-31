"use client";

import { useEffect, useState } from "react";

type Heading = {
  text: string;
  element: HTMLElement;
};

const Toc = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  const [tocDistance, setTocDistance] = useState<number>(0);

  const [topEl, setTopEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const articleText = document.querySelector("article");
    if (articleText) {
      const h1Elements = articleText.querySelectorAll("h1");
      const h2Elements = articleText.querySelectorAll("h2");
      const allHeadings: Heading[] = [];

      h1Elements.forEach((h1) =>
        allHeadings.push({ text: h1.textContent?.trim() || "", element: h1 }),
      );
      h2Elements.forEach((h2) =>
        allHeadings.push({ text: h2.textContent?.trim() || "", element: h2 }),
      );

      setHeadings(allHeadings);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const middleOfViewport = window.innerHeight / 2;

      const closestHeading = headings.reduce<Heading | null>(
        (closest, heading) => {
          const headingRect = heading.element.getBoundingClientRect();
          const headingMiddle = headingRect.top + headingRect.height / 2;
          const distanceFromMiddle = Math.abs(headingMiddle - middleOfViewport);

          if (
            closest === null ||
            distanceFromMiddle <
              Math.abs(
                closest.element.getBoundingClientRect().top +
                  closest.element.getBoundingClientRect().height / 2 -
                  middleOfViewport,
              )
          ) {
            return heading;
          }

          return closest;
        },
        null,
      );

      setTocDistance(
        Math.max(0, ((topEl?.getBoundingClientRect()?.top ?? 0) - 20) * -1),
      );

      if (closestHeading) {
        setActiveHeading(closestHeading.text);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, topEl]);

  return (
    <>
      <div ref={(el) => setTopEl(el)} className="top-0 absolute"></div>
      <div
        className="absolute left-0 w-72 h-auto p-4 flex-col gap-1.5 bg-secondary text-grey500 text-grotesk14 transition-all duration-400 hidden lg:flex"
        style={{ top: tocDistance }}
      >
        <h6 className="text-grey400">Table of content</h6>
        <ul className="flex flex-col gap-0.5 list-disc list-inside">
          {headings.map(({ text, element }) => (
            <li
              key={text}
              onClick={() =>
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className={`cursor-pointer ${
                activeHeading === text ? "font-bold text-white" : ""
              }`}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Toc;
