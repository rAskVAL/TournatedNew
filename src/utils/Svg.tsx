import { ReactNode } from "react";

const Svg = ({ svg, className }: { svg: ReactNode; className: string }) => (
  <div className={className}>{svg}</div>
);
export default Svg;
