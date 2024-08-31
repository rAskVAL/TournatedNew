"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Styles = "primary" | "outline" | "brand" | "dark" | "transparent";

type Props = {
  children: ReactNode;
  style: Styles;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  style,
  className,
  selected,
  onClick,
  disabled,
}: Props) => {
  const baseClasses =
    "relative group text-white h-12 px-5 rounded-md flex items-center cursor-pointer whitespace-nowrap overflow-hidden box-border transition-all duration-100 ";
  const styleClasses = {
    primary: "bg-secondary",
    dark: "bg-grey900",
    outline:
      "border border-orange-500 hover:border-primary active:border-primary focus:border-primary",
    brand: "bg-orange-500",
    transparent: "bg-transparent",
  };
  const selectedClasses = {
    primary: "bg-secondaryHover",
    dark: "bg-secondary",
    outline: "bg-brown400",
    brand: "bg-primaryHover",
    transparent: "bg-grey900",
  };
  const activeClasses = "group-active:bg-white";

  return (
    <button
      className={twMerge(
        baseClasses,
        styleClasses[style],
        selected && selectedClasses[style],
        disabled && "pointer-events-none",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center justify-center w-full transition-all duration-100 z-10 group-active:text-black">
        {children}
      </div>
      <div
        className={twMerge(
          "absolute left-0 top-0 h-full transition-all duration-200",
          selected ? "w-full" : "w-0",
          "group-hover:w-full group-active:w-full",
          selectedClasses[style],
          activeClasses,
        )}
      />
      {/*<div*/}
      {/*  className={twMerge(*/}
      {/*    "bg-red-500",*/}
      {/*    "after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:transition-all after:duration-200",*/}
      {/*    selected ? "after:w-full" : "after:w-0",*/}
      {/*    selectedClasses[style],*/}
      {/*  )}*/}
      {/*/>*/}
    </button>
  );
};

export default Button;
