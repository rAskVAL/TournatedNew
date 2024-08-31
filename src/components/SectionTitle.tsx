import TournatedShape from "../assets/Icons/tournatedShape.svg";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

const SectionTitle = ({ text, className }: Props) => (
  <div className={twMerge(`flex items-center gap-2 text-white`, className)}>
    <TournatedShape />
    <h2 className="text-grotesk16 whitespace-nowrap">{text}</h2>
  </div>
);

export default SectionTitle;
