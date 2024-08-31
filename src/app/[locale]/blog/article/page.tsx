import Article from "../../../../views/Blog/Article.tsx";
import { cacheExchange, createClient, fetchExchange } from "urql";
import { ArticleQuery, GRAPHQL_ENDPOINT } from "../../../../graphql/graphql.ts";
import { registerUrql } from "@urql/next/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResultOf } from "gql.tada";

const makeClient = () => {
  return createClient({
    url: GRAPHQL_ENDPOINT,
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

type Props = {
  searchParams: { slug: string | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const slug = searchParams?.slug;

  if (!slug)
    return {
      title: "Article not found | Tournated.com",
    };

  const { data } = await getClient().query(ArticleQuery, {
    slug: Array.isArray(slug) ? slug.join("") : slug,
  });

  if (!data) {
    return {
      title: "Article not found | Tournated.com",
    };
  } else {
    const metaDescription = data.news.postText
      ? data.news.postText.replace(/<[^>]*>/g, "").slice(0, 157) + "..."
      : undefined;

    return {
      title: (data.news.title ?? "Article not found") + " | Tournated.com",
      description: metaDescription ?? "Article description not provided",
      ...(data.news.image
        ? {
            openGraph: {
              images: [{ url: data.news.image }],
            },
          }
        : {}),
    };
  }
}

const Page = async ({ searchParams }: Props) => {
  if (!searchParams.slug) notFound();

  const { data } = await getClient().query(ArticleQuery, {
    slug: searchParams?.slug,
  });
  return <Article data={data as ResultOf<typeof ArticleQuery>} />;
};

export default Page;
