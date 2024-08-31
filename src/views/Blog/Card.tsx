import { ResultOf } from "gql.tada";
import { NewsQuery } from "../../graphql/graphql.ts";
import htmlToMins from "../../utils/htmlToMins.ts";
import getPrettyDate from "../../utils/getPrettyDate.ts";
import noimage from "../../../public/noimage.png";

const Card = ({
  article,
}: {
  article: ResultOf<typeof NewsQuery>["allNews"]["news"][number];
}) => {
  const minutesToRead = htmlToMins(article.postText);
  return (
    <div className="flex flex-col gap-6 w-full">
      <a href={`/blog/article?slug=${article.slug}`}>
        <img
          src={article.image ?? noimage.src}
          className="w-full lg:h-[366px] h-[264px] object-cover cursor-pointer"
        />
      </a>
      <a
        href={`/blog/article?slug=${article.slug}`}
        className="text-grotesk28 text-white leading-[110%] cursor-pointer lg:text-grotesk24"
      >
        {article.title}
      </a>
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2">
          <img
            src={article.author?.avatar ?? noimage.src}
            className="h-8 w-8 object-cover object-top"
          />
          <div className="flex flex-col">
            <p className="text-grey200 text-grotesk13">Written by:</p>
            <p className="text-white text-grotesk16 whitespace-nowrap max-w-[120px] overflow-hidden text-ellipsis">
              {article.author?.name} {article.author?.surname}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-white text-grotesk14 flex-col gap-0.5 lg:flex-row lg:gap-3 lg:span:hidden">
          <p>{getPrettyDate(article.date as string)}</p>
          <span>・</span>
          <p>{minutesToRead}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
