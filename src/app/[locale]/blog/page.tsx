import Blog from "../../../views/Blog/Blog.tsx";
import { getClient, NewsQuery } from "../../../graphql/graphql.ts";
import { ResultOf } from "gql.tada";

const Page = async () => {
  const { data } = await getClient().query(NewsQuery, {});

  return <Blog data={data as ResultOf<typeof NewsQuery>} />;
};

export default Page;
