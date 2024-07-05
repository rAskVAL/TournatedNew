import { useParams } from "react-router-dom";

export default (link: string | undefined) => {
  const { lang } = useParams();
  if (!link) return undefined;
  return link.includes("http") ? link : `/${lang}${link}`;
};
