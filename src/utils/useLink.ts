import { useParams } from "next/navigation";

export default (link: string | undefined) => {
  const { lang } = useParams();
  if (!link) return undefined;
  return link.includes("http") ? link : `/${lang}${link}`;
};
